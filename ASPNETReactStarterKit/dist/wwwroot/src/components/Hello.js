"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Button_1 = require("@material-ui/core/Button");
exports.Hello = (props) => (React.createElement("h1", null,
    "Hello World ",
    React.createElement("br", null),
    "compiler: ",
    props.compiler,
    " framework: ",
    props.framework,
    "!",
    React.createElement(Button_1.default, { variant: "contained", color: "primary" }, "Hello World")));
//# sourceMappingURL=Hello.js.map