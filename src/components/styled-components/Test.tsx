import React from "react";
import styled from "styled-components";

const DivStyled = styled.div<{ textColor?: string; backgroundColor?: string }>`
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 300px;
  font-size: 30px;
  color: ${(props) => props.textColor || "blue"};
  background-color: ${(props) => props.backgroundColor || "green"};
`;

const Test = () => {
  const TextColor = "red";
  const BackgroundColor = "yellow";

  return (
    <>
      <DivStyled textColor={TextColor} backgroundColor={BackgroundColor}>
        props test
      </DivStyled>
    </>
  );
};

export default Test;
