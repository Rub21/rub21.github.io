import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  StepLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import me from "../../resources/images/me.jpg";
import Avatar from '@material-ui/core/Avatar';

let theme = createMuiTheme();
const drawerWidth = 240;

const style = {
  appBar: {
    backgroundColor: '#1f2932',
    color: "#38598C",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  title: {
    lineHeight: "1",
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: "bolder"
  },
  menuButton: {
    position: "absolute",
    right: "12px",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
};

class HeaderHorizontal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Avatar alt="me" src={me} style={{ width: '40', height: '40' }} />

          {/* <StepLabel icon={<img src={me} alt="" height="40" />}></StepLabel> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={this.props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

HeaderHorizontal.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(style)(HeaderHorizontal);
