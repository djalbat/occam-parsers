"use strict";

import { parseParts } from "../utilities/lookAhead";
import { EMPTY_STRING } from "../constants";
import { first, allButFirst } from "../utilities/array";

export default class Definition {
  constructor(parts) {
    this.parts = parts;
  }

  getParts() {
    return this.parts;
  }

  getFirstPart() {
    const firstPart = first(this.parts);

    return firstPart;
  }

  getPartsLength() {
    const partsLength = this.parts.length;

    return partsLength;
  }

  getAllButFirstParts() {
    const allButFirstParts = allButFirst(this.parts);

    return allButFirstParts;
  }

  addPart(part) {
    this.parts.push(part);
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
