import styled from "styled-components";

export const Line = styled.div`
  width: 2px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 2px #9ede9b, inset 0px 0px 1px #9ede9b,
    0px 0px 5px #9ede9b, inset 0px 0px 2px #000;
  height: 300px;
  background-color: #d1f5cf;
  position: absolute;

  &.line1 {
    left: 98px;
    top: 0px;
  }
  &.line2 {
    left: 198px;
    top: 0px;
  }
  &.line3 {
    left: 150px;
    top: -50px;
    transform: rotate(90deg);
  }
  &.line4 {
    left: 150px;
    top: 50px;
    transform: rotate(90deg);
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
