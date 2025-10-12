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
exports.SwitchThumb = exports.Switch = void 0;
var react_1 = require("react");
var react_switch_1 = require("@radix-ui/react-switch");
exports.Switch = (0, react_1.forwardRef)(function (_a, ref) {
  var _b, _c;
  var defaultChecked = _a.defaultChecked,
    props = __rest(_a, ["defaultChecked"]);
  var currentChecked =
    (_c =
      (_b = props.checked) !== null && _b !== void 0 ? _b : defaultChecked) !==
      null && _c !== void 0
      ? _c
      : false;
  var _d = (0, react_1.useState)(currentChecked),
    checked = _d[0],
    setChecked = _d[1];
  // synchronize external value with local one when changed
  (0, react_1.useEffect)(
    function () {
      return setChecked(currentChecked);
    },
    [currentChecked]
  );
  return (
    <react_switch_1.Root
      {...props}
      ref={ref}
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
});
exports.SwitchThumb = react_switch_1.Thumb;
