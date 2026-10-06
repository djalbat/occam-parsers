"use strict";

import { characters } from "necessary";

import Frame from "./frame";

import { emptyFrame } from "./frame";
import { TRANSPARENT_PRECEDENCE } from "./constants";

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

  parse(frame, state, forward, back) {
    return this.part.parse(emptyFrame, state, (partFrame, partState) => {
      state = partState;  ///

      frame = this.compose(frame, partFrame);

      return forward(frame, state, back);
    }, back);
  }

  compose(frame, partFrame = null) {
    frame = frame.merge(partFrame);

    let precedence;

    const childNodes = frame.getChildNodes();

    precedence = frame.getPrecedence();

    precedence = precedence || this.precedence; ///

    frame = Frame.fromChildNodesAndPrecedence(childNodes, precedence);

    return frame;
  }

  asString() {
    let string;

    const partString = this.part.asString();

    string = partString;  ///

    if (this.precedence !== null) {
      const precedence = (this.precedence === TRANSPARENT_PRECEDENCE) ?
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
