"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaCollapsibleContent =
  exports.metaCollapsibleTrigger =
  exports.metaCollapsible =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var collapsible_props_1 = require("./__generated__/collapsible.props");
exports.metaCollapsible = {
  icon: svg_1.CollapsibleIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [
      meta_1.radix.CollapsibleTrigger,
      meta_1.radix.CollapsibleContent,
    ],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  initialProps: ["open"],
  props: collapsible_props_1.propsCollapsible,
};
exports.metaCollapsibleTrigger = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  props: collapsible_props_1.propsCollapsibleTrigger,
};
exports.metaCollapsibleContent = {
  icon: svg_1.ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: collapsible_props_1.propsCollapsibleContent,
};
