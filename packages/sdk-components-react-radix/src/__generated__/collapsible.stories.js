"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapsible = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Collapsible className={"w-collapsible"}>
        <components_1.CollapsibleTrigger>
          <sdk_components_react_1.Button className={"w-button w-button-1"}>
            {"Click to toggle content"}
          </sdk_components_react_1.Button>
        </components_1.CollapsibleTrigger>
        <components_1.CollapsibleContent className={"w-collapsible-content"}>
          <sdk_components_react_1.Text className={"w-text"}>
            {"Collapsible Content"}
          </sdk_components_react_1.Text>
        </components_1.CollapsibleContent>
      </components_1.Collapsible>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Collapsible",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            "\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-button) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    border-top-style: solid;\n    border-right-style: solid;\n    border-bottom-style: solid;\n    border-left-style: solid;\n    text-transform: none;\n    margin: 0\n  }\n  :where(div.w-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    min-height: 1em\n  }\n  :where(div.w-collapsible) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-collapsible-content) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n}\n@media all {\n  .w-button-1 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(255, 255, 255, 1);\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    height: 2.5rem;\n    padding-top: 0.5rem;\n    padding-right: 1rem;\n    padding-bottom: 0.5rem;\n    padding-left: 1rem;\n    border: 1px solid rgba(226, 232, 240, 1)\n  }\n  .w-button-1:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-button-1:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-button-1:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n}\n      "
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Collapsible = Story;
