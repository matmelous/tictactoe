import styled from "styled-components";

export const CircleStyled = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  min-width: 100px;
  border-radius: 100px;
  transform: scale(0.6);
  box-shadow: inset 0px 0px 2px #8f2184, inset 0px 0px 1px #8f2184,
    0px 0px 10px #8f2184, 0px 0px 5px #8f2184;
  background-color: #eefcfc;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 90px;
    top: 5px;
    left: 5px;
    border-radius: 100px;
    height: 90px;
    background-color: #282c34;
    box-shadow: 0px 0px 2px #8f2184, 0px 0px 1px #8f2184,
      inset 0px 0px 10px #8f2184, inset 0px 0px 5px #8f2184;
  }
`;
