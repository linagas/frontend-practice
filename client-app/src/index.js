import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
//own
import "./index.css";
import App from "./App";


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
