"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.RadioGroup className={"w-radio-group w-radio-group-1"}>
        <components_1.Label className={"w-label w-label-1"}>
          <components_1.RadioGroupItem
            value={"default"}
            className={"w-radio-group-item w-radio-group-item-1"}
          >
            <components_1.RadioGroupIndicator
              className={"w-radio-group-indicator"}
            >
              <sdk_components_react_1.HtmlEmbed
                code={
                  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
                }
                className={"w-html-embed"}
              />
            </components_1.RadioGroupIndicator>
          </components_1.RadioGroupItem>
          <sdk_components_react_1.Text className={"w-text"}>
            {"Default"}
          </sdk_components_react_1.Text>
        </components_1.Label>
        <components_1.Label className={"w-label w-label-2"}>
          <components_1.RadioGroupItem
            value={"comfortable"}
            className={"w-radio-group-item w-radio-group-item-2"}
          >
            <components_1.RadioGroupIndicator
              className={"w-radio-group-indicator"}
            >
              <sdk_components_react_1.HtmlEmbed
                code={
                  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
                }
                className={"w-html-embed"}
              />
            </components_1.RadioGroupIndicator>
          </components_1.RadioGroupItem>
          <sdk_components_react_1.Text className={"w-text"}>
            {"Comfortable"}
          </sdk_components_react_1.Text>
        </components_1.Label>
        <components_1.Label className={"w-label w-label-3"}>
          <components_1.RadioGroupItem
            value={"compact"}
            className={"w-radio-group-item w-radio-group-item-3"}
          >
            <components_1.RadioGroupIndicator
              className={"w-radio-group-indicator"}
            >
              <sdk_components_react_1.HtmlEmbed
                code={
                  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
                }
                className={"w-html-embed"}
              />
            </components_1.RadioGroupIndicator>
          </components_1.RadioGroupItem>
          <sdk_components_react_1.Text className={"w-text"}>
            {"Compact"}
          </sdk_components_react_1.Text>
        </components_1.Label>
      </components_1.RadioGroup>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/RadioGroup",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            "\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-html-embed) {\n    display: contents;\n    white-space: normal;\n    white-space-collapse: collapse\n  }\n  :where(div.w-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    min-height: 1em\n  }\n  :where(label.w-label) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-radio-group) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(span.w-radio-group-indicator) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-radio-group-item) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    text-transform: none;\n    background-color: transparent;\n    background-image: none;\n    border: 0px solid rgba(226, 232, 240, 1);\n    margin: 0;\n    padding: 0px\n  }\n}\n@media all {\n  .w-radio-group-1 {\n    display: flex;\n    flex-direction: column;\n    row-gap: 0.5rem;\n    column-gap: 0.5rem\n  }\n  .w-label-1 {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 0.5rem\n  }\n  .w-radio-group-item-1 {\n    aspect-ratio: 1/1;\n    height: 1rem;\n    width: 1rem;\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n    color: rgba(15, 23, 42, 1);\n    border: 1px solid rgba(15, 23, 42, 1)\n  }\n  .w-radio-group-item-1:disabled {\n    cursor: not-allowed;\n    opacity: 0.5\n  }\n  .w-radio-group-item-1:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n  .w-label-2 {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 0.5rem\n  }\n  .w-radio-group-item-2 {\n    aspect-ratio: 1/1;\n    height: 1rem;\n    width: 1rem;\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n    color: rgba(15, 23, 42, 1);\n    border: 1px solid rgba(15, 23, 42, 1)\n  }\n  .w-radio-group-item-2:disabled {\n    cursor: not-allowed;\n    opacity: 0.5\n  }\n  .w-radio-group-item-2:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n  .w-label-3 {\n    display: flex;\n    align-items: center;\n    row-gap: 0.5rem;\n    column-gap: 0.5rem\n  }\n  .w-radio-group-item-3 {\n    aspect-ratio: 1/1;\n    height: 1rem;\n    width: 1rem;\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n    color: rgba(15, 23, 42, 1);\n    border: 1px solid rgba(15, 23, 42, 1)\n  }\n  .w-radio-group-item-3:disabled {\n    cursor: not-allowed;\n    opacity: 0.5\n  }\n  .w-radio-group-item-3:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n}\n      "
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.RadioGroup = Story;
