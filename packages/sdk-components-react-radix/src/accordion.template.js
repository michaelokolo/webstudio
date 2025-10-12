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
var template_1 = require("@webstudio-is/template");
var proxy_1 = require("./shared/proxy");
var theme_1 = require("./shared/theme");
var svg_1 = require("@webstudio-is/icons/svg");
var createAccordionItem = function (triggerText, contentText) {
  return (
    <proxy_1.radix.AccordionItem
      // border-b
      ws:style={(0, template_1.css)(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            ["\n        border-bottom: ", " solid ", ";\n      "],
            ["\n        border-bottom: ", " solid ", ";\n      "]
          )),
        theme_1.borderWidth.DEFAULT,
        theme_1.colors.border
      )}
    >
      <proxy_1.radix.AccordionHeader
        // flex
        ws:style={(0, template_1.css)(
          templateObject_2 ||
            (templateObject_2 = __makeTemplateObject(
              ["\n          display: flex;\n        "],
              ["\n          display: flex;\n        "]
            ))
        )}
      >
        <proxy_1.radix.AccordionTrigger
          // flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180
          ws:style={(0, template_1.css)(
            templateObject_3 ||
              (templateObject_3 = __makeTemplateObject(
                [
                  "\n            display: flex;\n            flex: 1 1 0;\n            align-items: center;\n            justify-content: between;\n            padding: ",
                  " 0;\n            font-weight: ",
                  ';\n            --accordion-trigger-icon-transform: 0deg;\n            &:hover {\n              text-decoration-line: underline;\n            }\n            &[data-state="open"] {\n              --accordion-trigger-icon-transform: 180deg;\n            }\n          ',
                ],
                [
                  "\n            display: flex;\n            flex: 1 1 0;\n            align-items: center;\n            justify-content: between;\n            padding: ",
                  " 0;\n            font-weight: ",
                  ';\n            --accordion-trigger-icon-transform: 0deg;\n            &:hover {\n              text-decoration-line: underline;\n            }\n            &[data-state="open"] {\n              --accordion-trigger-icon-transform: 180deg;\n            }\n          ',
                ]
              )),
            theme_1.spacing[4],
            theme_1.weights.medium
          )}
        >
          <template_1.$.Text>
            {new template_1.PlaceholderValue(triggerText)}
          </template_1.$.Text>
          <template_1.$.Box
            ws:label="Icon Container"
            // h-4 w-4 shrink-0 transition-transform duration-200
            ws:style={(0, template_1.css)(
              templateObject_4 ||
                (templateObject_4 = __makeTemplateObject(
                  [
                    "\n              rotate: var(--accordion-trigger-icon-transform);\n              height: ",
                    ";\n              width: ",
                    ";\n              flex-shrink: 0;\n              transition: ",
                    ";\n              transition-duration: 200ms;\n            ",
                  ],
                  [
                    "\n              rotate: var(--accordion-trigger-icon-transform);\n              height: ",
                    ";\n              width: ",
                    ";\n              flex-shrink: 0;\n              transition: ",
                    ";\n              transition-duration: 200ms;\n            ",
                  ]
                )),
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
        </proxy_1.radix.AccordionTrigger>
      </proxy_1.radix.AccordionHeader>
      <proxy_1.radix.AccordionContent
        // overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down
        // pb-4 pt-0
        ws:style={(0, template_1.css)(
          templateObject_5 ||
            (templateObject_5 = __makeTemplateObject(
              [
                "\n          overflow: hidden;\n          font-size: ",
                ";\n          line-height: ",
                ";\n          transition: ",
                ";\n          padding-bottom: ",
                ";\n        ",
              ],
              [
                "\n          overflow: hidden;\n          font-size: ",
                ";\n          line-height: ",
                ";\n          transition: ",
                ";\n          padding-bottom: ",
                ";\n        ",
              ]
            )),
          theme_1.fontSize.sm,
          theme_1.fontSizeLineHeight.sm,
          theme_1.transition.all,
          theme_1.spacing[4]
        )}
      >
        {new template_1.PlaceholderValue(contentText)}
      </proxy_1.radix.AccordionContent>
    </proxy_1.radix.AccordionItem>
  );
};
/**
 * Styles source without animations:
 * https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/accordion.tsx
 *
 * Attributions
 * MIT License
 * Copyright (c) 2023 shadcn
 **/
exports.meta = {
  category: "radix",
  description:
    "A vertically stacked set of interactive headings that each reveal an associated section of content. Clicking on the heading will open the item and close other items.",
  order: 3,
  template: (
    <proxy_1.radix.Accordion collapsible={true} value="0">
      {createAccordionItem(
        "Is it accessible?",
        "Yes. It adheres to the WAI-ARIA design pattern."
      )}
      {createAccordionItem(
        "Is it styled?",
        "Yes. It comes with default styles that matches the other components' aesthetic."
      )}
      {createAccordionItem(
        "Is it animated?",
        "Yes. It's animated by default, but you can disable it if you prefer."
      )}
    </proxy_1.radix.Accordion>
  ),
};
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5;
