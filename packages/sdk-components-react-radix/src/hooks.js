"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
var collapsible_1 = require("./collapsible");
var tabs_1 = require("./tabs");
var dialog_1 = require("./dialog");
var popover_1 = require("./popover");
var tooltip_1 = require("./tooltip");
var accordion_1 = require("./accordion");
var navigation_menu_1 = require("./navigation-menu");
var select_1 = require("./select");
exports.hooks = [
  collapsible_1.hooksCollapsible,
  tabs_1.hooksTabs,
  dialog_1.hooksDialog,
  popover_1.hooksPopover,
  tooltip_1.hooksTooltip,
  accordion_1.hooksAccordion,
  navigation_menu_1.hooksNavigationMenu,
  select_1.hooksSelect,
];
