import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
const style = {
  root: {
    marginTop: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
class Page404 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container component="main" maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {"Page no found"}
          </Typography>
        </Container>
      </div>
    );
  }
}
export default withStyles(style)(Page404);
