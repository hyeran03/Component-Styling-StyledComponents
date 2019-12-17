import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
from {
    opacity: 0;

}
to{
    opacity: 1;
}
`;

const fadeOut = keyframes`
from {
    opacity: 1;

}
to{
    opacity: 0;
}
`;

const slideUp = keyframes`
from{
    transform: translateY(200px);
} to{
    transform : translateY(0px);
}
`;

const slideDown = keyframes`
from{
    transform: translateY(0px);
} to{
    transform : translateY(200px);
}
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 4px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

//styled자체를 함수로 사용해서 만든 컴포넌트를 넣어 상속받아 특정 스타일을 덮어쓸수있다
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({
  title, //제목
  children, //내용
  confirmText, //확인버튼 text
  cancelText, // 취소 text
  visible,
  onConfirm,
  onCancel
}) {
  // 지금 애니메이션을 보여주고 있다
  const [animate, setAnimate] = useState(false);
  // 현재 상태가 true -> false 로 전환되고 있다
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    //visible true -> false
    if (
      localVisible && //true
      !visible //false
    ) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible); //localVisible 값 동기화
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인"
};

export default Dialog;
