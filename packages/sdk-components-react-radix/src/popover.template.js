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
var svg_1 = require("@webstudio-is/icons/svg");
var template_1 = require("@webstudio-is/template");
var proxy_1 = require("./shared/proxy");
var styles_1 = require("./shared/styles");
var theme_1 = require("./shared/theme");
/**
 * Styles source without animations:
 * https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/popover.tsx
 *
 * Attributions
 * MIT License
 * Copyright (c) 2023 shadcn
 **/
exports.meta = {
  category: "radix",
  description: "Displays rich content in a portal, triggered by a button.",
  order: 6,
  template: (
    <proxy_1.radix.Popover>
      <proxy_1.radix.PopoverTrigger>
        <template_1.$.Button ws:style={(0, styles_1.getButtonStyle)("outline")}>
          {new template_1.PlaceholderValue("Button")}
        </template_1.$.Button>
      </proxy_1.radix.PopoverTrigger>
      <proxy_1.radix.PopoverContent
        /**
         *  z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none
         **/
        ws:style={(0, template_1.css)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                "\n          z-index: ",
                ";\n          width: ",
                ";\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          background-color: ",
                ";\n          padding: ",
                ";\n          color: ",
                ";\n          box-shadow: ",
                ";\n          outline: none;\n        ",
              ],
              [
                "\n          z-index: ",
                ";\n          width: ",
                ";\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          background-color: ",
                ";\n          padding: ",
                ";\n          color: ",
                ";\n          box-shadow: ",
                ";\n          outline: none;\n        ",
              ]
            )),
          theme_1.zIndex[50],
          theme_1.width[72],
          theme_1.borderRadius.md,
          theme_1.borderWidth.DEFAULT,
          theme_1.colors.border,
          theme_1.colors.popover,
          theme_1.spacing[4],
          theme_1.colors.popoverForeground,
          theme_1.boxShadow.md
        )}
      >
        <template_1.$.Text>
          {new template_1.PlaceholderValue("The text you can edit")}
        </template_1.$.Text>
        <proxy_1.radix.PopoverClose
          ws:label="Close Button"
          /**
           * absolute right-4 top-4
           * rounded-sm opacity-70
           * ring-offset-background
           * hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
           * flex items-center justify-center h-4 w-4
           **/
          ws:style={(0, template_1.css)(
            templateObject_2 ||
              (templateObject_2 = __makeTemplateObject(
                [
                  "\n            position: absolute;\n            right: ",
                  ";\n            top: ",
                  ";\n            border-radius: ",
                  ";\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: ",
                  ";\n            width: ",
                  ";\n            border: 0;\n            background-color: transparent;\n            outline: none;\n            &:hover {\n              opacity: ",
                  ";\n            }\n            &:focus-visible {\n              box-shadow: ",
                  ";\n            }\n          ",
                ],
                [
                  "\n            position: absolute;\n            right: ",
                  ";\n            top: ",
                  ";\n            border-radius: ",
                  ";\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: ",
                  ";\n            width: ",
                  ";\n            border: 0;\n            background-color: transparent;\n            outline: none;\n            &:hover {\n              opacity: ",
                  ";\n            }\n            &:focus-visible {\n              box-shadow: ",
                  ";\n            }\n          ",
                ]
              )),
            theme_1.spacing[4],
            theme_1.spacing[4],
            theme_1.borderRadius.sm,
            theme_1.height[4],
            theme_1.height[4],
            theme_1.opacity[100],
            theme_1.boxShadow.ring
          )}
        >
          <template_1.$.HtmlEmbed
            ws:label="Close Icon"
            code={svg_1.LargeXIcon}
          />
        </proxy_1.radix.PopoverClose>
      </proxy_1.radix.PopoverContent>
    </proxy_1.radix.Popover>
  ),
};
var templateObject_1, templateObject_2;
