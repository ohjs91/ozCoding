import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { store } from "./App.jsx";
import App2 from "./App2.jsx";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <App2 />
  </>
  // </StrictMode>
);
