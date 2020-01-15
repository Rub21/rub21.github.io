import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { MenuList, MenuItem, Divider,Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/styles";
import { fetchData } from "../../actions/fetchDataActions";
import config from "./../../config.json";

const styles = {
  menuItem: {
    minHeight: "48px",
    lineHeight: "1",
    textTransform: "uppercase",
    color: "white",
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
    fontWeight: "bolder"
  },
  menuItemNested: {
    minHeight: "48px",
    lineHeight: "1",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    letterSpacing: "0.5px",
    color: "white",
    fontWeight: "bolder",
    paddingLeft: "30px"
  },
  menuList: {
    flex: 1
  },
  sideBar: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: 1
  }
};

class Sidebar extends Component {

  itemMenuElement = (style, selected, item) => (
    <MenuItem
      className={style}
      selected={selected}
      style={selected ? { background: "#0160A2" } : {}}
      component={Link}
      to={item.path}
    >
      {item.title}
    </MenuItem>
  );

  render() {
    const { classes, location } = this.props;

    return (
      <div className={classes.sideBar}>
        <div className={classes.toolbar} />
        <MenuList className={classes.menuList}>
          {config.menu.map((item, i) => {
            const selected = item.path === location.pathname || item.path === `${location.pathname}${location.hash}`;
            return (
              <div key={i}>
                {item.subMenu ? (
                  //Items with submenu
                  <div>
                    {this.itemMenuElement(classes.menuItem, selected, item)}
                    <Divider />
                    <MenuList
                      style={{
                        background: "#38598C"
                      }}
                    >
                      {item.subMenu.map((subItem, idx) => {
                        const subSelected = subItem.path === location.pathname || subItem.path === `${location.pathname}${location.hash}`;
                        return <div key={`${idx}-submenu`}>{this.itemMenuElement(classes.menuItemNested, subSelected, subItem)}</div>;
                      })}
                    </MenuList>
                  </div>
                ) : (
                  this.itemMenuElement(classes.menuItem, selected, item)
                )}
                <Divider />
              </div>
            );
          })}
          <Divider />
        </MenuList>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  workSheetId: state.cbitData.workSheetId,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
});

export default compose(
  connect(mapStateToProps),
  withRouter,
  withStyles(styles)
)(Sidebar);
