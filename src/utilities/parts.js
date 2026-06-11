"use strict";

import { arrayUtilities } from "necessary";

import { decreasingPartsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, context) {
  let parsed;

  const firstPart = first(parts),
        part = firstPart, ///
        result = context.recover(part);

  if (result !== null) {
    const { state, childNodes } = result;

    context.commit(state, childNodes);

    parsed = true;
  } else {
    const tailParts = tail(parts);

    parts = tailParts;  ///

    decreasingPartsContext((context) => {
      parsed = part.parse(context);

      if (parsed) {
        const callAhead = context.isCallAhead();

        if (!callAhead) {
          const partsLength = parts.length;

          parsed = (partsLength > 0) ?
                     parseParts(parts, context) :
                       true;
        }
      }

      if (parsed) {
        context.commit();
      }
    }, parts, parseParts, context);
  }

  return parsed;
}
