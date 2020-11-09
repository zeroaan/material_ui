import * as React from "react";
import TextField from "@material-ui/core/TextField";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

import { useStyles } from "../style";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: green[500],
    },
  },
});

function TextFieldMui() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <form>
          <TextField
            className={classes.textfield}
            variant="filled"
            color="primary"
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            color="secondary"
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            color="primary"
            type="date"
          />
          <TextField
            className={classes.textfield}
            variant="filled"
            color="secondary"
            type="time"
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            color="primary"
            label="Name"
          />
          <TextField
            className={classes.textfield}
            variant="filled"
            color="secondary"
            label="Password"
            type="password"
          />
          <TextField
            className={classes.textfield}
            variant="standard"
            color="secondary"
            label="Email"
            type="email"
            placeholder="test@test.com"
          />
          <TextField
            className={classes.textfield}
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            className={classes.textfield}
            variant="outlined"
            label="Error"
            color="secondary"
            defaultValue="my name is @@"
            helperText="Incorrect typing"
          />
          <TextField
            className={classes.textfield}
            variant="filled"
            label="Multiline"
            color="primary"
            multiline
          />
          <TextField
            className={classes.textfield}
            variant="filled"
            label="Multiline"
            color="primary"
            multiline
          />
        </form>
      </ThemeProvider>
    </>
  );
}

export default TextFieldMui;
