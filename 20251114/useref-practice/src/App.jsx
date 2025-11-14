import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// Contreolled Conponent
// 입력 값을 실시간으로 검사 하고 싶을 때
// 입력 값이 다른 컴포넌트에 바로 영향을 줄 때
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ControlledInput />
      <UseRefInput />
    </>
  );
}

export default App;

const UseRefInput = () => {
  const inputRef = useRef(null);
  const getInputValue = () => {
    console.log(inputRef.current.value);
  };
  return (
    <input
      type="text"
      ref={inputRef}
      onChange={() => {
        getInputValue();
      }}
    ></input>
  );
};

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
};
