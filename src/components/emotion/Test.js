import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

const BtStyled = styled(Button)`
  font-size: 50px;
`;
const IconStyled = styled(AccessAlarmsIcon)`
  font-size: 300px;
`;
const divStyled = css`
  color: red;
  font-size: 50px;
  padding: 50px;
`;
const icon = css`
  font-size: 50px;
`;

const Test = () => {
  return (
    <>
      <div css={divStyled}>123</div>
      <Typography css={divStyled}>asda</Typography>
      <Button variant="contained" css={divStyled}>
        button
      </Button>
      <BtStyled variant="contained">button</BtStyled>
      <IconStyled />
      <AccessAlarmsIcon css={icon} />
    </>
  );
};

export default Test;
