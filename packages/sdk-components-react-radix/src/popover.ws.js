"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaPopoverClose =
  exports.metaPopover =
  exports.metaPopoverContent =
  exports.metaPopoverTrigger =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var popover_props_1 = require("./__generated__/popover.props");
var preset_styles_1 = require("./shared/preset-styles");
// @todo add [data-state] to button and link
exports.metaPopoverTrigger = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  props: popover_props_1.propsPopoverTrigger,
};
exports.metaPopoverContent = {
  icon: svg_1.ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.PopoverClose],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  initialProps: ["side", "sideOffset", "align", "alignOffset"],
  props: popover_props_1.propsPopoverContent,
};
exports.metaPopover = {
  icon: svg_1.PopoverIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.PopoverTrigger, meta_1.radix.PopoverContent],
  },
  initialProps: ["open"],
  props: popover_props_1.propsPopover,
};
exports.metaPopoverClose = {
  icon: svg_1.ButtonElementIcon,
  label: "Close Button",
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: {
    button: [preset_styles_1.buttonReset, normalize_css_1.button].flat(),
  },
  props: popover_props_1.propsPopoverClose,
};
