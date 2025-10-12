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
exports.hooksPopover =
  exports.PopoverClose =
  exports.PopoverContent =
  exports.PopoverTrigger =
  exports.Popover =
    void 0;
var react_1 = require("react");
var PopoverPrimitive = require("@radix-ui/react-popover");
var runtime_1 = require("@webstudio-is/react-sdk/runtime");
// wrap in forwardRef because Root is functional component without ref
exports.Popover = (0, react_1.forwardRef)(function (props, _ref) {
  var _a;
  var currentOpen = (_a = props.open) !== null && _a !== void 0 ? _a : false;
  var _b = (0, react_1.useState)(currentOpen),
    open = _b[0],
    setOpen = _b[1];
  // synchronize external value with local one when changed
  (0, react_1.useEffect)(
    function () {
      return setOpen(currentOpen);
    },
    [currentOpen]
  );
  return (
    <PopoverPrimitive.Root {...props} open={open} onOpenChange={setOpen} />
  );
});
/**
 * We're not exposing the 'asChild' property for the Trigger.
 * Instead, we're enforcing 'asChild=true' for the Trigger and making it style-less.
 * This avoids situations where the Trigger inadvertently passes all styles to its child,
 * which would prevent us from displaying styles properly in the builder.
 */
exports.PopoverTrigger = (0, react_1.forwardRef)(function (_a, ref) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var firstChild = react_1.Children.toArray(children)[0];
  return (
    <PopoverPrimitive.Trigger asChild={true} ref={ref} {...props}>
      {firstChild !== null && firstChild !== void 0 ? (
        firstChild
      ) : (
        <button>Add button or link</button>
      )}
    </PopoverPrimitive.Trigger>
  );
});
exports.PopoverContent = (0, react_1.forwardRef)(function (_a, ref) {
  var _b = _a.sideOffset,
    sideOffset = _b === void 0 ? 4 : _b,
    _c = _a.align,
    align = _c === void 0 ? "center" : _c,
    _d = _a.hideWhenDetached,
    hideWhenDetached = _d === void 0 ? true : _d,
    props = __rest(_a, ["sideOffset", "align", "hideWhenDetached"]);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align="center"
        sideOffset={sideOffset}
        hideWhenDetached={hideWhenDetached}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
exports.PopoverClose = PopoverPrimitive.Close;
/* BUILDER HOOKS */
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each PopoverContent component within the selection,
// we identify its closest parent Popover component
// and update its open prop bound to variable.
exports.hooksPopover = {
  onNavigatorUnselect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":PopoverContent")) {
        var popover = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Popover")
        );
        if (popover) {
          context.setMemoryProp(popover, "open", undefined);
        }
      }
    }
  },
  onNavigatorSelect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":PopoverContent")) {
        var popover = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Popover")
        );
        if (popover) {
          context.setMemoryProp(popover, "open", true);
        }
      }
    }
  },
};
