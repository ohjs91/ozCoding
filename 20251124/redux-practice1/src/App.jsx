import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createStore, legacy_createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

// UI -> Action -> Dispatch -> Reducer -> Store -> UI
const increment = {
  type: "increment",
};
const decrement = {
  type: "decrement",
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter : {counter}</div>
      <button type="button" onClick={() => dispatch(increment)}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement)}>
        -
      </button>
    </>
  );
}

export default App;
