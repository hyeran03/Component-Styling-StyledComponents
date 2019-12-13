import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <AppBlock>
        <Button>BUTTON</Button>
      </AppBlock>
    </>
  );
}

export default App;

// 확장프로그램인 vscode-styled Component를 사용하면 더 깔금해진다
