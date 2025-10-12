"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsCollapsibleContent =
  exports.propsCollapsibleTrigger =
  exports.propsCollapsible =
    void 0;
exports.propsCollapsible = {
  disabled: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether the form control is disabled",
  },
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description:
      "Show or hide the content of this component on the canvas. This will not affect the initial state of the component.",
  },
};
exports.propsCollapsibleTrigger = {};
exports.propsCollapsibleContent = {};
