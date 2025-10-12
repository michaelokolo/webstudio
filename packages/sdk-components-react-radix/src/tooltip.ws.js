"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaTooltip =
  exports.metaTooltipContent =
  exports.metaTooltipTrigger =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var tooltip_props_1 = require("./__generated__/tooltip.props");
// @todo add [data-state] to button and link
exports.metaTooltipTrigger = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  props: tooltip_props_1.propsTooltipTrigger,
};
exports.metaTooltipContent = {
  icon: svg_1.ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  presetStyle: { div: normalize_css_1.div },
  initialProps: ["side", "sideOffset", "align", "alignOffset"],
  props: tooltip_props_1.propsTooltipContent,
};
exports.metaTooltip = {
  icon: svg_1.TooltipIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.TooltipTrigger, meta_1.radix.TooltipContent],
  },
  initialProps: ["open", "delayDuration", "disableHoverableContent"],
  props: tooltip_props_1.propsTooltip,
};
