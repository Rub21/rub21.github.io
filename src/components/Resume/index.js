import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = {
    root: {
        minHeight: `calc(100vh - 100px)`,
        paddingTop: "100px",
        paddingLeft: "20px",
        paddingRight: "20px"
    }
};
class Resume extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h1>Resume</h1>
                <div>
                <object width="100%" height="1000px" data="http://rub21.com/assets/rub21_resume.pdf" type="application/pdf">   </object>
                </div>
            </div>
        );
    }
}

Resume.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
