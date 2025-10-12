"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Label className={"w-label w-checkbox-field"}>
        <components_1.Checkbox className={"w-checkbox w-checkbox-1"}>
          <components_1.CheckboxIndicator
            className={"w-checkbox-indicator w-checkbox-indicator-1"}
          >
            <sdk_components_react_1.HtmlEmbed
              code={
                '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.091" d="m13.636 3.667-8 8L2 8.03"/></svg>'
              }
              className={"w-html-embed"}
            />
          </components_1.CheckboxIndicator>
        </components_1.Checkbox>
        <sdk_components_react_1.Text tag={"span"} className={"w-text"}>
          {"Checkbox"}
        </sdk_components_react_1.Text>
      </components_1.Label>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Checkbox",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            '\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-html-embed) {\n    display: contents;\n    white-space: normal;\n    white-space-collapse: collapse\n  }\n  :where(div.w-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    min-height: 1em\n  }\n  :where(button.w-checkbox) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    text-transform: none;\n    background-color: transparent;\n    background-image: none;\n    border: 0px solid rgba(226, 232, 240, 1);\n    margin: 0;\n    padding: 0px\n  }\n  :where(span.w-checkbox-indicator) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(label.w-label) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n}\n@media all {\n  .w-checkbox-field {\n    display: flex;\n    row-gap: 0.5rem;\n    column-gap: 0.5rem;\n    align-items: center\n  }\n  .w-checkbox-1 {\n    height: 1rem;\n    width: 1rem;\n    flex-shrink: 0;\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n    border: 1px solid rgba(15, 23, 42, 1)\n  }\n  .w-checkbox-1:disabled {\n    cursor: not-allowed;\n    opacity: 0.5\n  }\n  .w-checkbox-1:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n  .w-checkbox-1[data-state="checked"] {\n    background-color: rgba(15, 23, 42, 1);\n    color: rgba(248, 250, 252, 1)\n  }\n  .w-checkbox-indicator-1 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: currentcolor\n  }\n}\n      '
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Checkbox = Story;
