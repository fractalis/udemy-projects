import * as React from "react";
import * as ReactDOM from "react-dom";

import { Home } from "./components/Home";

ReactDOM.render(
    <Home name="Scott" age={33} />, 
    document.getElementById("app")
);