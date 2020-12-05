import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@material-ui/core/Typography";

const divStyled = css`
  color: red;
  font-size: 50px;
`;

const Test = () => {
  return (
    <>
      <div css={divStyled}>123</div>
      <Typography css={divStyled}>asda</Typography>
    </>
  );
};

export default Test;
