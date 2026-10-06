"use strict";

import { arrayUtilities } from "necessary";

import { isValid } from "./frame";
import { partsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parsePartsContinually(parts, frame, state, forward, back) {
  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  context = partsContext(parts, parsePartsContinually, context);

  frame = part.parse(frame, context);

  const frameValid = isValid(frame);

  if (frameValid) {
    context.commit();
  }

  return frame;
}

export function parsePartsRepeatedly(parts, frame, state, forward, back) {
  const length = parts.length;

  let success = true;

  for (let index = 0; index < length; index++) {
    const part = parts[index];

    part.parse(frame, state, (partFrame, partState) => {
      frame = partFrame;  ///

      state = partState;  ///
    }, () => {
      success = false;
    });

    if (!success) {
      break;
    }
  }

  if (!success) {
    return back();
  }

  return forward(frame, state, back);
}
