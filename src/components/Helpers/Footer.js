import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#EBEEF3",
    marginTop: "4rem",
    borderTop: "4px solid #1F2932",
    lineHeight: "50px",
    height: "50px"
  }
};

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="center" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          rub21@2020
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "2rem",
              marginRight: "2rem"
            }}
          >
          </div>
        </Grid>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
