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
var svg_1 = require("@webstudio-is/icons/svg");
var proxy_1 = require("./shared/proxy");
var theme_1 = require("./shared/theme");
var createRadioGroupItem = function (_a) {
  var value = _a.value,
    label = _a.label;
  return (
    <proxy_1.radix.Label
      // flex items-center space-x-2
      ws:style={(0, template_1.css)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n      display: flex;\n      align-items: center;\n      gap: ",
              ";\n    ",
            ],
            [
              "\n      display: flex;\n      align-items: center;\n      gap: ",
              ";\n    ",
            ]
          )),
        theme_1.spacing[2]
      )}
    >
      <proxy_1.radix.RadioGroupItem
        value={value}
        // aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background
        // focus:outline-none
        // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        // disabled:cursor-not-allowed disabled:opacity-50
        ws:style={(0, template_1.css)(
          templateObject_2 ||
            (templateObject_2 = __makeTemplateObject(
              [
                "\n        aspect-ratio: 1 / 1;\n        height: ",
                ";\n        width: ",
                ";\n        border-radius: ",
                ";\n        border: ",
                " solid ",
                ";\n        color: ",
                ";\n        &:focus-visible {\n          outline: none;\n          box-shadow: ",
                ";\n        }\n        &:disabled {\n          cursor: not-allowed;\n          opacity: ",
                ";\n        }\n      ",
              ],
              [
                "\n        aspect-ratio: 1 / 1;\n        height: ",
                ";\n        width: ",
                ";\n        border-radius: ",
                ";\n        border: ",
                " solid ",
                ";\n        color: ",
                ";\n        &:focus-visible {\n          outline: none;\n          box-shadow: ",
                ";\n        }\n        &:disabled {\n          cursor: not-allowed;\n          opacity: ",
                ";\n        }\n      ",
              ]
            )),
          theme_1.height[4],
          theme_1.width[4],
          theme_1.borderRadius.full,
          theme_1.borderWidth.DEFAULT,
          theme_1.colors.primary,
          theme_1.colors.primary,
          theme_1.boxShadow.ring,
          theme_1.opacity[50]
        )}
      >
        <proxy_1.radix.RadioGroupIndicator>
          <template_1.$.HtmlEmbed
            ws:label="Indicator Icon"
            code={svg_1.DotIcon}
          />
        </proxy_1.radix.RadioGroupIndicator>
      </proxy_1.radix.RadioGroupItem>
      <template_1.$.Text>
        {new template_1.PlaceholderValue(label)}
      </template_1.$.Text>
    </proxy_1.radix.Label>
  );
};
exports.meta = {
  category: "radix",
  order: 100,
  description:
    "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
  template: (
    <proxy_1.radix.RadioGroup
      // grid gap-2
      ws:style={(0, template_1.css)(
        templateObject_3 ||
          (templateObject_3 = __makeTemplateObject(
            [
              "\n        display: flex;\n        flex-direction: column;\n        gap: ",
              ";\n      ",
            ],
            [
              "\n        display: flex;\n        flex-direction: column;\n        gap: ",
              ";\n      ",
            ]
          )),
        theme_1.spacing[2]
      )}
    >
      {createRadioGroupItem({ value: "default", label: "Default" })}
      {createRadioGroupItem({ value: "comfortable", label: "Comfortable" })}
      {createRadioGroupItem({ value: "compact", label: "Compact" })}
    </proxy_1.radix.RadioGroup>
  ),
};
var templateObject_1, templateObject_2, templateObject_3;
