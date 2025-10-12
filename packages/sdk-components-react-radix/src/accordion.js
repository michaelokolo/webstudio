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
exports.hooksAccordion =
  exports.AccordionContent =
  exports.AccordionTrigger =
  exports.AccordionHeader =
  exports.AccordionItem =
  exports.Accordion =
    void 0;
var react_1 = require("react");
var react_accordion_1 = require("@radix-ui/react-accordion");
var runtime_1 = require("@webstudio-is/sdk/runtime");
var runtime_2 = require("@webstudio-is/react-sdk/runtime");
exports.Accordion = (0, react_1.forwardRef)(function (_a, ref) {
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
    <react_accordion_1.Root
      {...props}
      ref={ref}
      type="single"
      value={value}
      onValueChange={setValue}
    />
  );
});
exports.AccordionItem = (0, react_1.forwardRef)(function (_a, ref) {
  var _b;
  var value = _a.value,
    props = __rest(_a, ["value"]);
  var index = (0, runtime_1.getIndexWithinAncestorFromProps)(props);
  return (
    <react_accordion_1.Item
      ref={ref}
      value={
        (_b = value !== null && value !== void 0 ? value : index) !== null &&
        _b !== void 0
          ? _b
          : ""
      }
      {...props}
    />
  );
});
var defaultHeadingTag = "h3";
exports.AccordionHeader = (0, react_1.forwardRef)(function (_a, ref) {
  var _b, _c;
  var legacyTag = _a.tag,
    children = _a.children,
    headerProps = __rest(_a, ["tag", "children"]);
  var tag =
    (_c =
      (_b = (0, runtime_1.getTagFromProps)(headerProps)) !== null &&
      _b !== void 0
        ? _b
        : legacyTag) !== null && _c !== void 0
      ? _c
      : defaultHeadingTag;
  return (
    <react_accordion_1.Header asChild={true} ref={ref} {...headerProps}>
      {(0, react_1.createElement)(tag, undefined, children)}
    </react_accordion_1.Header>
  );
});
exports.AccordionTrigger = react_accordion_1.Trigger;
exports.AccordionContent = react_accordion_1.Content;
/* BUILDER HOOKS */
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each AccordionContent component within the selection,
// we identify its closest parent Accordion component
// and update its open prop bound to variable.
exports.hooksAccordion = {
  onNavigatorSelect: function (context, event) {
    var _a, _b;
    for (var _i = 0, _c = event.instancePath; _i < _c.length; _i++) {
      var instance = _c[_i];
      if (instance.component === "".concat(namespace, ":AccordionContent")) {
        var accordion = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Accordion")
        );
        var item = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":AccordionItem")
        );
        if (accordion && item) {
          var itemValue =
            (_a = context.getPropValue(item, "value")) !== null && _a !== void 0
              ? _a
              : (_b = context.indexesWithinAncestors.get(item.id)) === null ||
                  _b === void 0
                ? void 0
                : _b.toString();
          if (itemValue) {
            context.setMemoryProp(accordion, "value", itemValue);
          }
        }
      }
    }
  },
};
