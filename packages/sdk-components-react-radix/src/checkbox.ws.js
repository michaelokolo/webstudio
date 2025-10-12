"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaCheckboxIndicator = exports.metaCheckbox = void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var preset_styles_1 = require("./shared/preset-styles");
var checkbox_props_1 = require("./__generated__/checkbox.props");
exports.metaCheckbox = {
  icon: svg_1.CheckboxCheckedIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.CheckboxIndicator],
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" },
  ],
  presetStyle: {
    button: [normalize_css_1.button, preset_styles_1.buttonReset].flat(),
  },
  initialProps: ["id", "class", "name", "value", "required", "checked"],
  props: checkbox_props_1.propsCheckbox,
};
exports.metaCheckboxIndicator = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: {
    span: normalize_css_1.span,
  },
  props: checkbox_props_1.propsCheckboxIndicator,
};
