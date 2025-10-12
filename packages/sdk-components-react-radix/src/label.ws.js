"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var label_props_1 = require("./__generated__/label.props");
exports.meta = {
  icon: svg_1.LabelIcon,
  presetStyle: { label: normalize_css_1.label },
  initialProps: ["id", "class", "for"],
  props: label_props_1.props,
};
