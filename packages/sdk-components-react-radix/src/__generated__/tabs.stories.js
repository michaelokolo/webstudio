"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Tabs defaultValue={"0"} className={"w-tabs"}>
        <components_1.TabsList className={"w-tabs-list w-tabs-list-1"}>
          <components_1.TabsTrigger
            data-ws-index="0"
            className={"w-tab-trigger w-tab-trigger-1"}
          >
            {"Account"}
          </components_1.TabsTrigger>
          <components_1.TabsTrigger
            data-ws-index="1"
            className={"w-tab-trigger w-tab-trigger-2"}
          >
            {"Password"}
          </components_1.TabsTrigger>
        </components_1.TabsList>
        <components_1.TabsContent
          data-ws-index="0"
          className={"w-tab-content w-tab-content-1"}
        >
          {"Make changes to your account here."}
        </components_1.TabsContent>
        <components_1.TabsContent
          data-ws-index="1"
          className={"w-tab-content w-tab-content-2"}
        >
          {"Change your password here."}
        </components_1.TabsContent>
      </components_1.Tabs>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Tabs",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            '\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-tabs) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-tab-content) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-tabs-list) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-tab-trigger) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    text-transform: none;\n    background-color: transparent;\n    background-image: none;\n    border: 0px solid rgba(226, 232, 240, 1);\n    margin: 0;\n    padding: 0px\n  }\n}\n@media all {\n  .w-tabs-list-1 {\n    display: inline-flex;\n    height: 2.5rem;\n    align-items: center;\n    justify-content: center;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(100, 116, 139, 1);\n    padding: 0.25rem\n  }\n  .w-tab-trigger-1 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    padding-top: 0.375rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.375rem;\n    padding-left: 0.75rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    transition-property: all;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal;\n    white-space: nowrap;\n    white-space-collapse: collapse\n  }\n  .w-tab-trigger-1:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-tab-trigger-1:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-tab-trigger-1[data-state="active"] {\n    background-color: rgba(255, 255, 255, 1);\n    color: rgba(2, 8, 23, 1);\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)\n  }\n  .w-tab-trigger-2 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    padding-top: 0.375rem;\n    padding-right: 0.75rem;\n    padding-bottom: 0.375rem;\n    padding-left: 0.75rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    transition-property: all;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal;\n    white-space: nowrap;\n    white-space-collapse: collapse\n  }\n  .w-tab-trigger-2:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-tab-trigger-2:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-tab-trigger-2[data-state="active"] {\n    background-color: rgba(255, 255, 255, 1);\n    color: rgba(2, 8, 23, 1);\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)\n  }\n  .w-tab-content-1 {\n    margin-top: 0.5rem\n  }\n  .w-tab-content-1:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n  .w-tab-content-2 {\n    margin-top: 0.5rem\n  }\n  .w-tab-content-2:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: medium none currentcolor\n  }\n}\n      '
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Tabs = Story;
