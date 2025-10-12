"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsTabsContent =
  exports.propsTabsTrigger =
  exports.propsTabsList =
  exports.propsTabs =
    void 0;
exports.propsTabs = {
  activationMode: {
    description:
      "Whether a tab is activated automatically or manually.\n@defaultValue automatic",
    required: false,
    control: "radio",
    type: "string",
    options: ["automatic", "manual"],
  },
  defaultValue: {
    description: "The value of the tab to select by default, if uncontrolled",
    required: false,
    control: "text",
    type: "string",
  },
  dir: {
    description: "The direction of navigation between toolbar items.",
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"],
  },
  orientation: {
    description:
      "The orientation the tabs are layed out.\nMainly so arrow navigation is done accordingly (left & right vs. up & down)\n@defaultValue horizontal",
    required: false,
    control: "radio",
    type: "string",
    options: ["horizontal", "vertical"],
  },
  value: {
    description: "The value for the selected tab, if controlled",
    required: false,
    control: "text",
    type: "string",
  },
};
exports.propsTabsList = {
  loop: {
    required: false,
    control: "boolean",
    type: "boolean",
    description: "Whether to loop the media resource",
  },
};
exports.propsTabsTrigger = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element",
  },
};
exports.propsTabsContent = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element",
  },
};
