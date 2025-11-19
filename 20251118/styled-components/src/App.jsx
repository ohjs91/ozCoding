import { useState } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
const BlueButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 8px;
  padding: 30px 20px;
`;
const Container = styled.div`
  width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(
    ${(props) => props.input1},
    ${(props) => props.input2},
    ${(props) => props.input3},
    ${(props) => props.input4}
  );
`;

const BigBlueButton = styled(BlueButton)`
  width: 300px;
  height: 120px;
  font-size: 24px;
  font-weight: 900;
`;

const PropsButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: ${(props) => props.padding || 0};
  border-radius: ${(props) => props.barderRadius || 0};
  margin: ${(props) => props.margin || 0};
  width: ${(props) => props.wdith || "auto"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

const BackgroundColorDiv = styled.div`
  width: 300px;
  height: 100px;
  background-color: rgba(
    ${(props) => props.input1},
    ${(props) => props.input2},
    ${(props) => props.input3},
    ${(props) => props.input4}
  );
`;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;
function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Container
        input1={input1}
        input2={input2}
        input3={input3}
        input4={input4}
      >
        <BlueButton>파란버튼</BlueButton>
        <PropsButton
          backgroundColor="blue"
          textColor="white"
          padding="10px 20px"
          barderRadius="8px"
        >
          props파란버튼
        </PropsButton>
        <BigBlueButton>큰파란버튼</BigBlueButton>
        <PropsButton backgroundColor="green" textColor="yellow">
          props버튼
        </PropsButton>
        <br />
        <span>{input1}</span>
        <input
          type="range"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          min={0}
          max={255}
        />
        <span>{input2}</span>
        <input
          type="range"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          min={0}
          max={255}
        />
        <span>{input3}</span>
        <input
          type="range"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          min={0}
          max={255}
        />
        <span>{input4}</span>
        <input
          type="range"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          min={0}
          max={1}
          step={0.1}
        />
        <BackgroundColorDiv
          input1={input1}
          input2={input2}
          input3={input3}
          input4={input4}
        />
      </Container>
    </>
  );
}

export default App;
