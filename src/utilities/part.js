"use strict";

import { continuationPartContext } from "../utilities/context";

export function parsePartContinually(part, count, strict, frame, context) {
  if (context === undefined) {
    context = frame;  ///

    frame = strict; ///

    strict = false;
  }

  const parsePart = parsePartContinually; ///

  continuationPartContext((context) => {
    frame = part.parse(context);

    if (frame === null) {
      const initial = (count === 0);

      if (!strict || !initial) {
        frame = context.continue(frame);
      }
    }
  }, part, count, parsePart, context);

  return frame;
}
