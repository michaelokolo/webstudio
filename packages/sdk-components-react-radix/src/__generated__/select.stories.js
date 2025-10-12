"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Select>
        <components_1.SelectTrigger
          className={"w-select-trigger w-select-trigger-1"}
        >
          <components_1.SelectValue
            placeholder={"Theme"}
            className={"w-value"}
          />
        </components_1.SelectTrigger>
        <components_1.SelectContent
          className={"w-select-content w-select-content-1"}
        >
          <components_1.SelectViewport
            className={"w-select-viewport w-select-viewport-1"}
          >
            <components_1.SelectItem
              value={"light"}
              className={"w-select-item w-select-item-1"}
            >
              <components_1.SelectItemIndicator
                className={"w-indicator w-indicator-1"}
              >
                <sdk_components_react_1.HtmlEmbed
                  code={
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.091" d="m13.636 3.667-8 8L2 8.03"/></svg>'
                  }
                  className={"w-html-embed"}
                />
              </components_1.SelectItemIndicator>
              <components_1.SelectItemText className={"w-item-text"}>
                {"Light"}
              </components_1.SelectItemText>
            </components_1.SelectItem>
            <components_1.SelectItem
              value={"dark"}
              className={"w-select-item w-select-item-2"}
            >
              <components_1.SelectItemIndicator
                className={"w-indicator w-indicator-2"}
              >
                <sdk_components_react_1.HtmlEmbed
                  code={
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.091" d="m13.636 3.667-8 8L2 8.03"/></svg>'
                  }
                  className={"w-html-embed"}
                />
              </components_1.SelectItemIndicator>
              <components_1.SelectItemText className={"w-item-text"}>
                {"Dark"}
              </components_1.SelectItemText>
            </components_1.SelectItem>
            <components_1.SelectItem
              value={"system"}
              className={"w-select-item w-select-item-3"}
            >
              <components_1.SelectItemIndicator
                className={"w-indicator w-indicator-3"}
              >
                <sdk_components_react_1.HtmlEmbed
                  code={
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.091" d="m13.636 3.667-8 8L2 8.03"/></svg>'
                  }
                  className={"w-html-embed"}
                />
              </components_1.SelectItemIndicator>
              <components_1.SelectItemText className={"w-item-text"}>
                {"System"}
              </components_1.SelectItemText>
            </components_1.SelectItem>
          </components_1.SelectViewport>
        </components_1.SelectContent>
      </components_1.Select>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Select",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            "\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-html-embed) {\n    display: contents;\n    white-space: normal;\n    white-space-collapse: collapse\n  }\n  :where(div.w-select-content) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-select-item) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(span.w-indicator) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(span.w-item-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-select-trigger) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    border-top-style: solid;\n    border-right-style: solid;\n    border-bottom-style: solid;\n    border-left-style: solid;\n    text-transform: none;\n    margin: 0\n  }\n  :where(span.w-value) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-select-viewport) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n}\n@media all {\n  .w-select-trigger-1 {\n    display: flex;\n    height: 2.5rem;\n    width: 100%;\n    align-items: center;\n    justify-content: between;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    background-color: rgba(255, 255, 255, 1);\n    padding-top: 0.5rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.5rem;\n    padding-left: 0.75rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    border: 1px solid rgba(226, 232, 240, 1)\n  }\n  .w-select-trigger-1::placeholder {\n    color: rgba(100, 116, 139, 1)\n  }\n  .w-select-trigger-1:disabled {\n    cursor: not-allowed;\n    opacity: 0.5\n  }\n  .w-select-trigger-1:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n  .w-select-content-1 {\n    position: relative;\n    z-index: 50;\n    min-width: 8rem;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    background-color: rgba(255, 255, 255, 1);\n    color: rgba(2, 8, 23, 1);\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n    border: 1px solid rgba(226, 232, 240, 1)\n  }\n  .w-select-viewport-1 {\n    height: var(--radix-select-trigger-height);\n    width: 100%;\n    min-width: var(--radix-select-trigger-width);\n    padding: 0.25rem\n  }\n  .w-select-item-1 {\n    position: relative;\n    display: flex;\n    width: 100%;\n    cursor: default;\n    -webkit-user-select: none;\n    user-select: none;\n    align-items: center;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    padding-top: 0.375rem;\n    padding-right: 0.5rem;\n    padding-bottom: 0.375rem;\n    padding-left: 2rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    outline: medium none currentcolor\n  }\n  .w-select-item-1:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-select-item-1[data-disabled] {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-indicator-1 {\n    position: absolute;\n    left: 0.5rem;\n    display: flex;\n    height: 0.875rem;\n    width: 0.875rem;\n    align-items: center;\n    justify-content: center\n  }\n  .w-select-item-2 {\n    position: relative;\n    display: flex;\n    width: 100%;\n    cursor: default;\n    -webkit-user-select: none;\n    user-select: none;\n    align-items: center;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    padding-top: 0.375rem;\n    padding-right: 0.5rem;\n    padding-bottom: 0.375rem;\n    padding-left: 2rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    outline: medium none currentcolor\n  }\n  .w-select-item-2:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-select-item-2[data-disabled] {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-indicator-2 {\n    position: absolute;\n    left: 0.5rem;\n    display: flex;\n    height: 0.875rem;\n    width: 0.875rem;\n    align-items: center;\n    justify-content: center\n  }\n  .w-select-item-3 {\n    position: relative;\n    display: flex;\n    width: 100%;\n    cursor: default;\n    -webkit-user-select: none;\n    user-select: none;\n    align-items: center;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    padding-top: 0.375rem;\n    padding-right: 0.5rem;\n    padding-bottom: 0.375rem;\n    padding-left: 2rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    outline: medium none currentcolor\n  }\n  .w-select-item-3:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-select-item-3[data-disabled] {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-indicator-3 {\n    position: absolute;\n    left: 0.5rem;\n    display: flex;\n    height: 0.875rem;\n    width: 0.875rem;\n    align-items: center;\n    justify-content: center\n  }\n}\n      "
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Select = Story;
