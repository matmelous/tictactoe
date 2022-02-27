import React from "react";
import { Arm1, Arm2, CrossStyled } from "./styles";

const Cross = () => {
  return (
    <CrossStyled>
      <Arm1>
        <div className="neon"></div>
        <div className="neon"></div>
      </Arm1>
      <Arm2 className="neon"></Arm2>
    </CrossStyled>
  );
};

export default Cross;
