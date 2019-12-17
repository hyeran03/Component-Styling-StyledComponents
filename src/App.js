import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGrop = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

// 색상들을 밖을로 빼내 단순하게 만들어 사용함 - ThemeProvider
const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
};

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <>
      <ThemeProvider
        theme={{
          palette
        }}
      >
        <>
          <AppBlock>
            <ButtonGrop>
              <Button size="large">BUTTON</Button>
              <Button color="gray">BUTTON</Button>
              <Button color="pink" size="small">
                BUTTON
              </Button>
            </ButtonGrop>
            <ButtonGrop>
              <Button size="large" outline={true}>
                BUTTON
              </Button>
              <Button color="gray" outline>
                BUTTON
              </Button>
              <Button color="pink" size="small" outline>
                BUTTON
              </Button>
            </ButtonGrop>
            <ButtonGrop>
              <Button size="large" fullWidth>
                BUTTON
              </Button>
              <Button color="gray" size="large" fullWidth>
                BUTTON
              </Button>
              <Button color="pink" size="large" fullWidth>
                BUTTON
              </Button>
            </ButtonGrop>
            <Button color="pink" size="large" fullWidth onClick={onClick}>
              삭제
            </Button>
          </AppBlock>
          <Dialog
            title="정말로 삭제하시겠습니까?"
            confirmText="삭제"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={dialog}
          >
            데이터를 정말로 삭제하시겠습니까?
          </Dialog>
        </>
        {/* ThemProvider내부에는 하나의 컴포넌트밖에 못옴 그렇기에 <></>를 사용해 하나로 묶어줌 */}
      </ThemeProvider>
    </>
  );
}

export default App;

// 확장프로그램인 vscode-styled Component를 사용하면 더 깔금해진다
