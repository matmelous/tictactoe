import styled from "styled-components";

export const CrossStyled = styled.div`
  width: 100px;
  height: 100px;
  transform: scale(0.7);

  .neon {
    width: 4px;
    border-radius: 10px;
    box-shadow: inset 0px 0px 2px #000000, inset 0px 0px 1px #000000,
      0px 0px 10px #31878d, 0px 0px 5px #31878d;
    height: 100px;
    background-color: #eefcfc;
  }
`;

export const Arm1 = styled.div`
  transform: translate(0px, 50px) rotate(45deg);
  display: flex;
  height: 4px;
  width: 100px;
  justify-content: space-between;
  align-items: space-between;

  .neon {
    height: 4px;
    width: 47px;
  }
`;
export const Arm2 = styled.div`
  transform: rotate(45deg) translate(32px, -35px);
`;
