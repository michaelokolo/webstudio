"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
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
exports.hooksTabs =
  exports.TabsContent =
  exports.TabsTrigger =
  exports.TabsList =
  exports.Tabs =
    void 0;
var await_interaction_response_1 = require("await-interaction-response");
var react_1 = require("react");
var react_tabs_1 = require("@radix-ui/react-tabs");
var runtime_1 = require("@webstudio-is/sdk/runtime");
var runtime_2 = require("@webstudio-is/react-sdk/runtime");
exports.Tabs = (0, react_1.forwardRef)(function (_a, ref) {
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
  var handleValueChange = (0, react_1.useCallback)(function (value) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, (0, await_interaction_response_1.default)()];
          case 1:
            _a.sent();
            setValue(value);
            return [2 /*return*/];
        }
      });
    });
  }, []);
  return (
    <react_tabs_1.Root
      ref={ref}
      {...props}
      value={value}
      onValueChange={handleValueChange}
    />
  );
});
exports.TabsList = react_tabs_1.List;
exports.TabsTrigger = (0, react_1.forwardRef)(function (_a, ref) {
  var _b;
  var value = _a.value,
    props = __rest(_a, ["value"]);
  var index = (0, runtime_1.getIndexWithinAncestorFromProps)(props);
  return (
    <react_tabs_1.Trigger
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
exports.TabsContent = (0, react_1.forwardRef)(function (_a, ref) {
  var _b;
  var value = _a.value,
    props = __rest(_a, ["value"]);
  var index = (0, runtime_1.getIndexWithinAncestorFromProps)(props);
  return (
    <react_tabs_1.Content
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
/* BUILDER HOOKS */
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each TabsContent component within the selection,
// we identify its closest parent Tabs component
// and update its open prop bound to variable.
exports.hooksTabs = {
  onNavigatorSelect: function (context, event) {
    var _a, _b;
    for (var _i = 0, _c = event.instancePath; _i < _c.length; _i++) {
      var instance = _c[_i];
      if (
        instance.component === "".concat(namespace, ":TabsContent") ||
        instance.component === "".concat(namespace, ":TabsTrigger")
      ) {
        var tabs = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Tabs")
        );
        var contentValue =
          (_a = context.getPropValue(instance, "value")) !== null &&
          _a !== void 0
            ? _a
            : (_b = context.indexesWithinAncestors.get(instance.id)) === null ||
                _b === void 0
              ? void 0
              : _b.toString();
        if (tabs && contentValue) {
          context.setMemoryProp(tabs, "value", contentValue);
        }
      }
    }
  },
  onNavigatorUnselect: function (context, event) {
    var _a, _b;
    for (var _i = 0, _c = event.instancePath; _i < _c.length; _i++) {
      var instance = _c[_i];
      if (
        instance.component === "".concat(namespace, ":TabsContent") ||
        instance.component === "".concat(namespace, ":TabsTrigger")
      ) {
        var tabs = (0, runtime_2.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Tabs")
        );
        var contentValue =
          (_a = context.getPropValue(instance, "value")) !== null &&
          _a !== void 0
            ? _a
            : (_b = context.indexesWithinAncestors.get(instance.id)) === null ||
                _b === void 0
              ? void 0
              : _b.toString();
        if (tabs && contentValue) {
          context.setMemoryProp(tabs, "value", undefined);
        }
      }
    }
  },
};
