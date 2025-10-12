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
exports.hooksSelect =
  exports.SelectItemText =
  exports.SelectItemIndicator =
  exports.SelectItem =
  exports.SelectViewport =
  exports.SelectContent =
  exports.SelectValue =
  exports.SelectTrigger =
  exports.Select =
    void 0;
var react_1 = require("react");
var react_select_1 = require("@radix-ui/react-select");
var runtime_1 = require("@webstudio-is/react-sdk/runtime");
exports.Select = (0, react_1.forwardRef)(function (_a, _ref) {
  var _b, _c, _d, _e;
  var defaultOpen = _a.defaultOpen,
    defaultValue = _a.defaultValue,
    props = __rest(_a, ["defaultOpen", "defaultValue"]);
  // open state
  var currentOpen =
    (_c = (_b = props.open) !== null && _b !== void 0 ? _b : defaultOpen) !==
      null && _c !== void 0
      ? _c
      : false;
  var _f = (0, react_1.useState)(currentOpen),
    open = _f[0],
    setOpen = _f[1];
  // synchronize external value with local one when changed
  (0, react_1.useEffect)(
    function () {
      return setOpen(currentOpen);
    },
    [currentOpen]
  );
  // value state
  var currentValue =
    (_e = (_d = props.value) !== null && _d !== void 0 ? _d : defaultValue) !==
      null && _e !== void 0
      ? _e
      : "";
  var _g = (0, react_1.useState)(currentValue),
    value = _g[0],
    setValue = _g[1];
  // synchronize external value with local one when changed
  (0, react_1.useEffect)(
    function () {
      return setValue(currentValue);
    },
    [currentValue]
  );
  return (
    <react_select_1.Root
      {...props}
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={setValue}
    />
  );
});
exports.SelectTrigger = (0, react_1.forwardRef)(function (props, ref) {
  var renderer = (0, react_1.useContext)(runtime_1.ReactSdkContext).renderer;
  var onPointerDown =
    renderer === "canvas"
      ? function (event) {
          event.preventDefault();
        }
      : undefined;
  return (
    <react_select_1.Trigger
      onPointerDown={onPointerDown}
      ref={ref}
      {...props}
    />
  );
});
exports.SelectValue = (0, react_1.forwardRef)(function (props, ref) {
  return <react_select_1.Value ref={ref} {...props} />;
});
exports.SelectContent = (0, react_1.forwardRef)(function (props, ref) {
  return (
    <react_select_1.Portal>
      <react_select_1.Content ref={ref} {...props} position="popper" />
    </react_select_1.Portal>
  );
});
exports.SelectViewport = react_select_1.Viewport;
exports.SelectItem = react_select_1.Item;
exports.SelectItemIndicator = react_select_1.ItemIndicator;
exports.SelectItemText = react_select_1.ItemText;
/* BUILDER HOOKS */
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each SelectContent component within the selection,
// we identify its closest parent Select component
// and update its open prop bound to variable.
exports.hooksSelect = {
  onNavigatorUnselect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":SelectContent")) {
        var select = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Select")
        );
        if (select) {
          context.setMemoryProp(select, "open", undefined);
        }
      }
    }
  },
  onNavigatorSelect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":SelectContent")) {
        var select = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Select")
        );
        if (select) {
          context.setMemoryProp(select, "open", true);
        }
      }
    }
  },
};
