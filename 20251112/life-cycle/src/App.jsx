import { Component, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      {showCounter && <Counter />}
      <button type="button" onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "hide" : "show"}
      </button>
    </>
  );
}

// function 형
function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);
  // 컴포넌트가 처음 렌더링 될때 업데이트 될때도 실핼
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // 처음 렌더링 될때 실행
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // 처음 렌더링 될때, counter2가 변화가 있을때 실행
  useEffect(() => {
    console.log("useEffect");
    // counter2가 변경될때마다 리렌더링 발생 이전 컴포넌트는 없어지고 새로운 컴포넌트가 생겨서 즉 컴포넌트가 없어지는 단계가 들어가있어서 return 이 실행
    return () => {
      console.log("return ");
    };
  }, [counter2]);
  return (
    <div>
      counter : {counter}
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      counter2 : {counter2}
      <button type="button" onClick={() => setCounter2(counter2 - 1)}>
        -
      </button>
    </div>
  );
}
export default App;
