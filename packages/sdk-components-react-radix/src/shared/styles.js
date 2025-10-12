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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getButtonStyle = void 0;
var template_1 = require("@webstudio-is/template");
var theme_1 = require("./theme");
// ghost icon button
// 'inline-flex items-center justify-center rounded-md text-sm font-medium
// ring-offset-background transition-colors
// focus-visible:outline-none focus-visible:ring-2
// focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:pointer-events-none disabled:opacity-50'
var buttonStyle = (0, template_1.css)(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0 solid ",
        ";\n  border-radius: ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  font-weight: ",
        ";\n  &:focus-visible {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    box-shadow: ",
        ";\n  }\n  &:disabled {\n    pointer-events: none;\n    opacity: ",
        ";\n  }\n",
      ],
      [
        "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0 solid ",
        ";\n  border-radius: ",
        ";\n  font-size: ",
        ";\n  line-height: ",
        ";\n  font-weight: ",
        ";\n  &:focus-visible {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    box-shadow: ",
        ";\n  }\n  &:disabled {\n    pointer-events: none;\n    opacity: ",
        ";\n  }\n",
      ]
    )),
  theme_1.colors.border,
  theme_1.borderRadius.md,
  theme_1.fontSize.sm,
  theme_1.fontSizeLineHeight.sm,
  theme_1.weights.medium,
  theme_1.boxShadow.ring,
  theme_1.opacity[50]
);
// hover:bg-accent hover:text-accent-foreground
var ghostButtonStyle = (0, template_1.css)(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ["\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"],
      ["\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"]
    )),
  theme_1.colors.accent,
  theme_1.colors.accentForeground
);
// border border-input bg-background hover:bg-accent hover:text-accent-foreground
var outlineButtonStyle = (0, template_1.css)(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  border: ",
        " solid ",
        ";\n  background-color: ",
        ";\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n  }\n",
      ],
      [
        "\n  border: ",
        " solid ",
        ";\n  background-color: ",
        ";\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n  }\n",
      ]
    )),
  theme_1.borderWidth.DEFAULT,
  theme_1.colors.input,
  theme_1.colors.background,
  theme_1.colors.accent,
  theme_1.colors.accentForeground
);
// h-10 px-4 py-2
var defaultButtonStyle = (0, template_1.css)(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ["\n  height: ", ";\n  padding: ", " ", ";\n"],
      ["\n  height: ", ";\n  padding: ", " ", ";\n"]
    )),
  theme_1.height[10],
  theme_1.spacing[2],
  theme_1.spacing[4]
);
// h-9 rounded-md px-3
var smButtonStyle = (0, template_1.css)(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  height: ", ";\n  border-radius: ", ";\n  padding: 0 ", ";\n"],
      ["\n  height: ", ";\n  border-radius: ", ";\n  padding: 0 ", ";\n"]
    )),
  theme_1.height[9],
  theme_1.borderRadius.md,
  theme_1.spacing[3]
);
// Set explicit paddings for IOS Safari to prevent the icon from collapsing
// h-10 w-10
var iconButtonStyle = (0, template_1.css)(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      ["\n  height: ", ";\n  width: ", ";\n  padding: ", " ", ";\n"],
      ["\n  height: ", ";\n  width: ", ";\n  padding: ", " ", ";\n"]
    )),
  theme_1.spacing[10],
  theme_1.spacing[10],
  theme_1.spacing[0],
  theme_1.spacing[1.5]
);
var getButtonStyle = function (variant, size) {
  if (size === void 0) {
    size = "default";
  }
  var style = __spreadArray([], buttonStyle, true);
  if (variant === "ghost") {
    style.push.apply(style, ghostButtonStyle);
  }
  if (variant === "outline") {
    style.push.apply(style, outlineButtonStyle);
  }
  if (size === "default") {
    style.push.apply(style, defaultButtonStyle);
  }
  if (size === "sm") {
    style.push.apply(style, smButtonStyle);
  }
  if (size === "icon") {
    style.push.apply(style, iconButtonStyle);
  }
  return style;
};
exports.getButtonStyle = getButtonStyle;
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;
