"use strict";

import { emptyFrame } from "../frame";
import { isValid, isInvalid } from "./frame";
import { continuationPartContext } from "../utilities/context";

export function parsePartContinually(part, count, limit, strict, frame, context) {
  context = continuationPartContext(part, count, limit, parsePartContinually, context); ///

  const savedFrame = frame; ///

  frame = (count < limit) ?
            part.parse(frame, context) :
              null;

  const frameInvalid = isInvalid(frame);

  if (frameInvalid) {
    const initial = (count === 0);

    if (false) {
      ///
    } else if (strict && initial) {
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

export function parsePartRepeatedly(part, limit, strict, frame, context) {
  let partFrame;

  partFrame = emptyFrame; ///

  let count = 0;

  while (count < limit) {
    const savedFrame = partFrame; ///

    partFrame = part.parse(partFrame, context);

    const partFrameInvalid = isInvalid(partFrame);

    if (partFrameInvalid) {
      const initial = (count === 0);

      if (false) {
        ///
      } else if (strict && initial) {
        partFrame = null;
      } else {
        partFrame = savedFrame; ///
      }

      break;
    }

    count++;
  }

  const partFrameValid = isValid(partFrame);

  frame = partFrameValid ?
            context.compose(frame, partFrame) :
              null;

  return frame;
}
