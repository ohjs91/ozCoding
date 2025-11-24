import { useState, createContext, useContext } from "react";
import "./App.css";

const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  console.log("App 렌더");

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <Component1 />
      <Component2 />
    </MyContext.Provider>
  );
}

function Component1() {
  console.log("Component1 렌더");
  return (
    <>
      <Component3 />
      <Component4 />
    </>
  );
}

function Component2() {
  console.log("Component2 렌더");
  return (
    <>
      <Component5 />
      <Component6 />
    </>
  );
}

function Component3() {
  const { count } = useContext(MyContext);
  console.log("Component3 렌더");
  return <div>{count}</div>;
}

function Component4() {
  console.log("Component4 렌더");
  return <div>Component4</div>;
}

function Component5() {
  console.log("Component5 렌더");
  return <div>Component5</div>;
}

function Component6() {
  const { setCount } = useContext(MyContext);
  console.log("Component6 렌더");
  return <button onClick={() => setCount((prev) => prev + 1)}>+</button>;
}

export default App;
