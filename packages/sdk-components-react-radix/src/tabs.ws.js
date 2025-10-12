"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaTabsContent =
  exports.metaTabsTrigger =
  exports.metaTabsList =
  exports.metaTabs =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var preset_styles_1 = require("./shared/preset-styles");
var tabs_props_1 = require("./__generated__/tabs.props");
exports.metaTabs = {
  icon: svg_1.TabsIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.TabsList, meta_1.radix.TabsContent],
  },
  presetStyle: { div: normalize_css_1.div },
  props: tabs_props_1.propsTabs,
};
exports.metaTabsList = {
  icon: svg_1.HeaderIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.TabsTrigger],
  },
  presetStyle: { div: normalize_css_1.div },
  props: tabs_props_1.propsTabsList,
};
exports.metaTabsTrigger = {
  icon: svg_1.TriggerIcon,
  label: "Tab Trigger",
  indexWithinAncestor: meta_1.radix.Tabs,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  states: [{ label: "Active", selector: "[data-state=active]" }],
  presetStyle: {
    button: [normalize_css_1.button, preset_styles_1.buttonReset].flat(),
  },
  props: tabs_props_1.propsTabsTrigger,
};
exports.metaTabsContent = {
  label: "Tab Content",
  icon: svg_1.ContentIcon,
  indexWithinAncestor: meta_1.radix.Tabs,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: { div: normalize_css_1.div },
  props: tabs_props_1.propsTabsContent,
};
