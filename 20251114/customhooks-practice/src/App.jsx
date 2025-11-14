import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const { count, increment, decrement } = useCounter(0, 5);

  const { loading: loading1, data: data1 } = useFetch(
    "http://localhost:3000/data"
  );
  console.log(data1);
  return (
    <>
      <h1>hello</h1>

      <div>count : {count}</div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>

      {!loading1 && (
        <ul>
          {data1.map((el) => (
            <li key={el.id}>{el.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);

  return { count, increment, decrement };
};

export default App;
