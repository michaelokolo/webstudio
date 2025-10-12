"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var template_1 = require("@webstudio-is/template");
var proxy_1 = require("./shared/proxy");
var styles_1 = require("./shared/styles");
var theme_1 = require("./shared/theme");
var components = [
  {
    title: "Sheet",
    href: "/docs/components/sheet",
    description:
      "Extends the Dialog component to display content that complements the main content of the screen.",
  },
  {
    title: "Navigation Menu",
    href: "/docs/components/navigation-menu",
    description: "A collection of links for navigating websites.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Accordion",
    href: "/docs/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
  },
  {
    title: "Dialog",
    href: "/docs/components/dialog",
    description:
      "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
  },
  {
    title: "Collapsible",
    href: "/docs/components/collapsible",
    description: "An interactive component which expands/collapses a panel.",
  },
  {
    title: "Popover",
    href: "/docs/components/popover",
    description: "Displays rich content in a portal, triggered by a button.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Button",
    href: "/docs/components/button",
    description: "Displays a button or a component that looks like a button.",
  },
];
var createMenuContentItem = function (props) {
  return (
    <proxy_1.radix.NavigationMenuLink key={props.title}>
      <template_1.$.Link
        href={"https://ui.shadcn.com".concat(props.href)}
        // block select-none space-y-1 rounded-md p-3 leading-none
        // no-underline outline-none transition-colors
        // hover:bg-accent hover:text-accent-foreground
        // focus:bg-accent focus:text-accent-foreground
        ws:style={(0, template_1.css)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                "\n        color: inherit;\n        display: flex;\n        flex-direction: column;\n        user-select: none;\n        gap: ",
                ";\n        border-radius: ",
                ";\n        padding: ",
                ";\n        line-height: ",
                ";\n        text-decoration-line: none;\n        outline: none;\n        &:hover,\n        &:focus {\n          background-color: ",
                ";\n          color: ",
                ";\n        }\n      ",
              ],
              [
                "\n        color: inherit;\n        display: flex;\n        flex-direction: column;\n        user-select: none;\n        gap: ",
                ";\n        border-radius: ",
                ";\n        padding: ",
                ";\n        line-height: ",
                ";\n        text-decoration-line: none;\n        outline: none;\n        &:hover,\n        &:focus {\n          background-color: ",
                ";\n          color: ",
                ";\n        }\n      ",
              ]
            )),
          theme_1.spacing[1],
          theme_1.borderRadius.md,
          theme_1.spacing[3],
          theme_1.lineHeight.none,
          theme_1.colors.accent,
          theme_1.colors.accentForeground
        )}
      >
        <template_1.$.Text
          // text-sm font-medium leading-none
          ws:style={(0, template_1.css)(
            templateObject_2 ||
              (templateObject_2 = __makeTemplateObject(
                [
                  "\n          font-size: ",
                  ";\n          font-weight: ",
                  ";\n          line-height: ",
                  ";\n        ",
                ],
                [
                  "\n          font-size: ",
                  ";\n          font-weight: ",
                  ";\n          line-height: ",
                  ";\n        ",
                ]
              )),
            theme_1.fontSize.sm,
            theme_1.weights.medium,
            theme_1.lineHeight.none
          )}
        >
          {new template_1.PlaceholderValue(props.title)}
        </template_1.$.Text>
        <template_1.$.Paragraph
          // line-clamp-2 text-sm leading-snug text-muted-foreground
          ws:style={(0, template_1.css)(
            templateObject_3 ||
              (templateObject_3 = __makeTemplateObject(
                [
                  "\n          margin: 0;\n          overflow: hidden;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 2;\n          font-size: ",
                  ";\n          line-height: ",
                  ";\n          color: ",
                  ";\n        ",
                ],
                [
                  "\n          margin: 0;\n          overflow: hidden;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 2;\n          font-size: ",
                  ";\n          line-height: ",
                  ";\n          color: ",
                  ";\n        ",
                ]
              )),
            theme_1.fontSize.sm,
            theme_1.lineHeight.snug,
            theme_1.colors.mutedForeground
          )}
        >
          {new template_1.PlaceholderValue(props.description)}
        </template_1.$.Paragraph>
      </template_1.$.Link>
    </proxy_1.radix.NavigationMenuLink>
  );
};
var createMenuContentList = function (props) {
  return (
    <template_1.$.Box
      ws:label="Flex Column"
      ws:style={(0, template_1.css)(
        templateObject_4 ||
          (templateObject_4 = __makeTemplateObject(
            [
              "\n      width: ",
              ";\n      display: flex;\n      gap: ",
              ";\n      flex-direction: column;\n    ",
            ],
            [
              "\n      width: ",
              ";\n      display: flex;\n      gap: ",
              ";\n      flex-direction: column;\n    ",
            ]
          )),
        theme_1.width[64],
        theme_1.spacing[4]
      )}
    >
      {components
        .slice(props.offset, props.offset + props.count)
        .map(createMenuContentItem)}
    </template_1.$.Box>
  );
};
var aboutMenuContent = (
  <template_1.$.Box
    ws:label="Content"
    ws:style={(0, template_1.css)(
      templateObject_5 ||
        (templateObject_5 = __makeTemplateObject(
          [
            "\n      display: flex;\n      gap: ",
            ";\n      padding: ",
            ";\n    ",
          ],
          [
            "\n      display: flex;\n      gap: ",
            ";\n      padding: ",
            ";\n    ",
          ]
        )),
      theme_1.spacing[4],
      theme_1.spacing[2]
    )}
  >
    <template_1.$.Box
      ws:style={(0, template_1.css)(
        templateObject_6 ||
          (templateObject_6 = __makeTemplateObject(
            [
              "\n        background-color: ",
              ";\n        padding: ",
              ";\n        width: ",
              ";\n        border-radius: ",
              ";\n      ",
            ],
            [
              "\n        background-color: ",
              ";\n        padding: ",
              ";\n        width: ",
              ";\n        border-radius: ",
              ";\n      ",
            ]
          )),
        theme_1.colors.border,
        theme_1.spacing[4],
        theme_1.width[48],
        theme_1.borderRadius.md
      )}
    >
      {new template_1.PlaceholderValue("")}
    </template_1.$.Box>
    {createMenuContentList({ count: 3, offset: 0 })}
  </template_1.$.Box>
);
var componentsMenuContent = (
  <template_1.$.Box
    ws:label="Content"
    ws:style={(0, template_1.css)(
      templateObject_7 ||
        (templateObject_7 = __makeTemplateObject(
          ["\n      display: flex;\n      gap: ", ";\n    "],
          ["\n      display: flex;\n      gap: ", ";\n    "]
        )),
      theme_1.spacing[4]
    )}
  >
    {createMenuContentList({ count: 3, offset: 3 })}
    {createMenuContentList({ count: 3, offset: 6 })}
  </template_1.$.Box>
);
var createMenuItem = function (title, content) {
  return (
    <proxy_1.radix.NavigationMenuItem>
      <proxy_1.radix.NavigationMenuTrigger>
        <template_1.$.Button
          ws:style={__spreadArray(
            __spreadArray(
              [],
              (0, styles_1.getButtonStyle)("ghost", "sm"),
              true
            ),
            (0, template_1.css)(
              templateObject_8 ||
                (templateObject_8 = __makeTemplateObject(
                  [
                    '\n              --navigation-menu-trigger-icon-transform: 0deg;\n              &[data-state="open"] {\n                --navigation-menu-trigger-icon-transform: 180deg;\n              }\n            ',
                  ],
                  [
                    '\n              --navigation-menu-trigger-icon-transform: 0deg;\n              &[data-state="open"] {\n                --navigation-menu-trigger-icon-transform: 180deg;\n              }\n            ',
                  ]
                ))
            ),
            true
          )}
        >
          <template_1.$.Text>
            {new template_1.PlaceholderValue(title)}
          </template_1.$.Text>
          <template_1.$.Box
            ws:label="Icon Container"
            // h-4 w-4 shrink-0 transition-transform duration-200
            ws:style={(0, template_1.css)(
              templateObject_9 ||
                (templateObject_9 = __makeTemplateObject(
                  [
                    "\n              margin-left: ",
                    ";\n              rotate: var(--navigation-menu-trigger-icon-transform);\n              height: ",
                    ";\n              width: ",
                    ";\n              flex-shrink: 0;\n              transition: ",
                    ";\n              transition-duration: 200ms;\n            ",
                  ],
                  [
                    "\n              margin-left: ",
                    ";\n              rotate: var(--navigation-menu-trigger-icon-transform);\n              height: ",
                    ";\n              width: ",
                    ";\n              flex-shrink: 0;\n              transition: ",
                    ";\n              transition-duration: 200ms;\n            ",
                  ]
                )),
              theme_1.spacing[1],
              theme_1.height[4],
              theme_1.width[4],
              theme_1.transition.all
            )}
          >
            <template_1.$.HtmlEmbed
              ws:label="Chevron Icon"
              code={svg_1.ChevronDownIcon}
            />
          </template_1.$.Box>
        </template_1.$.Button>
      </proxy_1.radix.NavigationMenuTrigger>
      <proxy_1.radix.NavigationMenuContent
        // left-0 top-0 absolute w-max
        ws:style={(0, template_1.css)(
          templateObject_10 ||
            (templateObject_10 = __makeTemplateObject(
              [
                "\n          left: 0;\n          top: 0;\n          positon: absolute;\n          width: max-content;\n          padding: ",
                ";\n        ",
              ],
              [
                "\n          left: 0;\n          top: 0;\n          positon: absolute;\n          width: max-content;\n          padding: ",
                ";\n        ",
              ]
            )),
          theme_1.spacing[4]
        )}
      >
        {content}
      </proxy_1.radix.NavigationMenuContent>
    </proxy_1.radix.NavigationMenuItem>
  );
};
var createMenuLink = function (title) {
  return (
    <proxy_1.radix.NavigationMenuItem>
      <proxy_1.radix.NavigationMenuLink>
        <template_1.$.Link
          ws:style={__spreadArray(
            __spreadArray(
              [],
              (0, styles_1.getButtonStyle)("ghost", "sm"),
              true
            ),
            (0, template_1.css)(
              templateObject_11 ||
                (templateObject_11 = __makeTemplateObject(
                  [
                    "\n              text-decoration-line: none;\n              color: currentColor;\n            ",
                  ],
                  [
                    "\n              text-decoration-line: none;\n              color: currentColor;\n            ",
                  ]
                ))
            ),
            true
          )}
        >
          {new template_1.PlaceholderValue(title)}
        </template_1.$.Link>
      </proxy_1.radix.NavigationMenuLink>
    </proxy_1.radix.NavigationMenuItem>
  );
};
exports.meta = {
  category: "radix",
  description: "A collection of links for navigating websites.",
  order: 2,
  template: (
    <proxy_1.radix.NavigationMenu
      // relative
      // Omiting this: z-10 flex max-w-max flex-1 items-center justify-center
      ws:style={(0, template_1.css)(
        templateObject_12 ||
          (templateObject_12 = __makeTemplateObject(
            [
              "\n        position: relative;\n        max-width: max-content;\n      ",
            ],
            [
              "\n        position: relative;\n        max-width: max-content;\n      ",
            ]
          ))
      )}
    >
      <proxy_1.radix.NavigationMenuList
        ws:style={(0, template_1.css)(
          templateObject_13 ||
            (templateObject_13 = __makeTemplateObject(
              [
                "\n          /* ul defaults in tailwind */\n          padding: 0;\n          margin: 0;\n          /* shadcdn styles */\n          display: flex;\n          flex: 1 1 0;\n          list-style-type: none;\n          align-items: center;\n          justify-content: center;\n          gap: ",
                ";\n        ",
              ],
              [
                "\n          /* ul defaults in tailwind */\n          padding: 0;\n          margin: 0;\n          /* shadcdn styles */\n          display: flex;\n          flex: 1 1 0;\n          list-style-type: none;\n          align-items: center;\n          justify-content: center;\n          gap: ",
                ";\n        ",
              ]
            )),
          theme_1.spacing[1]
        )}
      >
        {createMenuItem("About", aboutMenuContent)}
        {createMenuItem("Components", componentsMenuContent)}
        {createMenuLink("Standalone")}
      </proxy_1.radix.NavigationMenuList>
      <template_1.$.Box
        ws:label="Viewport Container"
        // absolute left-0 top-full flex justify-center
        ws:style={(0, template_1.css)(
          templateObject_14 ||
            (templateObject_14 = __makeTemplateObject(
              [
                "\n          position: absolute;\n          left: 0;\n          top: 100%;\n          display: flex;\n          justify-content: center;\n        ",
              ],
              [
                "\n          position: absolute;\n          left: 0;\n          top: 100%;\n          display: flex;\n          justify-content: center;\n        ",
              ]
            ))
        )}
      >
        <proxy_1.radix.NavigationMenuViewport
          /*
      origin-top-center relative mt-1.5 w-full
      overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg
      h-[var(--radix-navigation-menu-viewport-height)]
      w-[var(--radix-navigation-menu-viewport-width)]
      // anims
      [animation-duration:150ms!important] [transition-duration:150ms!important]
      data-[state=open]:animate-in data-[state=closed]:animate-out
      data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90
    */
          ws:style={(0, template_1.css)(
            templateObject_15 ||
              (templateObject_15 = __makeTemplateObject(
                [
                  "\n            position: relative;\n            margin-top: ",
                  ";\n            overflow: hidden;\n            border-radius: ",
                  ";\n            border: ",
                  " solid ",
                  ";\n            background-color: ",
                  ";\n            color: ",
                  ";\n            box-shadow: ",
                  ";\n            height: var(--radix-navigation-menu-viewport-height);\n            width: var(--radix-navigation-menu-viewport-width);\n          ",
                ],
                [
                  "\n            position: relative;\n            margin-top: ",
                  ";\n            overflow: hidden;\n            border-radius: ",
                  ";\n            border: ",
                  " solid ",
                  ";\n            background-color: ",
                  ";\n            color: ",
                  ";\n            box-shadow: ",
                  ";\n            height: var(--radix-navigation-menu-viewport-height);\n            width: var(--radix-navigation-menu-viewport-width);\n          ",
                ]
              )),
            theme_1.spacing[1.5],
            theme_1.borderRadius.md,
            theme_1.borderWidth.DEFAULT,
            theme_1.colors.border,
            theme_1.colors.popover,
            theme_1.colors.popoverForeground,
            theme_1.boxShadow.lg
          )}
        />
      </template_1.$.Box>
    </proxy_1.radix.NavigationMenu>
  ),
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15;
