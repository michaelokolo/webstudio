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
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
var svg_1 = require("@webstudio-is/icons/svg");
var template_1 = require("@webstudio-is/template");
var proxy_1 = require("./shared/proxy");
var theme_1 = require("./shared/theme");
var styles_1 = require("./shared/styles");
/**
 * Styles source without animations:
 * https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/dialog.tsx
 *
 * Attributions
 * MIT License
 * Copyright (c) 2023 shadcn
 **/
exports.meta = {
  category: "radix",
  description:
    "Displays content with an overlay that covers the window, triggered by a button. Clicking the overlay will close the dialog.",
  order: 4,
  template: (
    <proxy_1.radix.Dialog>
      <proxy_1.radix.DialogTrigger>
        <template_1.$.Button ws:style={(0, styles_1.getButtonStyle)("outline")}>
          {new template_1.PlaceholderValue("Button")}
        </template_1.$.Button>
      </proxy_1.radix.DialogTrigger>
      <proxy_1.radix.DialogOverlay
        /**
         * fixed inset-0 z-50 bg-background/80 backdrop-blur-sm
         * flex
         **/
        ws:style={(0, template_1.css)(
          templateObject_1 ||
            (templateObject_1 = __makeTemplateObject(
              [
                "\n          position: fixed;\n          inset: 0;\n          z-index: ",
                ";\n          background-color: rgb(255 255 255 / 0.8);\n          backdrop-filter: ",
                ";\n          /* To allow positioning Content */\n          display: flex;\n          overflow: auto;\n        ",
              ],
              [
                "\n          position: fixed;\n          inset: 0;\n          z-index: ",
                ";\n          background-color: rgb(255 255 255 / 0.8);\n          backdrop-filter: ",
                ";\n          /* To allow positioning Content */\n          display: flex;\n          overflow: auto;\n        ",
              ]
            )),
          theme_1.zIndex[50],
          theme_1.blur.sm
        )}
      >
        <proxy_1.radix.DialogContent
          /**
           * fixed w-full z-50
           * grid gap-4 max-w-lg
           * m-auto
           * border bg-background p-6 shadow-lg
           **/
          ws:style={(0, template_1.css)(
            templateObject_2 ||
              (templateObject_2 = __makeTemplateObject(
                [
                  "\n            width: ",
                  ";\n            z-index: ",
                  ";\n            display: flex;\n            flex-direction: column;\n            gap: ",
                  ";\n            margin: auto;\n            max-width: ",
                  ";\n            border: ",
                  " solid ",
                  ";\n            background-color: ",
                  ";\n            padding: ",
                  ";\n            box-shadow: ",
                  ";\n            position: relative;\n          ",
                ],
                [
                  "\n            width: ",
                  ";\n            z-index: ",
                  ";\n            display: flex;\n            flex-direction: column;\n            gap: ",
                  ";\n            margin: auto;\n            max-width: ",
                  ";\n            border: ",
                  " solid ",
                  ";\n            background-color: ",
                  ";\n            padding: ",
                  ";\n            box-shadow: ",
                  ";\n            position: relative;\n          ",
                ]
              )),
            theme_1.width.full,
            theme_1.zIndex[50],
            theme_1.spacing[4],
            theme_1.maxWidth.lg,
            theme_1.borderWidth.DEFAULT,
            theme_1.colors.border,
            theme_1.colors.background,
            theme_1.spacing[6],
            theme_1.boxShadow.lg
          )}
        >
          <template_1.$.Box
            ws:label="Dialog Header"
            ws:style={(0, template_1.css)(
              templateObject_3 ||
                (templateObject_3 = __makeTemplateObject(
                  [
                    "\n              display: flex;\n              flex-direction: column;\n              gap: ",
                    ";\n            ",
                  ],
                  [
                    "\n              display: flex;\n              flex-direction: column;\n              gap: ",
                    ";\n            ",
                  ]
                )),
              theme_1.spacing[2]
            )}
          >
            <proxy_1.radix.DialogTitle
              /**
               * text-lg leading-none tracking-tight
               **/
              ws:style={(0, template_1.css)(
                templateObject_4 ||
                  (templateObject_4 = __makeTemplateObject(
                    [
                      "\n                font-size: ",
                      ";\n                line-height: ",
                      ";\n                letter-spacing: ",
                      ";\n                margin: 0;\n              ",
                    ],
                    [
                      "\n                font-size: ",
                      ";\n                line-height: ",
                      ";\n                letter-spacing: ",
                      ";\n                margin: 0;\n              ",
                    ]
                  )),
                theme_1.fontSize.lg,
                theme_1.lineHeight.none,
                theme_1.letterSpacing.tight
              )}
            >
              {new template_1.PlaceholderValue("Dialog Title you can edit")}
            </proxy_1.radix.DialogTitle>
            <proxy_1.radix.DialogDescription
              /**
               * text-sm text-muted-foreground
               **/
              ws:style={(0, template_1.css)(
                templateObject_5 ||
                  (templateObject_5 = __makeTemplateObject(
                    [
                      "\n                font-size: ",
                      ";\n                line-height: ",
                      ";\n                color: ",
                      ";\n                margin: 0;\n              ",
                    ],
                    [
                      "\n                font-size: ",
                      ";\n                line-height: ",
                      ";\n                color: ",
                      ";\n                margin: 0;\n              ",
                    ]
                  )),
                theme_1.fontSize.sm,
                theme_1.fontSizeLineHeight.sm,
                theme_1.colors.mutedForeground
              )}
            >
              {
                new template_1.PlaceholderValue(
                  "Dialog description text you can edit"
                )
              }
            </proxy_1.radix.DialogDescription>
          </template_1.$.Box>
          <template_1.$.Text>
            {new template_1.PlaceholderValue("The text you can edit")}
          </template_1.$.Text>
          <proxy_1.radix.DialogClose
            ws:label="Close Button"
            /**
             * absolute right-4 top-4
             * rounded-sm opacity-70
             * ring-offset-background
             * hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
             * flex items-center justify-center h-4 w-4
             **/
            ws:style={(0, template_1.css)(
              templateObject_6 ||
                (templateObject_6 = __makeTemplateObject(
                  [
                    "\n              position: absolute;\n              right: ",
                    ";\n              top: ",
                    ";\n              border-radius: ",
                    ";\n              opacity: ",
                    ";\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              height: ",
                    ";\n              width: ",
                    ";\n              border: 0;\n              background-color: transparent;\n              outline: none;\n              &:hover {\n                opacity: ",
                    ";\n              }\n              &:focus-visible {\n                box-shadow: ",
                    ";\n              }\n            ",
                  ],
                  [
                    "\n              position: absolute;\n              right: ",
                    ";\n              top: ",
                    ";\n              border-radius: ",
                    ";\n              opacity: ",
                    ";\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              height: ",
                    ";\n              width: ",
                    ";\n              border: 0;\n              background-color: transparent;\n              outline: none;\n              &:hover {\n                opacity: ",
                    ";\n              }\n              &:focus-visible {\n                box-shadow: ",
                    ";\n              }\n            ",
                  ]
                )),
              theme_1.spacing[4],
              theme_1.spacing[4],
              theme_1.borderRadius.sm,
              theme_1.opacity[70],
              theme_1.height[4],
              theme_1.height[4],
              theme_1.opacity[100],
              theme_1.boxShadow.ring
            )}
          >
            <template_1.$.HtmlEmbed
              ws:label="Close Icon"
              code={svg_1.LargeXIcon}
            />
          </proxy_1.radix.DialogClose>
        </proxy_1.radix.DialogContent>
      </proxy_1.radix.DialogOverlay>
    </proxy_1.radix.Dialog>
  ),
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;
