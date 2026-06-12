"use strict";

import { repeatedPartContext } from "../utilities/context";

export function parsePart(part, count, strict, context) {
  if (context === undefined) {
    context = strict;

    strict = false;
  }

  let parsed;

  repeatedPartContext((context) => {
    parsed = part.parse(context);

    if (!parsed) {
      const initial = (count === 0);

      if (!strict || !initial) {
        parsed = context.callAhead();
      }
    }

    if (parsed) {
      context.commit();
    }
  }, part, count, parsePart, context);

  return parsed;
}
