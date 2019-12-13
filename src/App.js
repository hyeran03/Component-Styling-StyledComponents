import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

// 색상들을 밖을로 빼내 단순하게 만들어 사용함 - ThemeProvider
const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
};

function App() {
  return (
    <>
      <ThemeProvider
        theme={{
          palette
        }}
      >
        <AppBlock>
          <Button>BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;

// 확장프로그램인 vscode-styled Component를 사용하면 더 깔금해진다
