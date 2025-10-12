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
exports.meta = {
  category: "radix",
  description:
    "A control that allows the user to toggle between checked and not checked.",
  order: 11,
  template: (
    <proxy_1.radix.Switch
      // peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors
      // focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
      // disabled:cursor-not-allowed disabled:opacity-50
      // data-[state=checked]:bg-primary
      // data-[state=unchecked]:bg-input
      ws:style={(0, template_1.css)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n        display: inline-flex;\n        height: 24px;\n        width: 44px;\n        flex-shrink: 0;\n        cursor: pointer;\n        align-items: center;\n        border-radius: ",
              ";\n        border: ",
              " solid transparent;\n        transition: ",
              ";\n        &:focus-visible {\n          outline: none;\n          box-shadow: ",
              ";\n        }\n        &:disabled {\n          cursor: not-allowed;\n          opacity: ",
              ';\n        }\n        &[data-state="checked"] {\n          background-color: ',
              ';\n        }\n        &[data-state="unchecked"] {\n          background-color: ',
              ";\n        }\n      ",
            ],
            [
              "\n        display: inline-flex;\n        height: 24px;\n        width: 44px;\n        flex-shrink: 0;\n        cursor: pointer;\n        align-items: center;\n        border-radius: ",
              ";\n        border: ",
              " solid transparent;\n        transition: ",
              ";\n        &:focus-visible {\n          outline: none;\n          box-shadow: ",
              ";\n        }\n        &:disabled {\n          cursor: not-allowed;\n          opacity: ",
              ';\n        }\n        &[data-state="checked"] {\n          background-color: ',
              ';\n        }\n        &[data-state="unchecked"] {\n          background-color: ',
              ";\n        }\n      ",
            ]
          )),
        theme_1.borderRadius.full,
        theme_1.borderWidth[2],
        theme_1.transition.all,
        theme_1.boxShadow.ring,
        theme_1.opacity[50],
        theme_1.colors.primary,
        theme_1.colors.input
      )}
    >
      <proxy_1.radix.SwitchThumb
        // pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform
        // data-[state=checked]:translate-x-5
        // data-[state=unchecked]:translate-x-0
        ws:style={(0, template_1.css)(
          templateObject_2 ||
            (templateObject_2 = __makeTemplateObject(
              [
                "\n          pointer-events: none;\n          display: block;\n          height: ",
                ";\n          width: ",
                ";\n          border-radius: ",
                ";\n          background-color: ",
                ";\n          box-shadow: ",
                ";\n          transition: ",
                ';\n          &[data-state="checked"] {\n            transform: translateX(20px);\n          }\n          &[data-state="unchecked"] {\n            transform: translateX(0px);\n          }\n        ',
              ],
              [
                "\n          pointer-events: none;\n          display: block;\n          height: ",
                ";\n          width: ",
                ";\n          border-radius: ",
                ";\n          background-color: ",
                ";\n          box-shadow: ",
                ";\n          transition: ",
                ';\n          &[data-state="checked"] {\n            transform: translateX(20px);\n          }\n          &[data-state="unchecked"] {\n            transform: translateX(0px);\n          }\n        ',
              ]
            )),
          theme_1.height[5],
          theme_1.width[5],
          theme_1.borderRadius.full,
          theme_1.colors.background,
          theme_1.boxShadow.lg,
          theme_1.transition.transform
        )}
      />
    </proxy_1.radix.Switch>
  ),
};
var templateObject_1, templateObject_2;
