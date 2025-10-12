"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
var template_1 = require("@webstudio-is/template");
var proxy_1 = require("./shared/proxy");
var styles_1 = require("./shared/styles");
var theme_1 = require("./shared/theme");
/**
 * Styles source without animations:
 * https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/tooltip.tsx
 *
 * Attributions
 * MIT License
 * Copyright (c) 2023 shadcn
 **/
exports.meta = {
  category: "radix",
  description:
    "Displays content that is related to the trigger, when the trigger is hovered with the mouse or focused with the keyboard. You are reading an example of a tooltip right now.",
  order: 7,
  template: (
    <proxy_1.radix.Tooltip>
      <proxy_1.radix.TooltipTrigger>
        <template_1.$.Button ws:style={(0, styles_1.getButtonStyle)("outline")}>
          {new template_1.PlaceholderValue("Button")}
        </template_1.$.Button>
      </proxy_1.radix.TooltipTrigger>
      <proxy_1.radix.TooltipContent
        /**
         *  z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md
         **/
        ws:style={(0, template_1.css)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                "\n          z-index: ",
                ";\n          overflow: hidden;\n          border-radius: ",
                ";\n          background-color: ",
                ";\n          padding: ",
                " ",
                ";\n          font-size: ",
                ";\n          line-height: ",
                ";\n          color: ",
                ";\n          box-shadow: ",
                ";\n        ",
              ],
              [
                "\n          z-index: ",
                ";\n          overflow: hidden;\n          border-radius: ",
                ";\n          background-color: ",
                ";\n          padding: ",
                " ",
                ";\n          font-size: ",
                ";\n          line-height: ",
                ";\n          color: ",
                ";\n          box-shadow: ",
                ";\n        ",
              ]
            )),
          theme_1.zIndex[50],
          theme_1.borderRadius.md,
          theme_1.colors.popover,
          theme_1.spacing[1.5],
          theme_1.spacing[3],
          theme_1.fontSize.sm,
          theme_1.fontSizeLineHeight.sm,
          theme_1.colors.popoverForeground,
          theme_1.boxShadow.md
        )}
      >
        <template_1.$.Text>
          {new template_1.PlaceholderValue("The text you can edit")}
        </template_1.$.Text>
      </proxy_1.radix.TooltipContent>
    </proxy_1.radix.Tooltip>
  ),
};
var templateObject_1;
