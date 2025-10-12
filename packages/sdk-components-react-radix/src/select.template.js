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
var svg_1 = require("@webstudio-is/icons/svg");
var createSelectItem = function (value, label) {
  return (
    <proxy_1.radix.SelectItem
      value={value}
      // relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
      // focus:bg-accent focus:text-accent-foreground
      // data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      ws:style={(0, template_1.css)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        position: relative;\n        display: flex;\n        width: ",
              ";\n        cursor: default;\n        user-select: none;\n        align-items: center;\n        border-radius: ",
              ";\n        padding: ",
              " ",
              " ",
              " ",
              ";\n        font-size: ",
              ";\n        line-height: ",
              ";\n        outline: none;\n        &:focus {\n          background-color: ",
              ";\n          color: ",
              ";\n        }\n        &[data-disabled] {\n          pointer-events: none;\n          opacity: ",
              ";\n        }\n      ",
            ],
            [
              "\n        position: relative;\n        display: flex;\n        width: ",
              ";\n        cursor: default;\n        user-select: none;\n        align-items: center;\n        border-radius: ",
              ";\n        padding: ",
              " ",
              " ",
              " ",
              ";\n        font-size: ",
              ";\n        line-height: ",
              ";\n        outline: none;\n        &:focus {\n          background-color: ",
              ";\n          color: ",
              ";\n        }\n        &[data-disabled] {\n          pointer-events: none;\n          opacity: ",
              ";\n        }\n      ",
            ]
          )),
        theme_1.width.full,
        theme_1.borderRadius.md,
        theme_1.spacing[1.5],
        theme_1.spacing[2],
        theme_1.spacing[1.5],
        theme_1.spacing[8],
        theme_1.fontSize.sm,
        theme_1.fontSizeLineHeight.sm,
        theme_1.colors.accent,
        theme_1.colors.accentForeground,
        theme_1.opacity[50]
      )}
    >
      <proxy_1.radix.SelectItemIndicator
        // absolute left-2 flex h-3.5 w-3.5 items-center justify-center
        ws:style={(0, template_1.css)(
          templateObject_2 ||
            (templateObject_2 = __makeTemplateObject(
              [
                "\n          position: absolute;\n          left: ",
                ";\n          display: flex;\n          height: ",
                ";\n          width: ",
                ";\n          align-items: center;\n          justify-content: center;\n        ",
              ],
              [
                "\n          position: absolute;\n          left: ",
                ";\n          display: flex;\n          height: ",
                ";\n          width: ",
                ";\n          align-items: center;\n          justify-content: center;\n        ",
              ]
            )),
          theme_1.spacing[2],
          theme_1.height[3.5],
          theme_1.width[3.5]
        )}
      >
        <template_1.$.HtmlEmbed
          ws:label="Indicator Icon"
          code={svg_1.CheckMarkIcon}
        />
      </proxy_1.radix.SelectItemIndicator>
      <proxy_1.radix.SelectItemText>
        {new template_1.PlaceholderValue(label)}
      </proxy_1.radix.SelectItemText>
    </proxy_1.radix.SelectItem>
  );
};
exports.meta = {
  category: "radix",
  description:
    "Use within a form to give your users a list of options to choose from.",
  order: 10,
  template: (
    <proxy_1.radix.Select>
      <proxy_1.radix.SelectTrigger
        // flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
        // placeholder:text-muted-foreground
        // focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        // disabled:cursor-not-allowed disabled:opacity-50
        ws:style={(0, template_1.css)(
          templateObject_3 ||
            (templateObject_3 = __makeTemplateObject(
              [
                "\n          display: flex;\n          height: ",
                ";\n          width: ",
                ";\n          align-items: center;\n          justify-content: between;\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          background-color: ",
                ";\n          padding: ",
                " ",
                ";\n          font-size: ",
                ";\n          line-height: ",
                ";\n          &::placeholder {\n            color: ",
                ";\n          }\n          &:focus-visible {\n            outline: none;\n            box-shadow: ",
                ";\n          }\n          &:disabled {\n            cursor: not-allowed;\n            opacity: ",
                ";\n          }\n        ",
              ],
              [
                "\n          display: flex;\n          height: ",
                ";\n          width: ",
                ";\n          align-items: center;\n          justify-content: between;\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          background-color: ",
                ";\n          padding: ",
                " ",
                ";\n          font-size: ",
                ";\n          line-height: ",
                ";\n          &::placeholder {\n            color: ",
                ";\n          }\n          &:focus-visible {\n            outline: none;\n            box-shadow: ",
                ";\n          }\n          &:disabled {\n            cursor: not-allowed;\n            opacity: ",
                ";\n          }\n        ",
              ]
            )),
          theme_1.height[10],
          theme_1.width.full,
          theme_1.borderRadius.md,
          theme_1.borderWidth.DEFAULT,
          theme_1.colors.input,
          theme_1.colors.background,
          theme_1.spacing[2],
          theme_1.spacing[3],
          theme_1.fontSize.sm,
          theme_1.fontSizeLineHeight.sm,
          theme_1.colors.mutedForeground,
          theme_1.boxShadow.ring,
          theme_1.opacity[50]
        )}
      >
        <proxy_1.radix.SelectValue placeholder="Theme" />
      </proxy_1.radix.SelectTrigger>
      <proxy_1.radix.SelectContent
        // relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md
        // data-[state=open]:animate-in
        // data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        // data-[state=open]:fade-in-0
        // data-[state=closed]:zoom-out-95
        // data-[state=open]:zoom-in-95
        // data-[side=bottom]:slide-in-from-top-2
        // data-[side=left]:slide-in-from-right-2
        // data-[side=right]:slide-in-from-left-2
        // data-[side=top]:slide-in-from-bottom-2
        // position=popper
        // data-[side=bottom]:translate-y-1
        // data-[side=left]:-translate-x-1
        // data-[side=right]:translate-x-1
        // data-[side=top]:-translate-y-1
        ws:style={(0, template_1.css)(
          templateObject_4 ||
            (templateObject_4 = __makeTemplateObject(
              [
                "\n          position: relative;\n          z-index: ",
                ";\n          min-width: 8rem;\n          overflow: hidden;\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          background-color: ",
                ";\n          color: ",
                ";\n          box-shadow: ",
                ";\n        ",
              ],
              [
                "\n          position: relative;\n          z-index: ",
                ";\n          min-width: 8rem;\n          overflow: hidden;\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          background-color: ",
                ";\n          color: ",
                ";\n          box-shadow: ",
                ";\n        ",
              ]
            )),
          theme_1.zIndex[50],
          theme_1.borderRadius.md,
          theme_1.borderWidth.DEFAULT,
          theme_1.colors.border,
          theme_1.colors.popover,
          theme_1.colors.popoverForeground,
          theme_1.boxShadow.md
        )}
      >
        <proxy_1.radix.SelectViewport
          // p-1
          // position=popper
          // h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]
          ws:style={(0, template_1.css)(
            templateObject_5 ||
              (templateObject_5 = __makeTemplateObject(
                [
                  "\n            padding: ",
                  ";\n            height: var(--radix-select-trigger-height);\n            width: ",
                  ";\n            min-width: var(--radix-select-trigger-width);\n          ",
                ],
                [
                  "\n            padding: ",
                  ";\n            height: var(--radix-select-trigger-height);\n            width: ",
                  ";\n            min-width: var(--radix-select-trigger-width);\n          ",
                ]
              )),
            theme_1.spacing[1],
            theme_1.width.full
          )}
        >
          {createSelectItem("light", "Light")}
          {createSelectItem("dark", "Dark")}
          {createSelectItem("system", "System")}
        </proxy_1.radix.SelectViewport>
      </proxy_1.radix.SelectContent>
    </proxy_1.radix.Select>
  ),
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
