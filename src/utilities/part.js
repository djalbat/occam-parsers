"use strict";

import { continuationPartContext } from "../utilities/context";

export function parsePartContinually(part, count, strict, frame, context) {
  continuationPartContext((context) => {
    const savedFrame = frame; ///

    frame = part.parse(frame, context);

    if (frame === null) {
      const initial = (count === 0);

      if (strict && initial) {
        ///
      } else {
        frame = savedFrame; ///

        frame = context.continue(frame);
      }
    }

    if (frame !== null) {
      context.commit(frame);
    }
  }, part, count, parsePartContinually, context);

  return frame;
}
