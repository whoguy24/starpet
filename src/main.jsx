//Import Modules
// import { StrictMode } from 'react' --(Disabled to prevent multiple function calls related to redux saga in console log)
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";

// Render Core Application to DOM
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </StrictMode>,
);
