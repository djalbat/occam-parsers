"use strict";

import { continuationPartContext } from "../utilities/context";

export function parsePartContinually(part, count, strict, frame, context) {
  continuationPartContext((context) => {
    const savedFrame = frame; ///

    frame = part.parse(frame, context);

    const frameInvalid = frame.isInvalid();

    if (frameInvalid) {
      const initial = (count === 0);

      if (strict && initial) {
        ///
      } else {
        frame = savedFrame; ///

        frame = context.continue(frame);
      }
    }

    const frameValid = frame.isValid();

    if (frameValid) {
      context.commit();
    }
  }, part, count, parsePartContinually, context);

  return frame;
}
