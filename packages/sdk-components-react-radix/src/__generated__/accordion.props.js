"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsAccordionContent =
  exports.propsAccordionTrigger =
  exports.propsAccordionHeader =
  exports.propsAccordionItem =
  exports.propsAccordion =
    void 0;
exports.propsAccordion = {
  collapsible: {
    description:
      "Whether an accordion item can be collapsed after it has been opened.",
    required: false,
    control: "boolean",
    type: "boolean",
    defaultValue: false,
  },
  defaultValue: {
    description:
      "The value of the item whose content is expanded when the accordion is initially rendered. Use\n`defaultValue` if you do not need to control the state of an accordion.",
    required: false,
    control: "text",
    type: "string",
  },
  dir: {
    description: "The language read direction.",
    required: false,
    control: "radio",
    type: "string",
    options: ["ltr", "rtl"],
  },
  disabled: {
    description:
      "Whether or not an accordion is disabled from user interaction.\n@defaultValue false",
    required: false,
    control: "boolean",
    type: "boolean",
  },
  orientation: {
    description: "The layout in which the Accordion operates.",
    required: false,
    control: "radio",
    type: "string",
    defaultValue: "vertical",
    options: ["horizontal", "vertical"],
  },
  value: {
    description:
      "The controlled stateful value of the accordion item whose content is expanded.",
    required: false,
    control: "text",
    type: "string",
  },
};
exports.propsAccordionItem = {
  disabled: {
    description:
      "Whether or not an accordion item is disabled from user interaction.\n@defaultValue false",
    required: false,
    control: "boolean",
    type: "boolean",
  },
  value: {
    required: false,
    control: "text",
    type: "string",
    description: "Current value of the element",
  },
};
exports.propsAccordionHeader = {};
exports.propsAccordionTrigger = {};
exports.propsAccordionContent = {};
