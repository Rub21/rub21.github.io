import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import MarkdownIt from "markdown-it";
import parse from "html-react-parser";
const md = new MarkdownIt();
const mdContent = `
- Email: rub2106@gmail.com
- [Github](https://github.com/Rub21)
- [Twitter](https://twitter.com/Rub21)
- [Linkedin](https://www.linkedin.com/in/ruben-lopez-mendoza-640378b2)

*My dogs*

![img2](https://user-images.githubusercontent.com/1152236/72189622-51aea880-33cb-11ea-9a30-554e9eaece44.jpeg)

![img1](https://user-images.githubusercontent.com/1152236/72189575-2d52cc00-33cb-11ea-8b5e-45704c6c7c84.jpeg)
`;

const styles = {
  root:{
    minHeight: `calc(100vh - 200px)`,
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: '100px',
  }
};

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Contact me at:</h1>
        <div className={classes.content}>{parse(md.render(mdContent))}</div>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
