"use strict";

import { EMPTY_STRING } from "./constants";

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

  asString() {
    let string;

    const partString = this.part.asString();

    string = partString;  ///

    if (this.precedence !== null) {
      const precedence = (this.precedence === Infinity) ?
                           EMPTY_STRING :
                             this.precedence;

      string = `${string} (${precedence})`;
    }

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
