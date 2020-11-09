import * as React from "react";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  return (
    <>
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
        <Typography variant="body1">Learn how to use Material Ui</Typography>
      </ThemeProvider>
    </>
  );
}

export default TypographyMui;
