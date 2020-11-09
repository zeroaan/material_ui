import * as React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { useStyles } from "../style";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
      color: "blue",
    },
  },
});
function TypographyMui() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xs">
        {/* maxWidth: xs, sm, md, lg, xl */}
        <div className={classes.div}>
          <AppBar color="secondary">
            <Toolbar className={classes.toolbar}>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">MUI Title</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>
          <ThemeProvider theme={theme}>
            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material Ui
            </Typography>
            <Typography variant="subtitle2">
              Learn how to use Material Ui
            </Typography>
            <Typography variant="body1">
              Learn how to use Material Ui
            </Typography>
          </ThemeProvider>

          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 175, width: "100%" }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 175, width: "100%" }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 175, width: "100%" }} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default TypographyMui;
