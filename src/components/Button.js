import React from "react";
import styled, { css } from "styled-components";
// css를 사용하여 Tagged Template Liternal 문법을 사용할수 잇게함
import { darken, lighten } from "polished";

// color를 분리시켜 밖에서도 사용할수 잇도록
const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    //비구조할당을 통해 코딩을 간단하게
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      /* outline */
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

// 크기
// 공통된 부분을 묶어 코드를 간소화
//밖으로 빼내 유지보수가 쉽도록
const sizes = {
  large: {
    height: "3rem",
    fontsize: "1.25rem"
  },
  medium: {
    height: "2.25rem",
    fontsize: "1rem"
  },
  small: {
    height: "1.75rem",
    fontsize: "0.875rem"
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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
  margin-top: 2em;

  /* 크기 */
  /* height: 2.25rem;
  font-size: 1rem;

${props =>
  props.size === "large" &&
  css`
    height: 3rem;
    font-size: 1.25rem;
  `}
${props =>
  props.size === "medium" &&
  css`
    height: 2.25rem;
    font-size: 1rem;
  `}
${props =>
  props.size === "small" &&
  css`
    height: 1.75rem;
    font-size: 0.875rem;
  `} */
  
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
${colorStyles}
${sizeStyles}
/* 코드의 순서도 중요하다 적용되는 순간이 달라지기 때문에 효과가 다르게 들어감 */
${fullWidthStyle}

  /* background: ${props => props.theme.palette.blue};
  &:hover {
    background: ${props => lighten(0.1, props.theme.palette.blue)};
  }
  &:active {
    background: ${props => darken(0.1, props.theme.palette.blue)};
  } */

`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium"
};

export default Button;
