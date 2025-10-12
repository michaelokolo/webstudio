"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Switch className={"w-switch w-switch-1"}>
        <components_1.SwitchThumb
          className={"w-switch-thumb w-switch-thumb-1"}
        />
      </components_1.Switch>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Switch",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            '\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-switch) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    text-transform: none;\n    background-color: transparent;\n    background-image: none;\n    border: 0px solid rgba(226, 232, 240, 1);\n    margin: 0;\n    padding: 0px\n  }\n  :where(span.w-switch-thumb) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n}\n@media all {\n  .w-switch-1 {\n    display: inline-flex;\n    height: 24px;\n    width: 44px;\n    flex-shrink: 0;\n    cursor: pointer;\n    align-items: center;\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n    transition-property: all;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal;\n    border: 2px solid transparent\n  }\n  .w-switch-1:disabled {\n    cursor: not-allowed;\n    opacity: 0.5\n  }\n  .w-switch-1:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n  .w-switch-1[data-state="checked"] {\n    background-color: rgba(15, 23, 42, 1)\n  }\n  .w-switch-1[data-state="unchecked"] {\n    background-color: rgba(226, 232, 240, 1)\n  }\n  .w-switch-thumb-1 {\n    pointer-events: none;\n    display: block;\n    height: 1.25rem;\n    width: 1.25rem;\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n    background-color: rgba(255, 255, 255, 1);\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n    transition-property: transform;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal\n  }\n  .w-switch-thumb-1[data-state="checked"] {\n    transform: translateX(20px)\n  }\n  .w-switch-thumb-1[data-state="unchecked"] {\n    transform: translateX(0px)\n  }\n}\n      '
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Switch = Story;
