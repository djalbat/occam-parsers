"use strict";

import { arrayUtilities } from "necessary";

import { partsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, frame, context) {
  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  context = partsContext(parts, parsePartsContinually, context);  ///

  const partFrame = context.recover(part);

  frame = (partFrame !== null) ?
            frame.merge(partFrame) :
              part.parse(frame, context);

  if (frame !== null) {
    const partsLength = parts.length;

    if (partsLength > 0) {
      frame = parseParts(parts, frame, context);
    }
  }

  if (frame !== null) {
    context.commit();
  }

  return frame;
}

export function parsePartsContinually(parts, frame, context) {
  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  context = partsContext(parts, parsePartsContinually, context);

  frame = part.parse(frame, context);

  if (frame !== null) {
    context.commit();
  }

  return frame;
}
