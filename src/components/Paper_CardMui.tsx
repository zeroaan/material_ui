import * as React from "react";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { useStyles } from "../style";

function Paper_CardMui() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" color="primary" gutterBottom>
            Plus
          </Typography>
          <Typography variant="body1">$3,000</Typography>
        </Paper>
        <br />
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h6" color="secondary" gutterBottom>
            Minus
          </Typography>
          <Typography variant="body1">$2,400</Typography>
        </Paper>
      </div>
      <div>
        <Card elevation={5}>
          <CardHeader title="Title" />
          <CardContent>
            <Typography variant="body1" component="p">
              Please enter something. <br />
            </Typography>
            <TextField label="content" />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              button
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Paper_CardMui;
