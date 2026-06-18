"use strict";

import { contiunationPartContext } from "../utilities/context";

export function parsePartContiunationly(part, count, strict, context) {
  if (context === undefined) {
    context = strict;

    strict = false;
  }

  let parsed;

  const parsePart = parsePartContiunationly; ///

  contiunationPartContext((context) => {
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
