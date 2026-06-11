"use strict";

import { repeatedPartContext } from "../utilities/context";

export function parsePart(part, context) {
  let parsed;

  repeatedPartContext((context) => {
    parsed = part.parse(context);

    if (parsed) {
      context.commit();
    }
  }, part, parsePart, context);

  return parsed;
}
