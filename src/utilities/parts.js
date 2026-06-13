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
    const result = context.recover(part);

    if (result !== null) {
      context.apply(result);

      parsed = true;
    } else {
      parsed = part.parse(context);
    }

    if (parsed) {
      const partsLength = parts.length;

      parsed = (partsLength > 0) ?
                 parseParts(parts, context) :
                   true;
    }

    if (parsed) {
      context.commit();
    }
  }, parts, parseParts, context);

  return parsed;
}

export function parsePartsContinually(parts, context) {
  let parsed;

  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  const parseParts = parsePartsContinually; ///

  partsContext((context) => {
    const result = context.recover(part);

    if (result !== null) {
      context.apply(result);

      parsed = true;
    } else {
      parsed = part.parse(context);
    }

    if (parsed) {
      context.commit();
    }
  }, parts, parseParts, context);

  return parsed;
}
