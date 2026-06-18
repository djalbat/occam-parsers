"use strict";

import { continualPartContext } from "../utilities/context";

export function parsePartContinually(part, count, strict, context) {
  if (context === undefined) {
    context = strict;

    strict = false;
  }

  let parsed;

  const parsePart = parsePartContinually; ///

  continualPartContext((context) => {
    parsed = part.parse(context);

    if (!parsed) {
      const initial = (count === 0);

      if (!strict || !initial) {
        parsed = context.continue();
      }
    }
  }, part, count, parsePart, context);

  return parsed;
}
