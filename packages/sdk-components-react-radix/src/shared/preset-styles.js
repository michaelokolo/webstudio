"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonReset = void 0;
var unit = function (property, value, unit) {
  return {
    property: property,
    value: { type: "unit", unit: unit, value: value },
  };
};
var keyword = function (property, value) {
  return {
    property: property,
    value: { type: "keyword", value: value },
  };
};
var rgb = function (property, r, g, b) {
  return {
    property: property,
    value: { type: "rgb", alpha: 1, r: r, g: g, b: b },
  };
};
exports.buttonReset = [
  {
    property: "background-color",
    value: { type: "keyword", value: "transparent" },
  },
  {
    property: "background-image",
    value: { type: "keyword", value: "none" },
  },
  unit("border-top-width", 0, "px"),
  unit("border-right-width", 0, "px"),
  unit("border-bottom-width", 0, "px"),
  unit("border-left-width", 0, "px"),
  keyword("border-top-style", "solid"),
  keyword("border-right-style", "solid"),
  keyword("border-bottom-style", "solid"),
  keyword("border-left-style", "solid"),
  rgb("border-top-color", 226, 232, 240),
  rgb("border-right-color", 226, 232, 240),
  rgb("border-bottom-color", 226, 232, 240),
  rgb("border-left-color", 226, 232, 240),
  unit("padding-top", 0, "px"),
  unit("padding-right", 0, "px"),
  unit("padding-bottom", 0, "px"),
  unit("padding-left", 0, "px"),
];
