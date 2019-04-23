import React from "react";
import ReactDOM from "react-dom";
import { AnnotationResult } from "./components/annotation-result";
import ReactGA from "react-ga";

ReactGA.initialize("UA-138495299-1");
ReactGA.pageview("/");

ReactDOM.render(<AnnotationResult />, document.getElementById("app"));
