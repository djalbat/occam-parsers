"use strict";

import { arrayUtilities } from "necessary";

import { partsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, context) {
  let parsed;

  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  partsContext((context) => {
    const callAheadRecord = context.recover(part);

    parsed = (callAheadRecord !== null) ?
               callAheadRecord.apply(context) :
                 part.parse(context);

    if (parsed) {
      const partsLength = parts.length;

      parsed = (partsLength > 0) ?
                 parseParts(parts, context) :
                   true;
    }

    if (parsed) {
      context.commit();
    }
  }, parts, parsePartsContinually, context);

  return parsed;
}

export function parsePartsContinually(parts, context) {
  let parsed;

  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  partsContext((context) => {
    parsed = part.parse(context);

    if (parsed) {
      context.commit();
    }
  }, parts, parsePartsContinually, context);

  return parsed;
}
