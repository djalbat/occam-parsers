"use strict";

import { isValid, isInvalid } from "./frame";
import { continuationPartContext } from "../utilities/context";

export function parsePartContinually(part, count, strict, frame, context) {
  context = continuationPartContext(part, count, parsePartContinually, context); ///

  const savedFrame = frame; ///

  frame = part.parse(frame, context);

  const frameInvalid = isInvalid(frame);

  if (frameInvalid) {
    const initial = (count === 0);

    if (strict && initial) {
      ///
    } else {
      frame = savedFrame; ///

      frame = context.continue(frame);
    }
  }

  const frameValid = isValid(frame);

  if (frameValid) {
    context.commit();
  }

  return frame;
}
