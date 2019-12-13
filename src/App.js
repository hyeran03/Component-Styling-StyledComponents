import React from "react";
import styled, { css } from "styled-components";
// tagged templace literal 이 되기위해서는 {css} 를 불러와야한다

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge &&
    // template literal에서는 이 안에 ${props}를 사용할수 없으므로 {css}를 사용 tagged로 바꿈
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return (
    <>
      <Circle color="black" />
      <Circle color="blue" huge />
    </>
  );
}

export default App;

// 확장프로그램인 vscode-styled Component를 사용하면 더 깔금해진다
