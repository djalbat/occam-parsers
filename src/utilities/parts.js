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
    const contiunationRecord = context.recover(part);

    parsed = (contiunationRecord !== null) ?
               contiunationRecord.apply(context) :
                 part.parse(context);

    if (parsed) {
      const partsLength = parts.length;

      parsed = (partsLength > 0) ?
                 parseParts(parts, context) :
                   true;
    }

    if (parsed) {
      parsed = context.commit();
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
  }, parts, parsePartsContinually, context);

  return parsed;
}
