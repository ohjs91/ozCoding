import { Component, useState } from "react";
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

// class 형
class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 1 };
    console.log("constructor");
  }
  componentDidMount() {
    //컴포넌트가 처음 표시될때
    console.log("DidMount");
  }
  componentDidUpdate() {
    //컴포넌트가 업데이트 됬을때
    console.log("DidUpdate");
  }
  componentWillUnmount() {
    //컴포넌트가 제거되기 전
    console.log("WillUnmoun");
  }
  render() {
    console.log("render");
    return (
      <div>
        counter : {this.state.counter}
        <button
          type="button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
export default App;
