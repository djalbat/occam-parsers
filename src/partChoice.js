"use strict";

import { characters } from "necessary";
import { partChoiceContext } from "./utilities/context";

const { SPACE_CHARACTER } = characters;

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

  parse(frame, context) {
    const partChoice = this;  ///

    partChoiceContext((context) => {
      frame = this.part.parse(frame, context);

      if (frame !== null) {
        frame = context.commit(frame);
      }
    }, partChoice, context);

    return frame;
  }

  asString() {
    let string;

    const partString = this.part.asString();

    string = partString;  ///

    if (this.precedence !== null) {
      const precedence = (this.precedence === Infinity) ?
                           SPACE_CHARACTER :
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
