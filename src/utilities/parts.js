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
    const partFrame = context.recover(part),
          partFrameValid = partFrame.isValid();

    frame = partFrameValid ?
              frame.merge(partFrame) :
                part.parse(frame, context);

    let frameValid;

    frameValid = frame.isValid();

    if (frameValid) {
      const partsLength = parts.length;

      if (partsLength > 0) {
        frame = parseParts(parts, frame, context);
      }
    }

    frameValid = frame.isValid();

    if (frameValid) {
      context.commit();
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

    const frameValid = frame.isValid();

    if (frameValid) {
      context.commit();
    }
  }, parts, parsePartsContinually, context);

  return frame;
}
