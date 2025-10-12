"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsDescriptions = void 0;
var open =
  "Show or hide the content of this component on the canvas. This will not affect the initial state of the component.";
var alignOffset =
  "The offset in pixels from the “start“ or “end“ alignment options.";
var sideOffset = "The distance in pixels between the Content and the Trigger.";
var side =
  "The preferred alignment against the Trigger. May change when collisions occur.";
exports.propsDescriptions = {
  Dialog: {
    open: open,
  },
  Sheet: {
    open: open,
  },
  Collapsible: {
    open: open,
  },
  Popover: {
    open: open,
  },
  PopoverContent: {
    alignOffset: alignOffset,
    sideOffset: sideOffset,
    side: side,
  },
  Tooltip: {
    open: open,
    delayDuration:
      "The delay before the Tooltip shows after the Trigger is hovered, in milliseconds. If no value is specified, the default is 700ms",
    disableHoverableContent:
      "When toggled, prevents the Tooltip content from showing when the Trigger is hovered.",
  },
  TooltipContent: {
    alignOffset: alignOffset,
    sideOffset: sideOffset,
    side: side,
  },
};
