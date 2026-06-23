"use strict";

import { emptyFrame } from "../frame";
import { continuationPartContext } from "../utilities/context";

export function parsePartContinually(part, count, strict, frame, context) {
  const parsePart = parsePartContinually; ///

  continuationPartContext((context) => {
    frame = part.parse(frame, context);

    if (frame === null) {
      const initial = (count === 0);

      if (!strict || !initial) {
        frame = context.continue(frame);

        if (frame === null) {
          frame = emptyFrame;
        }
      }
    }
  }, part, count, parsePart, context);

  return frame;
}
