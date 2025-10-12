"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaDialog =
  exports.metaDialogClose =
  exports.metaDialogDescription =
  exports.metaDialogTitle =
  exports.metaDialogContent =
  exports.metaDialogOverlay =
  exports.metaDialogTrigger =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var dialog_props_1 = require("./__generated__/dialog.props");
var preset_styles_1 = require("./shared/preset-styles");
// @todo add [data-state] to button and link
exports.metaDialogTrigger = {
  icon: svg_1.TriggerIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  props: dialog_props_1.propsDialogTrigger,
};
exports.metaDialogOverlay = {
  icon: svg_1.OverlayIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.DialogContent],
  },
  presetStyle: { div: normalize_css_1.div },
  props: dialog_props_1.propsDialogOverlay,
};
exports.metaDialogContent = {
  icon: svg_1.ContentIcon,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      meta_1.radix.DialogTitle,
      meta_1.radix.DialogDescription,
      meta_1.radix.DialogClose,
    ],
  },
  presetStyle: { div: normalize_css_1.div },
  props: dialog_props_1.propsDialogContent,
};
exports.metaDialogTitle = {
  icon: svg_1.HeadingIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: { h2: normalize_css_1.h2 },
  props: dialog_props_1.propsDialogTitle,
};
exports.metaDialogDescription = {
  icon: svg_1.TextIcon,
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: { p: normalize_css_1.p },
  props: dialog_props_1.propsDialogDescription,
};
exports.metaDialogClose = {
  icon: svg_1.ButtonElementIcon,
  label: "Close Button",
  contentModel: {
    category: "none",
    children: ["instance", "rich-text"],
  },
  presetStyle: {
    button: [preset_styles_1.buttonReset, normalize_css_1.button].flat(),
  },
  props: dialog_props_1.propsDialogClose,
};
exports.metaDialog = {
  icon: svg_1.DialogIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [meta_1.radix.DialogTrigger, meta_1.radix.DialogOverlay],
  },
  initialProps: ["open"],
  props: dialog_props_1.propsDialog,
};
