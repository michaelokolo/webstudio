"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationMenu = void 0;
var sdk_components_react_1 = require("@webstudio-is/sdk-components-react");
var components_1 = require("../components");
var Component = function () {
  return (
    <sdk_components_react_1.Box className={"w-box"}>
      <components_1.NavigationMenu
        className={"w-navigation-menu w-navigation-menu-1"}
      >
        <components_1.NavigationMenuList
          className={"w-menu-list w-menu-list-1"}
        >
          <components_1.NavigationMenuItem
            data-ws-index="0"
            className={"w-menu-item"}
          >
            <components_1.NavigationMenuTrigger className={"w-menu-trigger"}>
              <sdk_components_react_1.Button className={"w-button w-button-1"}>
                <sdk_components_react_1.Text className={"w-text"}>
                  {"About"}
                </sdk_components_react_1.Text>
                <sdk_components_react_1.Box
                  className={"w-box w-icon-container"}
                >
                  <sdk_components_react_1.HtmlEmbed
                    code={
                      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 6 4 4 4-4"/></svg>'
                    }
                    className={"w-html-embed"}
                  />
                </sdk_components_react_1.Box>
              </sdk_components_react_1.Button>
            </components_1.NavigationMenuTrigger>
            <components_1.NavigationMenuContent
              data-ws-index="0"
              className={"w-menu-content w-menu-content-1"}
            >
              <sdk_components_react_1.Box className={"w-box w-content"}>
                <sdk_components_react_1.Box className={"w-box w-box-1"}>
                  {""}
                </sdk_components_react_1.Box>
                <sdk_components_react_1.Box className={"w-box w-flex-column"}>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/sheet"}
                      className={"w-link w-link-1"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-1"}
                      >
                        {"Sheet"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-1"}
                      >
                        {
                          "Extends the Dialog component to display content that complements the main content of the screen."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={
                        "https://ui.shadcn.com/docs/components/navigation-menu"
                      }
                      className={"w-link w-link-2"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-2"}
                      >
                        {"Navigation Menu"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-2"}
                      >
                        {"A collection of links for navigating websites."}
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/tabs"}
                      className={"w-link w-link-3"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-3"}
                      >
                        {"Tabs"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-3"}
                      >
                        {
                          "A set of layered sections of content—known as tab panels—that are displayed one at a time."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                </sdk_components_react_1.Box>
              </sdk_components_react_1.Box>
            </components_1.NavigationMenuContent>
          </components_1.NavigationMenuItem>
          <components_1.NavigationMenuItem
            data-ws-index="1"
            className={"w-menu-item"}
          >
            <components_1.NavigationMenuTrigger className={"w-menu-trigger"}>
              <sdk_components_react_1.Button className={"w-button w-button-2"}>
                <sdk_components_react_1.Text className={"w-text"}>
                  {"Components"}
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
              </sdk_components_react_1.Button>
            </components_1.NavigationMenuTrigger>
            <components_1.NavigationMenuContent
              data-ws-index="1"
              className={"w-menu-content w-menu-content-2"}
            >
              <sdk_components_react_1.Box className={"w-box w-content-1"}>
                <sdk_components_react_1.Box className={"w-box w-flex-column-1"}>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/accordion"}
                      className={"w-link w-link-4"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-4"}
                      >
                        {"Accordion"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-4"}
                      >
                        {
                          "A vertically stacked set of interactive headings that each reveal a section of content."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/dialog"}
                      className={"w-link w-link-5"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-5"}
                      >
                        {"Dialog"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-5"}
                      >
                        {
                          "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/collapsible"}
                      className={"w-link w-link-6"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-6"}
                      >
                        {"Collapsible"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-6"}
                      >
                        {
                          "An interactive component which expands/collapses a panel."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                </sdk_components_react_1.Box>
                <sdk_components_react_1.Box className={"w-box w-flex-column-2"}>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/popover"}
                      className={"w-link w-link-7"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-7"}
                      >
                        {"Popover"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-7"}
                      >
                        {
                          "Displays rich content in a portal, triggered by a button."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/tooltip"}
                      className={"w-link w-link-8"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-8"}
                      >
                        {"Tooltip"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-8"}
                      >
                        {
                          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                  <components_1.NavigationMenuLink
                    className={"w-accessible-link-wrapper"}
                  >
                    <sdk_components_react_1.Link
                      href={"https://ui.shadcn.com/docs/components/button"}
                      className={"w-link w-link-9"}
                    >
                      <sdk_components_react_1.Text
                        className={"w-text w-text-9"}
                      >
                        {"Button"}
                      </sdk_components_react_1.Text>
                      <sdk_components_react_1.Paragraph
                        className={"w-paragraph w-paragraph-9"}
                      >
                        {
                          "Displays a button or a component that looks like a button."
                        }
                      </sdk_components_react_1.Paragraph>
                    </sdk_components_react_1.Link>
                  </components_1.NavigationMenuLink>
                </sdk_components_react_1.Box>
              </sdk_components_react_1.Box>
            </components_1.NavigationMenuContent>
          </components_1.NavigationMenuItem>
          <components_1.NavigationMenuItem
            data-ws-index="2"
            className={"w-menu-item"}
          >
            <components_1.NavigationMenuLink
              className={"w-accessible-link-wrapper"}
            >
              <sdk_components_react_1.Link className={"w-link w-link-10"}>
                {"Standalone"}
              </sdk_components_react_1.Link>
            </components_1.NavigationMenuLink>
          </components_1.NavigationMenuItem>
        </components_1.NavigationMenuList>
        <sdk_components_react_1.Box className={"w-box w-viewport-container"}>
          <components_1.NavigationMenuViewport
            className={"w-menu-viewport w-menu-viewport-1"}
          />
        </sdk_components_react_1.Box>
      </components_1.NavigationMenu>
    </sdk_components_react_1.Box>
  );
};
exports.default = {
  title: "Components/NavigationMenu",
};
var Story = {
  render: function () {
    return (
      <>
        <style>
          {
            '\n@media all {\n  :where(div.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(address.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(article.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(aside.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(figure.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(footer.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(header.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(main.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(nav.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(section.w-box) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(button.w-button) {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    border-top-style: solid;\n    border-right-style: solid;\n    border-bottom-style: solid;\n    border-left-style: solid;\n    text-transform: none;\n    margin: 0\n  }\n  :where(div.w-html-embed) {\n    display: contents;\n    white-space: normal;\n    white-space-collapse: collapse\n  }\n  :where(a.w-link) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    display: inline-block\n  }\n  :where(p.w-paragraph) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-text) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px;\n    min-height: 1em\n  }\n  :where(div.w-navigation-menu) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-menu-content) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-menu-item) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-accessible-link-wrapper) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-menu-list) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-menu-trigger) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n  :where(div.w-menu-viewport) {\n    box-sizing: border-box;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-left-width: 1px;\n    outline-width: 1px\n  }\n}\n@media all {\n  .w-navigation-menu-1 {\n    position: relative;\n    max-width: max-content\n  }\n  .w-menu-list-1 {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    list-style-type: none;\n    align-items: center;\n    justify-content: center;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    margin: 0;\n    padding: 0\n  }\n  .w-button-1 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    height: 2.25rem;\n    padding-top: 0;\n    padding-right: 0.75rem;\n    padding-bottom: 0;\n    padding-left: 0.75rem;\n    --navigation-menu-trigger-icon-transform: 0deg;\n    border: 0 solid rgba(226, 232, 240, 1)\n  }\n  .w-button-1:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-button-1:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-button-1:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-button-1[data-state="open"] {\n    --navigation-menu-trigger-icon-transform: 180deg\n  }\n  .w-icon-container {\n    margin-left: 0.25rem;\n    rotate: var(--navigation-menu-trigger-icon-transform);\n    height: 1rem;\n    width: 1rem;\n    flex-shrink: 0;\n    transition-property: all;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal\n  }\n  .w-menu-content-1 {\n    left: 0;\n    top: 0;\n    positon: absolute;\n    width: max-content;\n    padding: 1rem\n  }\n  .w-content {\n    display: flex;\n    row-gap: 1rem;\n    column-gap: 1rem;\n    padding: 0.5rem\n  }\n  .w-box-1 {\n    background-color: rgba(226, 232, 240, 1);\n    width: 12rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    padding: 1rem\n  }\n  .w-flex-column {\n    width: 16rem;\n    display: flex;\n    row-gap: 1rem;\n    column-gap: 1rem;\n    flex-direction: column\n  }\n  .w-link-1 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-1:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-1:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-1 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-1 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-2 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-2:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-2:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-2 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-2 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-3 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-3:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-3:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-3 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-3 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-button-2 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    height: 2.25rem;\n    padding-top: 0;\n    padding-right: 0.75rem;\n    padding-bottom: 0;\n    padding-left: 0.75rem;\n    --navigation-menu-trigger-icon-transform: 0deg;\n    border: 0 solid rgba(226, 232, 240, 1)\n  }\n  .w-button-2:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-button-2:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-button-2:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-button-2[data-state="open"] {\n    --navigation-menu-trigger-icon-transform: 180deg\n  }\n  .w-icon-container-1 {\n    margin-left: 0.25rem;\n    rotate: var(--navigation-menu-trigger-icon-transform);\n    height: 1rem;\n    width: 1rem;\n    flex-shrink: 0;\n    transition-property: all;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-delay: 0s;\n    transition-behavior: normal\n  }\n  .w-menu-content-2 {\n    left: 0;\n    top: 0;\n    positon: absolute;\n    width: max-content;\n    padding: 1rem\n  }\n  .w-content-1 {\n    display: flex;\n    row-gap: 1rem;\n    column-gap: 1rem\n  }\n  .w-flex-column-1 {\n    width: 16rem;\n    display: flex;\n    row-gap: 1rem;\n    column-gap: 1rem;\n    flex-direction: column\n  }\n  .w-link-4 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-4:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-4:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-4 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-4 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-5 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-5:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-5:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-5 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-5 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-6 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-6:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-6:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-6 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-6 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-flex-column-2 {\n    width: 16rem;\n    display: flex;\n    row-gap: 1rem;\n    column-gap: 1rem;\n    flex-direction: column\n  }\n  .w-link-7 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-7:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-7:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-7 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-7 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-8 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-8:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-8:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-8 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-8 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-9 {\n    color: inherit;\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: none;\n    user-select: none;\n    row-gap: 0.25rem;\n    column-gap: 0.25rem;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    line-height: 1;\n    text-decoration-line: none;\n    outline: medium none currentcolor;\n    padding: 0.75rem\n  }\n  .w-link-9:focus {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-link-9:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-text-9 {\n    font-size: 0.875rem;\n    font-weight: 500;\n    line-height: 1\n  }\n  .w-paragraph-9 {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 0.875rem;\n    line-height: 1.375;\n    color: rgba(100, 116, 139, 1);\n    margin: 0\n  }\n  .w-link-10 {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    font-weight: 500;\n    height: 2.25rem;\n    padding-top: 0;\n    padding-right: 0.75rem;\n    padding-bottom: 0;\n    padding-left: 0.75rem;\n    text-decoration-line: none;\n    color: currentcolor;\n    border: 0 solid rgba(226, 232, 240, 1)\n  }\n  .w-link-10:disabled {\n    pointer-events: none;\n    opacity: 0.5\n  }\n  .w-link-10:focus-visible {\n    outline-offset: 2px;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 calc(2px + 2px) rgba(148, 163, 184, 1);\n    outline: 2px solid transparent\n  }\n  .w-link-10:hover {\n    background-color: rgba(241, 245, 249, 1);\n    color: rgba(15, 23, 42, 1)\n  }\n  .w-viewport-container {\n    position: absolute;\n    left: 0;\n    top: 100%;\n    display: flex;\n    justify-content: center\n  }\n  .w-menu-viewport-1 {\n    position: relative;\n    margin-top: 0.375rem;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n    border-bottom-left-radius: 0.375rem;\n    background-color: rgba(255, 255, 255, 1);\n    color: rgba(2, 8, 23, 1);\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n    height: var(--radix-navigation-menu-viewport-height);\n    width: var(--radix-navigation-menu-viewport-width);\n    border: 1px solid rgba(226, 232, 240, 1)\n  }\n}\n      '
          }
        </style>
        <Component />
      </>
    );
  },
};
exports.NavigationMenu = Story;
