"use strict";

import { arrayUtilities } from "necessary";

import Frame from "../frame";

import { partsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, frame, context) {
  if (context === undefined) {
    context = frame;  ///

    frame = Frame.fromNothing();
  }

  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  const parsePartsContinually = null;

  partsContext((context) => {
    const partFrame = context.recover(part) || part.parse(context);

    if (partFrame !== null) {
      frame = frame.merge(partFrame); ///

      const partsLength = parts.length;

      if (partsLength > 0) {
        frame = parseParts(parts, frame, context);
      }

      if (frame !== null) {
        context.commit(frame);
      }
    } else {
      frame = null;
    }
  }, parts, parsePartsContinually, context);

  return frame;
}

export function parsePartsContinually(parts, frame, context) {
  if (context === undefined) {
    context = frame;  ///

    frame = Frame.fromNothing();
  }

  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  partsContext((context) => {
    const partFrame = part.parse(context);

    if (partFrame !== null) {
      frame = frame.merge(partFrame);
    } else {
      frame = null;
    }
  }, parts, parsePartsContinually, context);

  return frame;
}
