"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheet = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Dialog>
        <components_1.DialogTrigger>
          <sdk_components_react_1.Button className={"w-button w-button-1"}>
            <sdk_components_react_1.HtmlEmbed
              code={
                '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"/></svg>'
              }
              className={"w-html-embed"}
            />
          </sdk_components_react_1.Button>
        </components_1.DialogTrigger>
        <components_1.DialogOverlay
          className={"w-dialog-overlay w-sheet-overlay"}
        >
          <components_1.DialogContent
            className={"w-dialog-content w-sheet-content"}
          >
            <sdk_components_react_1.Box
              tag={"nav"}
              role={"navigation"}
              className={"w-box"}
            >
              <sdk_components_react_1.Box className={"w-box w-sheet-header"}>
                <components_1.DialogTitle
                  className={"w-dialog-title w-sheet-title"}
                >
                  {"Sheet Title"}
                </components_1.DialogTitle>
                <components_1.DialogDescription
                  className={"w-dialog-description w-sheet-description"}
                >
                  {"Sheet description text you can edit"}
                </components_1.DialogDescription>
              </sdk_components_react_1.Box>
              <sdk_components_react_1.Text className={"w-text"}>
                {"The text you can edit"}
              </sdk_components_react_1.Text>
            </sdk_components_react_1.Box>
            <components_1.DialogClose
              className={"w-close-button w-close-button-1"}
            >
              <sdk_components_react_1.HtmlEmbed
                code={
                  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3 3 12.5M3 3l9.5 9.5"/></svg>'
                }
                className={"w-html-embed"}
              />
            </components_1.DialogClose>
          </components_1.DialogContent>
        </components_1.DialogOverlay>
      </components_1.Dialog>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Sheet",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            "\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-button) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    border-top-style: solid;\n    border-right-style: solid;\n    border-bottom-style: solid;\n    border-left-style: solid;\n    text-transform: none;\n    margin: 0\n  }\n  :where(div.w-html-embed) {\n    display: contents;\n    white-space: normal;\n    white-space-collapse: collapse\n  }\n  :where(div.w-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    min-height: 1em\n  }\n  :where(button.w-close-button) {\n    background-color: transparent;\n    background-image: none;\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    text-transform: none;\n    border: 1px solid rgba(226, 232, 240, 1);\n    margin: 0;\n    padding: 0px\n  }\n  :where(div.w-dialog-content) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(p.w-dialog-description) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-dialog-overlay) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(h2.w-dialog-title) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n}\n@media all {\n  .w-button-1 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    height: 2.5rem;\n    width: 2.5rem;\n    padding-top: 0px;\n    padding-right: 0.375rem;\n    padding-bottom: 0px;\n    padding-left: 0.375rem;\n    border: 0 solid rgba(226, 232, 240, 1)\n  }\n  .w-button-1:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-button-1:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-button-1:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-sheet-overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 50;\n    background-color: rgba(255, 255, 255, 0.8);\n    -webkit-backdrop-filter: blur(0 1px 2px 0 rgb(0 0 0/0.05));\n    backdrop-filter: blur(0 1px 2px 0 rgb(0 0 0/0.05));\n    display: flex;\n    flex-direction: column;\n    overflow-x: auto;\n    overflow-y: auto\n  }\n  .w-sheet-content {\n    width: 100%;\n    z-index: 50;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1rem;\n    column-gap: 1rem;\n    background-color: rgba(255, 255, 255, 1);\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n    position: relative;\n    margin-right: auto;\n    max-width: 24rem;\n    flex-grow: 1;\n    border: 1px solid rgba(226, 232, 240, 1);\n    padding: 1.5rem\n  }\n  .w-sheet-header {\n    display: flex;\n    flex-direction: column;\n    row-gap: 0.5rem;\n    column-gap: 0.5rem\n  }\n  .w-sheet-title {\n    font-size: 1.125rem;\n    line-height: 1;\n    letter-spacing: -0.025em;\n    margin: 0\n  }\n  .w-sheet-description {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-close-button-1 {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n    opacity: 0.7;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 1rem;\n    width: 1rem;\n    background-color: transparent;\n    outline: medium none currentcolor;\n    border: 0 none currentcolor\n  }\n  .w-close-button-1:focus-visible {\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1)\n  }\n  .w-close-button-1:hover {\n    opacity: 1\n  }\n}\n      "
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Sheet = Story;
