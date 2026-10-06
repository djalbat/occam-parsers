"use strict";

import { isValid, isInvalid } from "./frame";

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

export function parsePartRepeatedly(part, limit, strict, frame, state, forward, back) {
  let count = 0;

  let success = true;

  while (count < limit) {
    part.parse(frame, state, (partFrame, partState) => {
      frame = partFrame;  ///

      state = partState;  ///
    }, () => {
      success = false;
    });

    if (!success) {
      break;
    }

    count++;
  }

  const initial = (count === 0);

  if (strict && initial) {
    return back();
  }

  return forward(frame, state, back);
}
