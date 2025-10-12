"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.Accordion
        collapsible={true}
        defaultValue={"0"}
        className={"w-accordion"}
      >
        <components_1.AccordionItem
          data-ws-index="0"
          className={"w-item w-item-1"}
        >
          <components_1.AccordionHeader
            className={"w-item-header w-item-header-1"}
          >
            <components_1.AccordionTrigger
              className={"w-item-trigger w-item-trigger-1"}
            >
              <sdk_components_react_1.Text className={"w-text"}>
                {"Is it accessible?"}
              </sdk_components_react_1.Text>
              <sdk_components_react_1.Box className={"w-box w-icon-container"}>
                <sdk_components_react_1.HtmlEmbed
                  code={
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>'
                  }
                  className={"w-html-embed"}
                />
              </sdk_components_react_1.Box>
            </components_1.AccordionTrigger>
          </components_1.AccordionHeader>
          <components_1.AccordionContent
            className={"w-item-content w-item-content-1"}
          >
            {"Yes. It adheres to the WAI-ARIA design pattern."}
          </components_1.AccordionContent>
        </components_1.AccordionItem>
        <components_1.AccordionItem
          data-ws-index="1"
          className={"w-item w-item-2"}
        >
          <components_1.AccordionHeader
            className={"w-item-header w-item-header-2"}
          >
            <components_1.AccordionTrigger
              className={"w-item-trigger w-item-trigger-2"}
            >
              <sdk_components_react_1.Text className={"w-text"}>
                {"Is it styled?"}
              </sdk_components_react_1.Text>
              <sdk_components_react_1.Box
                className={"w-box w-icon-container-1"}
              >
                <sdk_components_react_1.HtmlEmbed
                  code={
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>'
                  }
                  className={"w-html-embed"}
                />
              </sdk_components_react_1.Box>
            </components_1.AccordionTrigger>
          </components_1.AccordionHeader>
          <components_1.AccordionContent
            className={"w-item-content w-item-content-2"}
          >
            {
              "Yes. It comes with default styles that matches the other components' aesthetic."
            }
          </components_1.AccordionContent>
        </components_1.AccordionItem>
        <components_1.AccordionItem
          data-ws-index="2"
          className={"w-item w-item-3"}
        >
          <components_1.AccordionHeader
            className={"w-item-header w-item-header-3"}
          >
            <components_1.AccordionTrigger
              className={"w-item-trigger w-item-trigger-3"}
            >
              <sdk_components_react_1.Text className={"w-text"}>
                {"Is it animated?"}
              </sdk_components_react_1.Text>
              <sdk_components_react_1.Box
                className={"w-box w-icon-container-2"}
              >
                <sdk_components_react_1.HtmlEmbed
                  code={
                    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>'
                  }
                  className={"w-html-embed"}
                />
              </sdk_components_react_1.Box>
            </components_1.AccordionTrigger>
          </components_1.AccordionHeader>
          <components_1.AccordionContent
            className={"w-item-content w-item-content-3"}
          >
            {
              "Yes. It's animated by default, but you can disable it if you prefer."
            }
          </components_1.AccordionContent>
        </components_1.AccordionItem>
      </components_1.Accordion>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/Accordion",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            '\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-html-embed) {\n    display: contents;\n    white-space: normal;\n    white-space-collapse: collapse\n  }\n  :where(div.w-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    min-height: 1em\n  }\n  :where(div.w-accordion) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-item-content) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(h3.w-item-header) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    margin-top: 0px;\n    margin-bottom: 0px\n  }\n  :where(div.w-item) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-item-trigger) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    text-transform: none;\n    background-color: transparent;\n    background-image: none;\n    border: 0px solid rgba(226, 232, 240, 1);\n    margin: 0;\n    padding: 0px\n  }\n}\n@media all {\n  .w-item-1 {\n    border-bottom: 1px solid rgba(226, 232, 240, 1)\n  }\n  .w-item-header-1 {\n    display: flex\n  }\n  .w-item-trigger-1 {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    align-items: center;\n    justify-content: between;\n    padding-top: 1rem;\n    padding-right: 0;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    font-weight: 500;\n    --accordion-trigger-icon-transform: 0deg\n  }\n  .w-item-trigger-1:hover {\n    text-decoration-line: underline\n  }\n  .w-item-trigger-1[data-state="open"] {\n    --accordion-trigger-icon-transform: 180deg\n  }\n  .w-icon-container {\n    rotate: var(--accordion-trigger-icon-transform);\n    height: 1rem;\n    width: 1rem;\n    flex-shrink: 0;\n    transition-property: all;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal\n  }\n  .w-item-content-1 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    transition-property: all;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal;\n    padding-bottom: 1rem\n  }\n  .w-item-2 {\n    border-bottom: 1px solid rgba(226, 232, 240, 1)\n  }\n  .w-item-header-2 {\n    display: flex\n  }\n  .w-item-trigger-2 {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    align-items: center;\n    justify-content: between;\n    padding-top: 1rem;\n    padding-right: 0;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    font-weight: 500;\n    --accordion-trigger-icon-transform: 0deg\n  }\n  .w-item-trigger-2:hover {\n    text-decoration-line: underline\n  }\n  .w-item-trigger-2[data-state="open"] {\n    --accordion-trigger-icon-transform: 180deg\n  }\n  .w-icon-container-1 {\n    rotate: var(--accordion-trigger-icon-transform);\n    height: 1rem;\n    width: 1rem;\n    flex-shrink: 0;\n    transition-property: all;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal\n  }\n  .w-item-content-2 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    transition-property: all;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal;\n    padding-bottom: 1rem\n  }\n  .w-item-3 {\n    border-bottom: 1px solid rgba(226, 232, 240, 1)\n  }\n  .w-item-header-3 {\n    display: flex\n  }\n  .w-item-trigger-3 {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    align-items: center;\n    justify-content: between;\n    padding-top: 1rem;\n    padding-right: 0;\n    padding-bottom: 1rem;\n    padding-left: 0;\n    font-weight: 500;\n    --accordion-trigger-icon-transform: 0deg\n  }\n  .w-item-trigger-3:hover {\n    text-decoration-line: underline\n  }\n  .w-item-trigger-3[data-state="open"] {\n    --accordion-trigger-icon-transform: 180deg\n  }\n  .w-icon-container-2 {\n    rotate: var(--accordion-trigger-icon-transform);\n    height: 1rem;\n    width: 1rem;\n    flex-shrink: 0;\n    transition-property: all;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal\n  }\n  .w-item-content-3 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    transition-property: all;\n    transition-duration: 150ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal;\n    padding-bottom: 1rem\n  }\n}\n      '
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.Accordion = Story;
