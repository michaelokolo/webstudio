"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaRadioGroupIndicator =
  exports.metaRadioGroupItem =
  exports.metaRadioGroup =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var preset_styles_1 = require("./shared/preset-styles");
var radio_group_props_1 = require("./__generated__/radio-group.props");
exports.metaRadioGroup = {
  icon: svg_1.RadioGroupIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.RadioGroupItem],
  },
  states: [
    { label: "Checked", selector: "[data-state=checked]" },
    { label: "Unchecked", selector: "[data-state=unchecked]" },
  ],
  presetStyle: {
    div: normalize_css_1.div,
  },
  initialProps: ["id", "class", "name", "value", "required"],
  props: radio_group_props_1.propsRadioGroup,
};
exports.metaRadioGroupItem = {
  icon: svg_1.ItemIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.RadioGroupIndicator],
  },
  presetStyle: {
    button: [normalize_css_1.button, preset_styles_1.buttonReset].flat(),
  },
  initialProps: ["value"],
  props: radio_group_props_1.propsRadioGroupItem,
};
exports.metaRadioGroupIndicator = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  presetStyle: {
    span: normalize_css_1.span,
  },
  props: radio_group_props_1.propsRadioGroupIndicator,
};
