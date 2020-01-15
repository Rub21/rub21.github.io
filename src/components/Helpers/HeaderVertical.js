
import React from "react";
import { Card, Typography, StepLabel, makeStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import me from "../../resources/images/me.jpg";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    background: "#FFFFFF",
    boxShadow: "none",
    padding: "2rem",
    textAlign: "center",
  }
}));

export default function Title() {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{borderRadius:'0px'}}>
      <Avatar alt="me" src={me} style={{ width: '150px', height: '150px' }} />
    </Card>
  );
}
