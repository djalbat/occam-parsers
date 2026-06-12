"use strict";

import { arrayUtilities } from "necessary";

import { decreasingPartsContext } from "../utilities/context";

const { first, tail } = arrayUtilities;

export function parseParts(parts, context) {
  let parsed;

  const firstPart = first(parts),
        tailParts = tail(parts),
        part = firstPart; ///

  parts = tailParts;  ///

  decreasingPartsContext((context) => {
    const result = context.recover(part);

    if (result !== null) {
      context.apply(result);

      parsed = true;
    } else {
      parsed = part.parse(context);
    }

    if (parsed) {
      const callingAhead = context.isCallingAhead();

      if (!callingAhead) {
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

  return parsed;
}
