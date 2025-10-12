"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var react_1 = require("react");
var LabelPrimitive = require("@radix-ui/react-label");
exports.Label = (0, react_1.forwardRef)(function (props, ref) {
  return <LabelPrimitive.Root ref={ref} {...props} />;
});
