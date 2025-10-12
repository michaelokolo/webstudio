"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaSelectItemText =
  exports.metaSelectItemIndicator =
  exports.metaSelectItem =
  exports.metaSelectViewport =
  exports.metaSelectContent =
  exports.metaSelectValue =
  exports.metaSelectTrigger =
  exports.metaSelect =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var select_props_1 = require("./__generated__/select.props");
exports.metaSelect = {
  icon: svg_1.SelectIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.SelectTrigger, meta_1.radix.SelectContent],
  },
  initialProps: ["name", "value", "open", "required"],
  props: select_props_1.propsSelect,
};
exports.metaSelectTrigger = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.SelectValue],
  },
  presetStyle: { button: normalize_css_1.button },
  props: select_props_1.propsSelectTrigger,
};
exports.metaSelectValue = {
  label: "Value",
  icon: svg_1.FormTextFieldIcon,
  contentModel: {
    category: "none",
    children: [],
  },
  presetStyle: { span: normalize_css_1.span },
  initialProps: ["placeholder"],
  props: select_props_1.propsSelectValue,
};
exports.metaSelectContent = {
  icon: svg_1.ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.SelectViewport],
  },
  presetStyle: { div: normalize_css_1.div },
  props: select_props_1.propsSelectContent,
};
exports.metaSelectViewport = {
  icon: svg_1.ViewportIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.SelectItem],
  },
  presetStyle: { div: normalize_css_1.div },
  props: select_props_1.propsSelectViewport,
};
exports.metaSelectItem = {
  icon: svg_1.ItemIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      meta_1.radix.SelectItemIndicator,
      meta_1.radix.SelectItemText,
    ],
  },
  presetStyle: { div: normalize_css_1.div },
  initialProps: ["value"],
  props: select_props_1.propsSelectItem,
};
exports.metaSelectItemIndicator = {
  label: "Indicator",
  icon: svg_1.CheckMarkIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  presetStyle: { span: normalize_css_1.span },
  props: select_props_1.propsSelectItemIndicator,
};
exports.metaSelectItemText = {
  label: "Item Text",
  icon: svg_1.TextIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: { span: normalize_css_1.span },
  props: select_props_1.propsSelectItemText,
};
