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
var theme_1 = require("./shared/theme");
exports.meta = {
  category: "radix",
  description:
    "Use within a form to allow your users to toggle between checked and not checked. Group checkboxes by matching their “Name” properties. Unlike radios, any number of checkboxes in a group can be checked.",
  order: 101,
  template: (
    <proxy_1.radix.Label
      ws:label="Checkbox Field"
      ws:style={(0, template_1.css)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        display: flex;\n        gap: ",
              ";\n        align-items: center;\n      ",
            ],
            [
              "\n        display: flex;\n        gap: ",
              ";\n        align-items: center;\n      ",
            ]
          )),
        theme_1.spacing[2]
      )}
    >
      <proxy_1.radix.Checkbox
        // peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background
        // focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        // disabled:cursor-not-allowed disabled:opacity-50
        // data-[state=checked]:bg-primary
        // data-[state=checked]:text-primary-foreground",
        ws:style={(0, template_1.css)(
          templateObject_2 ||
            (templateObject_2 = __makeTemplateObject(
              [
                "\n          height: ",
                ";\n          width: ",
                ";\n          flex-shrink: 0;\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          &:focus-visible {\n            outline: none;\n            box-shadow: ",
                ";\n          }\n          &:disabled {\n            cursor: not-allowed;\n            opacity: ",
                ';\n          }\n          &[data-state="checked"] {\n            background-color: ',
                ";\n            color: ",
                ";\n          }\n        ",
              ],
              [
                "\n          height: ",
                ";\n          width: ",
                ";\n          flex-shrink: 0;\n          border-radius: ",
                ";\n          border: ",
                " solid ",
                ";\n          &:focus-visible {\n            outline: none;\n            box-shadow: ",
                ";\n          }\n          &:disabled {\n            cursor: not-allowed;\n            opacity: ",
                ';\n          }\n          &[data-state="checked"] {\n            background-color: ',
                ";\n            color: ",
                ";\n          }\n        ",
              ]
            )),
          theme_1.height[4],
          theme_1.width[4],
          theme_1.borderRadius.sm,
          theme_1.borderWidth.DEFAULT,
          theme_1.colors.primary,
          theme_1.boxShadow.ring,
          theme_1.opacity[50],
          theme_1.colors.primary,
          theme_1.colors.primaryForeground
        )}
      >
        <proxy_1.radix.CheckboxIndicator
          // flex items-center justify-center text-current
          ws:style={(0, template_1.css)(
            templateObject_3 ||
              (templateObject_3 = __makeTemplateObject(
                [
                  "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: currentColor;\n          ",
                ],
                [
                  "\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: currentColor;\n          ",
                ]
              ))
          )}
        >
          <template_1.$.HtmlEmbed
            ws:label="Indicator Icon"
            code={svg_1.CheckMarkIcon}
          />
        </proxy_1.radix.CheckboxIndicator>
      </proxy_1.radix.Checkbox>
      <template_1.$.Text ws:label="Checkbox Label" ws:tag="span">
        {new template_1.PlaceholderValue("Checkbox")}
      </template_1.$.Text>
    </proxy_1.radix.Label>
  ),
};
var templateObject_1, templateObject_2, templateObject_3;
