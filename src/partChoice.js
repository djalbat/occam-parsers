"use strict";

import { parsePart } from "./utilities/parse";
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

  parse(nodes, state, callback) {
    let parsed;

    parsed = parsePart(this.part, nodes, state, callback);

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
