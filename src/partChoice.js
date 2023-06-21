"use strict";

import { EMPTY_STRING } from "./constants";
import { parsePartOfParts } from "./utilities/lookAhead";

export default class PartChoice {
  constructor(part, precedence) {
    this.part = part;
    this.precedence = precedence;
  }

  getPart() {
    return this.part;
  }

  getPrecedence() {
    return this.precedence;
  }

  parse(nodes, state, callback) {
    let parsed;

    if (this.precedence !== null) {
      state.setPrecedence(this.precedence);
    }

    const parts = [
            this.part
          ],
          index = 0;

    parsed = parsePartOfParts(this.part, parts, nodes, index, state, callback);

    return parsed;
  }

  asString() {
    const partString = this.part.asString(),
          precedenceString = (this.precedence === null) ?
                               EMPTY_STRING :
                                ` (${this.precedence})`,
          string = `${partString}${precedenceString}`;

    return string;
  }

  static fromPart(part) {
    const precedence = null,
          partChoice = new PartChoice(part, precedence);

    return partChoice;
  }

  static fromPartAndPrecedence(part, precedence) {
    const partChoice = new PartChoice(part, precedence);

    return partChoice;
  }
}
