"use strict";

import { parseParts } from "./utilities/parse";
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

  parse(childNodes, state, callback) {
    let parsed;

    state.setPrecedence(this.precedence);

    const nodes = childNodes, ///
          savedIndex = state.getSavedIndex();

    parsed = parseParts(this.parts, nodes, state, callback);

    if (parsed) {
      const childNodesLength = childNodes.length;

      if (childNodesLength === 0) {
        parsed = false;
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

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
