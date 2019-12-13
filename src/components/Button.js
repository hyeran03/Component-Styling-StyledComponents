import React from "react";
import styled, { css } from "styled-components";
// css를 사용하여 Tagged Template Liternal 문법을 사용할수 잇게함
import { darken, lighten } from "polished";

// color를 분리시켜 밖에서도 사용할수 잇도록
const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    //비구조할당을 통해 코딩을 간단하게
    const selectedColor = theme.palette[color];
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

 
${colorStyles}
  /* background: ${props => props.theme.palette.blue};
  &:hover {
    background: ${props => lighten(0.1, props.theme.palette.blue)};
  }
  &:active {
    background: ${props => darken(0.1, props.theme.palette.blue)};
  } */

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue"
};

export default Button;
