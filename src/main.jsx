import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./Redux/store"

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/ShopNow">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
