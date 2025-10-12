"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
var template_1 = require("@webstudio-is/template");
var proxy_1 = require("./shared/proxy");
var styles_1 = require("./shared/styles");
exports.meta = {
  category: "radix",
  description:
    "An interactive component which expands and collapses some content, triggered by a button.",
  order: 5,
  template: (
    <proxy_1.radix.Collapsible>
      <proxy_1.radix.CollapsibleTrigger>
        <template_1.$.Button ws:style={(0, styles_1.getButtonStyle)("outline")}>
          {new template_1.PlaceholderValue("Click to toggle content")}
        </template_1.$.Button>
      </proxy_1.radix.CollapsibleTrigger>
      <proxy_1.radix.CollapsibleContent>
        <template_1.$.Text>
          {new template_1.PlaceholderValue("Collapsible Content")}
        </template_1.$.Text>
      </proxy_1.radix.CollapsibleContent>
    </proxy_1.radix.Collapsible>
  ),
};
