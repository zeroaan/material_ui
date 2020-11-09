import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  button: {
    width: 150,
    margin: "auto",
    marginBottom: 10,
    display: "flex",
  },
  buttonGroup: {
    width: 100,
    height: 50,
    borderRadius: 30,
  },
  checkBox: {
    // Checkbox 는 width, height 먹지 않음
    width: 50,
    height: 50,
  },
  textfield: {
    margin: 20,
    display: "block",
  },
});
