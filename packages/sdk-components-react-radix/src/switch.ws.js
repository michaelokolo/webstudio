"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaSwitchThumb = exports.metaSwitch = void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var preset_styles_1 = require("./shared/preset-styles");
var switch_props_1 = require("./__generated__/switch.props");
exports.metaSwitch = {
  icon: svg_1.SwitchIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.SwitchThumb],
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" },
  ],
  presetStyle: {
    button: [normalize_css_1.button, preset_styles_1.buttonReset].flat(),
  },
  initialProps: ["id", "class", "name", "value", "checked", "required"],
  props: switch_props_1.propsSwitch,
};
exports.metaSwitchThumb = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" },
  ],
  presetStyle: {
    span: normalize_css_1.span,
  },
  props: switch_props_1.propsSwitchThumb,
};
