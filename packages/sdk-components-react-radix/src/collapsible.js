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
exports.hooksCollapsible =
  exports.CollapsibleContent =
  exports.CollapsibleTrigger =
  exports.Collapsible =
    void 0;
var react_1 = require("react");
var react_collapsible_1 = require("@radix-ui/react-collapsible");
var runtime_1 = require("@webstudio-is/react-sdk/runtime");
exports.Collapsible = (0, react_1.forwardRef)(function (props, ref) {
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
    <react_collapsible_1.Root
      {...props}
      ref={ref}
      open={open}
      onOpenChange={setOpen}
    />
  );
});
/**
 * We're not exposing the 'asChild' property for the Trigger.
 * Instead, we're enforcing 'asChild=true' for the Trigger and making it style-less.
 * This avoids situations where the Trigger inadvertently passes all styles to its child,
 * which would prevent us from displaying styles properly in the builder.
 */
exports.CollapsibleTrigger = (0, react_1.forwardRef)(function (_a, ref) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var firstChild = react_1.Children.toArray(children)[0];
  return (
    <react_collapsible_1.Trigger asChild={true} ref={ref} {...props}>
      {firstChild !== null && firstChild !== void 0 ? (
        firstChild
      ) : (
        <button>Add button</button>
      )}
    </react_collapsible_1.Trigger>
  );
});
exports.CollapsibleContent = react_collapsible_1.Content;
/* BUILDER HOOKS */
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each CollapsibleContent component within the selection,
// we identify its closest parent Collapsible component
// and update its open prop bound to variable.
exports.hooksCollapsible = {
  onNavigatorSelect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":CollapsibleContent")) {
        var collapsible = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Collapsible")
        );
        if (collapsible) {
          context.setMemoryProp(collapsible, "open", true);
        }
      }
    }
  },
  onNavigatorUnselect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":CollapsibleContent")) {
        var collapsible = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Collapsible")
        );
        if (collapsible) {
          context.setMemoryProp(collapsible, "open", undefined);
        }
      }
    }
  },
};
