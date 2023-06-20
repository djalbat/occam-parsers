"use strict";

import { parseParts } from "./utilities/lookAhead";
import { EMPTY_STRING } from "./constants";

export default class Definition {
  constructor(parts, precedence) {
    this.parts = parts;
    this.precedence = precedence;
  }

  getParts() {
    return this.parts;
  }

  getPrecedence() {
    return this.precedence;
  }

  isLowerPrecedence(precedence) {
    let lowerPrecedence = false;

    if (precedence !== null) {
      if (this.precedence !== null) {
        lowerPrecedence = (this.precedence < precedence);
      }
    }

    return lowerPrecedence;
  }

  parse(nodes, state, callback, precedence) {
    let parsed;

    const index = 0;

    parsed = parseParts(this.parts, nodes, index, state, callback, this.precedence);

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

  static fromParts(Class, parts) {
    if (parts === undefined) {
      parts = Class;  ///

      Class = Definition; ///
    }

    const precedence = null,
          definition = new Class(parts, precedence);

    return definition;
  }

  static fromPartsAndPrecedence(Class, parts, precedence) {
    if (precedence === undefined) {
      precedence = parts; ///

      parts = Class;  ///

      Class = Definition; ///
    }

    const definition = new Class(parts, precedence);

    return definition;
  }
}
