import React from "react";
import ReactDOM from "react-dom";
import { act}  from 'react-dom/test-utils';
import "./index.css";
import App from "./App";

act(() => {
ReactDOM.render(<App />, document.getElementById("root"));
});
