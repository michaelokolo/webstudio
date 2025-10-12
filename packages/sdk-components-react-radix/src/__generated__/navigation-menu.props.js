"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsNavigationMenuTrigger =
  exports.propsNavigationMenuLink =
  exports.propsNavigationMenuItem =
  exports.propsNavigationMenuContent =
  exports.propsNavigationMenuViewport =
  exports.propsNavigationMenuList =
  exports.propsNavigationMenu =
    void 0;
exports.propsNavigationMenu = {
  defaultValue: { required: false, control: "text", type: "string" },
  delayDuration: {
    description:
      "The duration from when the pointer enters the trigger until the tooltip gets opened.\n@defaultValue 200",
    required: false,
    control: "number",
    type: "number",
  },
  dir: {
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"],
    description: "The text directionality of the element",
  },
  skipDelayDuration: {
    description:
      "How much time a user has to enter another trigger without incurring a delay again.\n@defaultValue 300",
    required: false,
    control: "number",
    type: "number",
  },
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element",
  },
};
exports.propsNavigationMenuList = {};
exports.propsNavigationMenuViewport = {};
exports.propsNavigationMenuContent = {};
exports.propsNavigationMenuItem = {
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element",
  },
};
exports.propsNavigationMenuLink = {
  active: { required: false, control: "boolean", type: "boolean" },
};
exports.propsNavigationMenuTrigger = {};
