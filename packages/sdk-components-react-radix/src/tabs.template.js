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
 * https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/tabs.tsx
 *
 * Attributions
 * MIT License
 * Copyright (c) 2023 shadcn
 **/
// inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all
// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:pointer-events-none disabled:opacity-50
// data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm
var tabsTriggerStyle = (0, template_1.css)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  border-radius: ",
        ";\n  padding: ",
        " ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  font-weight: ",
        ";\n  transition: ",
        ";\n  &:focus-visible {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    box-shadow: ",
        ";\n  }\n  &:disabled {\n    pointer-events: none;\n    opacity: ",
        ';\n  }\n  &[data-state="active"] {\n    background-color: ',
        ";\n    color: ",
        ";\n    box-shadow: ",
        ";\n  }\n",
      ],
      [
        "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  border-radius: ",
        ";\n  padding: ",
        " ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  font-weight: ",
        ";\n  transition: ",
        ";\n  &:focus-visible {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    box-shadow: ",
        ";\n  }\n  &:disabled {\n    pointer-events: none;\n    opacity: ",
        ';\n  }\n  &[data-state="active"] {\n    background-color: ',
        ";\n    color: ",
        ";\n    box-shadow: ",
        ";\n  }\n",
      ]
    )),
  theme_1.borderRadius.md,
  theme_1.spacing[1.5],
  theme_1.spacing[3],
  theme_1.fontSize.sm,
  theme_1.fontSizeLineHeight.sm,
  theme_1.weights.medium,
  theme_1.transition.all,
  theme_1.boxShadow.ring,
  theme_1.opacity[50],
  theme_1.colors.background,
  theme_1.colors.foreground,
  theme_1.boxShadow.sm
);
// mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
var tabsContentStyle = (0, template_1.css)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  margin-top: ",
        ";\n  &:focus-visible {\n    outline: none;\n    box-shadow: ",
        ";\n  }\n",
      ],
      [
        "\n  margin-top: ",
        ";\n  &:focus-visible {\n    outline: none;\n    box-shadow: ",
        ";\n  }\n",
      ]
    )),
  theme_1.spacing[2],
  theme_1.boxShadow.ring
);
exports.meta = {
  category: "radix",
  description:
    "A set of panels with content that are displayed one at a time. Duplicate both a tab trigger and tab content to add more tabs. Triggers and content are connected according to their order in the Navigator.",
  order: 2,
  template: (
    <proxy_1.radix.Tabs value="0">
      <proxy_1.radix.TabsList
        // inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground
        ws:style={(0, template_1.css)(
          templateObject_3 ||
            (templateObject_3 = __makeTemplateObject(
              [
                "\n          display: inline-flex;\n          height: ",
                ";\n          align-items: center;\n          justify-content: center;\n          border-radius: ",
                ";\n          background-color: ",
                ";\n          padding: ",
                ";\n          color: ",
                ";\n        ",
              ],
              [
                "\n          display: inline-flex;\n          height: ",
                ";\n          align-items: center;\n          justify-content: center;\n          border-radius: ",
                ";\n          background-color: ",
                ";\n          padding: ",
                ";\n          color: ",
                ";\n        ",
              ]
            )),
          theme_1.height[10],
          theme_1.borderRadius.md,
          theme_1.colors.muted,
          theme_1.spacing[1],
          theme_1.colors.mutedForeground
        )}
      >
        <proxy_1.radix.TabsTrigger ws:style={tabsTriggerStyle}>
          {new template_1.PlaceholderValue("Account")}
        </proxy_1.radix.TabsTrigger>
        <proxy_1.radix.TabsTrigger ws:style={tabsTriggerStyle}>
          {new template_1.PlaceholderValue("Password")}
        </proxy_1.radix.TabsTrigger>
      </proxy_1.radix.TabsList>
      <proxy_1.radix.TabsContent ws:style={tabsContentStyle}>
        {new template_1.PlaceholderValue("Make changes to your account here.")}
      </proxy_1.radix.TabsContent>
      <proxy_1.radix.TabsContent ws:style={tabsContentStyle}>
        {new template_1.PlaceholderValue("Change your password here.")}
      </proxy_1.radix.TabsContent>
    </proxy_1.radix.Tabs>
  ),
};
var templateObject_1, templateObject_2, templateObject_3;
