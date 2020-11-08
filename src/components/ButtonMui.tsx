import * as React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "../style";

function ButtonMui() {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.button}
        startIcon={<SaveIcon />}
        size="small"
        variant="contained"
        color="primary"
      >
        Contained 1
      </Button>
      <Button
        className={classes.button}
        size="large"
        variant="contained"
        color="secondary"
        disabled
      >
        Contained 2
      </Button>
      <Button
        className={classes.button}
        endIcon={<DeleteIcon />}
        size="small"
        variant="outlined"
        color="primary"
      >
        Outlined 1
      </Button>
      <Button
        className={classes.button}
        size="medium"
        variant="outlined"
        color="secondary"
      >
        Outlined 2
      </Button>
      <Button
        className={classes.button}
        size="large"
        variant="text"
        color="primary"
      >
        Text 1
      </Button>

      <ButtonGroup
        style={{ borderRadius: 30 }}
        size="small"
        variant="contained"
      >
        <Button
          className={classes.buttonGroup}
          startIcon={<SaveIcon />}
          color="primary"
        >
          Save
        </Button>
        <Button
          className={classes.buttonGroup}
          startIcon={<DeleteIcon />}
          color="secondary"
        >
          Delete
        </Button>
      </ButtonGroup>
    </>
  );
}

export default ButtonMui;
