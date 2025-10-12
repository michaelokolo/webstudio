"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radix = void 0;
var createMetaProxy = function (prefix) {
  return new Proxy(
    {},
    {
      get: function (_target, prop) {
        return "".concat(prefix).concat(prop);
      },
    }
  );
};
exports.radix = createMetaProxy("@webstudio-is/sdk-components-react-radix:");
