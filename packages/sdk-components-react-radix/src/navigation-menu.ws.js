"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaNavigationMenuViewport =
  exports.metaNavigationMenuLink =
  exports.metaNavigationMenuContent =
  exports.metaNavigationMenuTrigger =
  exports.metaNavigationMenuItem =
  exports.metaNavigationMenuList =
  exports.metaNavigationMenu =
    void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var normalize_css_1 = require("@webstudio-is/sdk/normalize.css");
var meta_1 = require("./shared/meta");
var navigation_menu_props_1 = require("./__generated__/navigation-menu.props");
exports.metaNavigationMenu = {
  icon: svg_1.NavigationMenuIcon,
  contentModel: {
    category: "instance",
    children: ["instance"],
    descendants: [
      meta_1.radix.NavigationMenuList,
      meta_1.radix.NavigationMenuViewport,
    ],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: navigation_menu_props_1.propsNavigationMenu,
};
exports.metaNavigationMenuList = {
  icon: svg_1.ListIcon,
  label: "Menu List",
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.NavigationMenuItem],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: navigation_menu_props_1.propsNavigationMenuList,
};
exports.metaNavigationMenuItem = {
  icon: svg_1.ListItemIcon,
  label: "Menu Item",
  indexWithinAncestor: meta_1.radix.NavigationMenu,
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [
      meta_1.radix.NavigationMenuTrigger,
      meta_1.radix.NavigationMenuContent,
      meta_1.radix.NavigationMenuLink,
    ],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: navigation_menu_props_1.propsNavigationMenuItem,
};
exports.metaNavigationMenuTrigger = {
  icon: svg_1.TriggerIcon,
  label: "Menu Trigger",
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  props: navigation_menu_props_1.propsNavigationMenuTrigger,
};
exports.metaNavigationMenuContent = {
  icon: svg_1.ContentIcon,
  label: "Menu Content",
  contentModel: {
    category: "none",
    children: ["instance"],
    descendants: [meta_1.radix.NavigationMenuLink],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: navigation_menu_props_1.propsNavigationMenuContent,
};
exports.metaNavigationMenuLink = {
  icon: svg_1.BoxIcon,
  label: "Accessible Link Wrapper",
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  props: navigation_menu_props_1.propsNavigationMenuLink,
};
exports.metaNavigationMenuViewport = {
  icon: svg_1.ViewportIcon,
  label: "Menu Viewport",
  contentModel: {
    category: "none",
    children: ["instance"],
  },
  presetStyle: {
    div: normalize_css_1.div,
  },
  props: navigation_menu_props_1.propsNavigationMenuViewport,
};
