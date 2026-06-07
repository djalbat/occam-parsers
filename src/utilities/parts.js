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

  const parse = parseParts; ///

  partsContext((context) => {
    parsed = part.parse(context);

    if (parsed) {
      context.commit();
    }
  }, parts, parse, context);

  return parsed;
}
