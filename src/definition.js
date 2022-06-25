"use strict";

import { parseParts } from "./utilities/lookAhead";
import { EMPTY_STRING } from "./constants";

export default class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  parse(nodes, state, callback) {
    let parsed;

    const index = 0;

    parsed = parseParts(this.parts, nodes, index, state, callback);

    return parsed;
  }

  asString() {
    const partsString = this.parts.reduce((partsString, part) => {
          const partString = part.asString();

          if (partsString === EMPTY_STRING) {
            partsString = partString; ///
          } else {
            partsString = `${partsString} ${partString}`;
          }

          return partsString;
        }, EMPTY_STRING),
        string = partsString; ///

    return string;
  }
}
