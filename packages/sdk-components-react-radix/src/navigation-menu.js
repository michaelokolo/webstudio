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
exports.hooksNavigationMenu =
  exports.NavigationMenuTrigger =
  exports.NavigationMenuLink =
  exports.NavigationMenuItem =
  exports.NavigationMenuContent =
  exports.NavigationMenuViewport =
  exports.NavigationMenuList =
  exports.NavigationMenu =
    void 0;
var react_1 = require("react");
var NavigationMenuPrimitive = require("@radix-ui/react-navigation-menu");
var runtime_1 = require("@webstudio-is/sdk/runtime");
var runtime_2 = require("@webstudio-is/react-sdk/runtime");
exports.NavigationMenu = (0, react_1.forwardRef)(function (_a, ref) {
  var propsValue = _a.value,
    props = __rest(_a, ["value"]);
  /**
   * If the value is an empty string, "NavigationMenuViewport" isn't in the tree.
   * This is Radix's way to differentiate animations. However, in the builder, we can't style non-existing elements.
   * Since we don't need animations in the builder, we can trick Radix by setting a non-empty string like "-1" to the value property.
   * This ensures "NavigationMenuViewport" always appears in the HTML tree.
   **/
  var renderer = (0, react_1.useContext)(runtime_2.ReactSdkContext).renderer;
  var value = propsValue;
  if (renderer === "canvas") {
    value = value === "" ? "-1" : value;
  }
  return <NavigationMenuPrimitive.Root ref={ref} value={value} {...props} />;
});
exports.NavigationMenuList = NavigationMenuPrimitive.List;
exports.NavigationMenuViewport = NavigationMenuPrimitive.Viewport;
exports.NavigationMenuContent = NavigationMenuPrimitive.Content;
exports.NavigationMenuItem = (0, react_1.forwardRef)(function (_a, ref) {
  var value = _a.value,
    props = __rest(_a, ["value"]);
  var index = (0, runtime_1.getIndexWithinAncestorFromProps)(props);
  return (
    <NavigationMenuPrimitive.Item
      ref={ref}
      value={value !== null && value !== void 0 ? value : index}
      {...props}
    />
  );
});
exports.NavigationMenuLink = (0, react_1.forwardRef)(function (_a, ref) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var firstChild = react_1.Children.toArray(children)[0];
  return (
    <NavigationMenuPrimitive.Link asChild={true} ref={ref} {...props}>
      {firstChild !== null && firstChild !== void 0 ? (
        firstChild
      ) : (
        <a>Add link component</a>
      )}
    </NavigationMenuPrimitive.Link>
  );
});
exports.NavigationMenuTrigger = (0, react_1.forwardRef)(function (_a, ref) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var firstChild = react_1.Children.toArray(children)[0];
  return (
    <NavigationMenuPrimitive.Trigger asChild={true} ref={ref} {...props}>
      {firstChild !== null && firstChild !== void 0 ? (
        firstChild
      ) : (
        <button>Add button or link</button>
      )}
    </NavigationMenuPrimitive.Trigger>
  );
});
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each NavigationMenuItem component within the selection,
// we identify its closest parent NavigationMenu component
// and update its open prop bound to variable.
exports.hooksNavigationMenu = {
  onNavigatorUnselect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (
        instance.component === "".concat(namespace, ":NavigationMenuContent")
      ) {
        var menu = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":NavigationMenu")
        );
        if (menu) {
          context.setMemoryProp(menu, "value", undefined);
        }
      }
    }
  },
  onNavigatorSelect: function (context, event) {
    var _a, _b;
    for (var _i = 0, _c = event.instancePath; _i < _c.length; _i++) {
      var instance = _c[_i];
      if (
        instance.component === "".concat(namespace, ":NavigationMenuContent")
      ) {
        var menu = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":NavigationMenu")
        );
        var menuItem = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":NavigationMenuItem")
        );
        if (menuItem === undefined || menu === undefined) {
          return;
        }
        var contentValue =
          (_a = context.getPropValue(menuItem, "value")) !== null &&
          _a !== void 0
            ? _a
            : (_b = context.indexesWithinAncestors.get(menuItem.id)) === null ||
                _b === void 0
              ? void 0
              : _b.toString();
        if (contentValue) {
          context.setMemoryProp(menu, "value", contentValue);
        }
      }
    }
  },
};
