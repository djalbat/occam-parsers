"use strict";

import { arrayUtilities } from "necessary";

import { partsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, frame, context) {
  const contexts = [];

  let partsLength = parts.length;

  while (partsLength > 0) {
    const firstPart = first(parts),
          tailParts = tail(parts),
          part = firstPart; ///

    parts = tailParts;  ///

    context = partsContext(parts, parsePartsContinually, context);  ///

    contexts.push(context);

    const partFrame = context.recover(part);

    frame = (partFrame !== null) ?
              frame.merge(partFrame) :
                part.parse(frame, context);

    if (frame === null) {
      break;
    }

    partsLength = parts.length;
  }

  if (frame !== null) {
    context = contexts.pop() || null;

    while (context !== null) {
      context.commit();

      context = contexts.pop() || null;
    }
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
