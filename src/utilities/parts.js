"use strict";

import { arrayUtilities } from "necessary";

import { emptyFrame } from "../frame";
import { partsContext } from "../utilities/context";
import { isValid, isInvalid } from "./frame";

const { first, tail } = arrayUtilities;

export function parsePartsContinually(parts, frame, context) {
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

export function parsePartsRepeatedly(parts, frame, context) {
  const partsFrame = parseParts(parts, emptyFrame, context),
        partsFrameValid = isValid(partsFrame);

  frame = partsFrameValid ?
            context.compose(frame, partsFrame) :
              null;

  return frame;
}

function parseParts(parts, frame, context) {
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

    const frameInvalid = isInvalid(frame);

    if (frameInvalid) {
      break;
    }

    partsLength = parts.length;
  }

  const frameValid = isValid(frame);

  if (frameValid) {
    context = contexts.pop() || null;

    while (context !== null) {
      context.commit();

      context = contexts.pop() || null;
    }
  }

  return frame;
}
