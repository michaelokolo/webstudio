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
var theme_1 = require("./shared/theme");
/**
 * Styles source without animations:
 * https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/label.tsx
 *
 * Attributions
 * MIT License
 * Copyright (c) 2023 shadcn
 **/
exports.meta = {
  category: "radix",
  description:
    "An accessible label to describe the purpose of an input. Match the “For” property on the label with the “ID” of the input to connect them.",
  order: 102,
  template: (
    <proxy_1.radix.Label
      // text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
      // We are not supporting peer like styles yet
      ws:style={(0, template_1.css)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        font-size: ",
              ";\n        line-height: ",
              ";\n        font-weight: ",
              ";\n      ",
            ],
            [
              "\n        font-size: ",
              ";\n        line-height: ",
              ";\n        font-weight: ",
              ";\n      ",
            ]
          )),
        theme_1.fontSize.sm,
        theme_1.lineHeight.none,
        theme_1.weights.medium
      )}
    >
      {new template_1.PlaceholderValue("Form Label")}
    </proxy_1.radix.Label>
  ),
};
var templateObject_1;
