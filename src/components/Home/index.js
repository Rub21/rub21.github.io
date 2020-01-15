import React, { Component } from "react";
import parse from "html-react-parser";
import MarkdownIt from "markdown-it";
import configSkills from "./../../data/skills.json";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const md = new MarkdownIt();

const mdContent = `
Hi, my name is Ruben, I learned that the responsibility and punctuality and the hard working are the keys to success.
I'm a System engineering graduate from San Cristobal de Huamanga University whit the highest score in my class. I got into programming because I love making atomize things, it is magic to see how programming can make easy the life, I can work anytime, anywhere with all the latest tools readily available at my fingertips.

I am looking for my next adventure, so feel free to browse the projects section to check out what I've built, shoot me an email or connect on linkedIn.
      `;
class Home extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: `calc(100vh - 200px)`,
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: '100px',
        }}
      >
        <h1>Hi, I'm a programmer</h1>
        <div>{parse(md.render(mdContent))}</div>
        {configSkills.skills.map(skill =>

          <Card style={{margin:'5px'}}>
            <CardHeader
              subheader={skill.name}
            />
            <CardContent>
              <Grid container style={{ flexGrow: 1 }}>
                {skill.types.map(type =>
                  <Grid item lg={3} style={{ padding: '10px' }}>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Avatar style={{backgroundColor:'#999'}}>
                        {type.class ? <i class={type.class} style={{ fontSize: '2rem' }} colored></i> : <div style={{fontWeight:'bold'}}>{type.skill_name.charAt(0)}</div>}
                          </Avatar>
                      </Grid>
                      <Grid item xs zeroMinWidth style={{ marginTop: '10px' }}>
                        <Typography variant="body2" component="p" color="textSecondary">{type.skill_name}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>)
                }
              </Grid>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}

export default Home;
