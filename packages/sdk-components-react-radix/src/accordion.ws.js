"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaAccordionContent =
  exports.metaAccordionTrigger =
  exports.metaAccordionHeader =
  exports.metaAccordionItem =
  exports.metaAccordion =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var preset_styles_1 = require("./shared/preset-styles");
var accordion_props_1 = require("./__generated__/accordion.props");
exports.metaAccordion = {
  icon: svg_1.AccordionIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.AccordionItem],
  },
  presetStyle: { div: normalize_css_1.div },
  initialProps: ["value", "collapsible"],
  props: accordion_props_1.propsAccordion,
};
exports.metaAccordionItem = {
  label: "Item",
  icon: svg_1.ItemIcon,
  indexWithinAncestor: meta_1.radix.Accordion,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.AccordionHeader, meta_1.radix.AccordionContent],
  },
  presetStyle: { div: normalize_css_1.div },
  initialProps: ["value"],
  props: accordion_props_1.propsAccordionItem,
};
exports.metaAccordionHeader = {
  label: "Item Header",
  icon: svg_1.HeaderIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.AccordionTrigger],
  },
  presetStyle: {
    h3: __spreadArray(
      __spreadArray([], normalize_css_1.h3, true),
      [
        {
          property: "margin-top",
          value: { type: "unit", unit: "px", value: 0 },
        },
        {
          property: "margin-bottom",
          value: { type: "unit", unit: "px", value: 0 },
        },
      ],
      false
    ),
  },
  props: accordion_props_1.propsAccordionHeader,
};
exports.metaAccordionTrigger = {
  label: "Item Trigger",
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  states: [{ label: "Open", selector: "[data-state=open]" }],
  presetStyle: {
    button: [normalize_css_1.button, preset_styles_1.buttonReset].flat(),
  },
  props: accordion_props_1.propsAccordionTrigger,
};
exports.metaAccordionContent = {
  label: "Item Content",
  icon: svg_1.ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: accordion_props_1.propsAccordionContent,
};
