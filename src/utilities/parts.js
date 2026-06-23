"use strict";

import { arrayUtilities } from "necessary";

import { partsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, frame, context) {
  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  partsContext((context) => {
    frame = context.recover(part) || part.parse(frame, context);

    if (frame !== null) {
      const partsLength = parts.length;

      if (partsLength > 0) {
        frame = parseParts(parts, frame, context);
      }
    }

    if (frame !== null) {
      frame = context.commit(frame);
    }
  }, parts, parsePartsContinually, context);

  return frame;
}

export function parsePartsContinually(parts, frame, context) {
  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  partsContext((context) => {
    frame = part.parse(frame, context);

    if (frame !== null) {
      frame = context.commit(frame);
    }
  }, parts, parsePartsContinually, context);

  return frame;
}
