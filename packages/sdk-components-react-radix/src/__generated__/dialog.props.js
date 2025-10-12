"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsDialogDescription =
  exports.propsDialogTitle =
  exports.propsDialogClose =
  exports.propsDialogContent =
  exports.propsDialogOverlay =
  exports.propsDialogTrigger =
  exports.propsDialog =
    void 0;
exports.propsDialog = {
  open: {
    required: false,
    control: "boolean",
    type: "boolean",
    description:
      "Show or hide the content of this component on the canvas. This will not affect the initial state of the component.",
  },
};
exports.propsDialogTrigger = {};
exports.propsDialogOverlay = {};
exports.propsDialogContent = {};
exports.propsDialogClose = {};
exports.propsDialogTitle = {
  tag: {
    required: false,
    control: "select",
    type: "string",
    options: ["h2", "h3", "h1", "h4", "h5", "h6"],
  },
};
exports.propsDialogDescription = {};
