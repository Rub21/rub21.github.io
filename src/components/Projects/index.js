import React, { Component } from "react";
import parse from "html-react-parser";
import MarkdownIt from "markdown-it";
import configSkills from "./../../data/skills.json";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";
import projects from "./../../data/projects.json";
import Box from '@material-ui/core/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const style = {
 
};

const md = new MarkdownIt();

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          minHeight: `calc(100vh - 200px)`,
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: '100px'
        }}
      >
        <h1>Projects</h1>

        {projects.map(project =>
          <Card style={{ margin: '5px' }}>
            <CardHeader
              // title={project.title}
              subheader={project.title}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={8}>
                  {project.images ?
                    <Carousel showThumbs={false}>
                      {
                        project.images.map(imagen =>
                          <div>
                            <img src={imagen} />
                          </div>)
                      }
                    </Carousel> :
                    <video
                      width='100%    !important;'
                      height='auto   !important;' controls autoplay loop muted>
                      <source src={project.videos[0]} type="video/mp4" />
                      {'Your browser does not support HTML5 video.'}
                    </video>
                  }
                </Grid>
                <Grid item lg={4}>
                  <Box pr={2} style={{ padding: '5px' }}>
                    <Typography display="block" variant="caption" color="textSecondary">
                      {project.live_url ? (<a href={project.live_url}>{'Alive Page'} {' | '}</a>) : ''}
                      {<a href={project.github_url}>{"Repository - Doc:"}</a>}
                    </Typography>
                    <Typography display="block" variant="caption" color="textSecondary">
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {project.technologies}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      <div style={{ textAlign: "justify" }}>{parse(md.render(project.body))}</div>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}

      </div>
    );
  }
}

export default withStyles(style)(Projects);