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
exports.hooksDialog =
  exports.DialogDescription =
  exports.DialogTitle =
  exports.DialogClose =
  exports.DialogContent =
  exports.DialogOverlay =
  exports.DialogTrigger =
  exports.Dialog =
    void 0;
var await_interaction_response_1 = require("await-interaction-response");
var react_1 = require("react");
var DialogPrimitive = require("@radix-ui/react-dialog");
var runtime_1 = require("@webstudio-is/react-sdk/runtime");
/**
 * Naive heuristic to determine if a click event will cause navigate
 */
var willNavigate = function (event) {
  var target = event.target;
  if (target instanceof HTMLAnchorElement === false) {
    return false;
  }
  if (target.hasAttribute("href") === false) {
    return false;
  }
  if (target.href === "#") {
    return false;
  }
  if (target.hasAttribute("target") && target.target === "_blank") {
    return false;
  }
  if (event.ctrlKey || event.metaKey) {
    return false;
  }
  return true;
};
// wrap in forwardRef because Root is functional component without ref
exports.Dialog = (0, react_1.forwardRef)(function (props, _ref) {
  var _a;
  var renderer = (0, react_1.useContext)(runtime_1.ReactSdkContext).renderer;
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
  var onOpenChangeHandler = (0, react_1.useCallback)(function (open) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, (0, await_interaction_response_1.default)()];
          case 1:
            _a.sent();
            setOpen(open);
            return [2 /*return*/];
        }
      });
    });
  }, []);
  /**
   * Close the dialog when a navigable link within it is clicked.
   */
  (0, react_1.useEffect)(
    function () {
      if (renderer !== undefined) {
        return;
      }
      if (open === false) {
        return;
      }
      var handleClick = function (event) {
        var target = event.target;
        if (willNavigate(event) === false) {
          return;
        }
        if (target instanceof HTMLAnchorElement === false) {
          return false;
        }
        if (target.closest('[role="dialog"]')) {
          onOpenChangeHandler === null || onOpenChangeHandler === void 0
            ? void 0
            : onOpenChangeHandler(false);
        }
      };
      window.addEventListener("click", handleClick);
      return function () {
        return window.removeEventListener("click", handleClick);
      };
    },
    [open, onOpenChangeHandler, renderer]
  );
  return (
    <DialogPrimitive.Root
      {...props}
      onOpenChange={onOpenChangeHandler}
      open={open}
    />
  );
});
/**
 * We're not exposing the 'asChild' property for the Trigger.
 * Instead, we're enforcing 'asChild=true' for the Trigger and making it style-less.
 * This avoids situations where the Trigger inadvertently passes all styles to its child,
 * which would prevent us from displaying styles properly in the builder.
 */
exports.DialogTrigger = (0, react_1.forwardRef)(function (_a, ref) {
  var children = _a.children,
    props = __rest(_a, ["children"]);
  var firstChild = react_1.Children.toArray(children)[0];
  return (
    <DialogPrimitive.Trigger ref={ref} asChild={true} {...props}>
      {firstChild !== null && firstChild !== void 0 ? (
        firstChild
      ) : (
        <button>Add button or link</button>
      )}
    </DialogPrimitive.Trigger>
  );
});
exports.DialogOverlay = (0, react_1.forwardRef)(function (props, ref) {
  return (
    <DialogPrimitive.DialogPortal>
      <DialogPrimitive.Overlay ref={ref} {...props} />
    </DialogPrimitive.DialogPortal>
  );
});
exports.DialogContent = (0, react_1.forwardRef)(function (props, ref) {
  var preventAutoFocusOnClose = (0, react_1.useRef)(false);
  var renderer = (0, react_1.useContext)(runtime_1.ReactSdkContext).renderer;
  /**
   * Prevent focusing on the trigger after a navigable link in a dialog is clicked and closes the dialog.
   */
  (0, react_1.useEffect)(
    function () {
      if (renderer !== undefined) {
        return;
      }
      preventAutoFocusOnClose.current = false;
      var handleClick = function (event) {
        var target = event.target;
        if (willNavigate(event) === false) {
          return;
        }
        if (target instanceof HTMLAnchorElement === false) {
          return false;
        }
        if (target.closest('[role="dialog"]')) {
          preventAutoFocusOnClose.current = true;
        }
      };
      window.addEventListener("click", handleClick);
      return function () {
        return window.removeEventListener("click", handleClick);
      };
    },
    [renderer]
  );
  return (
    <DialogPrimitive.Content
      ref={ref}
      {...props}
      onCloseAutoFocus={function (event) {
        if (preventAutoFocusOnClose.current) {
          event.preventDefault();
        }
      }}
    />
  );
});
exports.DialogClose = DialogPrimitive.Close;
var defaultTag = "h1";
exports.DialogTitle = (0, react_1.forwardRef)(function (_a, ref) {
  var _b = _a.tag,
    Tag = _b === void 0 ? defaultTag : _b,
    children = _a.children,
    props = __rest(_a, ["tag", "children"]);
  return (
    <DialogPrimitive.DialogTitle asChild>
      <Tag ref={ref} {...props}>
        {children}
      </Tag>
    </DialogPrimitive.DialogTitle>
  );
});
exports.DialogDescription = DialogPrimitive.Description;
/* BUILDER HOOKS */
var namespace = "@webstudio-is/sdk-components-react-radix";
// For each DialogOverlay component within the selection,
// we identify its closest parent Dialog component
// and update its open prop bound to variable.
exports.hooksDialog = {
  onNavigatorUnselect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":DialogOverlay")) {
        var dialog = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Dialog")
        );
        if (dialog) {
          context.setMemoryProp(dialog, "open", undefined);
        }
      }
    }
  },
  onNavigatorSelect: function (context, event) {
    for (var _i = 0, _a = event.instancePath; _i < _a.length; _i++) {
      var instance = _a[_i];
      if (instance.component === "".concat(namespace, ":DialogOverlay")) {
        var dialog = (0, runtime_1.getClosestInstance)(
          event.instancePath,
          instance,
          "".concat(namespace, ":Dialog")
        );
        if (dialog) {
          context.setMemoryProp(dialog, "open", true);
        }
      }
    }
  },
};
