import * as React from "react";
import { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";

import { useStyles } from "./style";

function Checkboxs() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel
        control={<Checkbox name="checkedC" />}
        label="Uncontrolled"
        labelPlacement="top"
      />
      <FormControlLabel
        disabled
        control={<Checkbox name="checkedD" />}
        label="Disabled"
        labelPlacement="start"
      />
      <FormControlLabel
        disabled
        control={<Checkbox checked name="checkedE" />}
        label="Disabled"
        labelPlacement="bottom"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
        labelPlacement="end"
      />
    </FormGroup>
  );
}

function CheckboxMui() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value); // checkedA
    setChecked(e.target.checked);
  };

  return (
    <>
      <Checkboxs />
      <FormGroup>
        <Checkbox
          className={classes.checkBox}
          value="checkedA"
          checked={checked}
          onChange={changeChecked}
          color="primary"
          inputProps={{
            "aria-label": "primary checkbox",
          }}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              icon={<SaveIcon />}
              checkedIcon={<SaveIcon />}
              inputProps={{
                "aria-label": "secondary checkbox",
              }}
            />
          }
          label="Testing Checkbox Label"
        />
      </FormGroup>
    </>
  );
}

export default CheckboxMui;
