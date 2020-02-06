import React, { Component } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/styles";
import {
  MuiThemeProvider,
  createMuiTheme,
  Drawer,
  Hidden,
  Grid
} from "@material-ui/core";
import { compose } from "recompose";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";

import HeaderVertical from "../components/Helpers/HeaderVertical";
import HeaderHorizontal from "../components/Helpers/HeaderHorizontal";
import SidebarMenu from "../components/Helpers/SidebarMenu";
import Footer from "../components/Helpers/Footer";

let theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: amber,
    secondary: purple
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      '"Helvetica"',
      '"Arial"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(","),
    fontSize: 16
  }
});

const drawerWidth = 240;

const styles = {
  root: {
    display: "flex",
    backgroundColor: "#F3F6F8",
    lineHeight: 1.6
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1f2932",
    color: "white",
    flex: "1",
    boxShadow: "10px 0 20px rgba(40,40,100,.12)"
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexGrow: 1,
    backgroundColor: "inherit"
  }
};

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden mdUp implementation="css">
              <HeaderHorizontal handleDrawerToggle={this.handleDrawerToggle} />
              <Drawer
                variant="temporary"
                anchor={"right"}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true
                }}
              >
                <SidebarMenu />
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                <HeaderVertical />
                <SidebarMenu />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <Grid container>
              <Grid item xs>
                <div className={classes.chartsContent}>
                  {this.props.children}
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Footer />
              </Grid>
            </Grid>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Layout);
