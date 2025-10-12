"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroupIndicator =
  exports.RadioGroupItem =
  exports.RadioGroup =
    void 0;
var react_1 = require("react");
var react_radio_group_1 = require("@radix-ui/react-radio-group");
exports.RadioGroup = (0, react_1.forwardRef)(function (_a, ref) {
  var _b, _c;
  var defaultValue = _a.defaultValue,
    props = __rest(_a, ["defaultValue"]);
  var currentValue =
    (_c = (_b = props.value) !== null && _b !== void 0 ? _b : defaultValue) !==
      null && _c !== void 0
      ? _c
      : "";
  var _d = (0, react_1.useState)(currentValue),
    value = _d[0],
    setValue = _d[1];
  // synchronize external value with local one when changed
  (0, react_1.useEffect)(
    function () {
      return setValue(currentValue);
    },
    [currentValue]
  );
  return (
    <react_radio_group_1.Root
      {...props}
      ref={ref}
      value={value}
      onValueChange={setValue}
    />
  );
});
exports.RadioGroupItem = react_radio_group_1.Item;
exports.RadioGroupIndicator = react_radio_group_1.Indicator;
