"use strict";

import Frame from "./frame";

import { emptyFrame } from "./frame";
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

  isConsuming(ruleMap, visitedRules = []) { return this.part.isConsuming(ruleMap, visitedRules); }

  parse(frame, state, forward, back) {
    const savedFrame = frame; ///

    return this.part.parse(emptyFrame, state, (frame, state, back) => {
      frame = this.compose(savedFrame, frame);

      return forward(frame, state, back);
    }, back);
  }

  compose(frame, partFrame) {
    frame = frame.merge(partFrame);

    let precedence;

    const childNodes = frame.getChildNodes();

    precedence = frame.getPrecedence();

    precedence = precedence || this.precedence; ///

    frame = Frame.fromChildNodesAndPrecedence(childNodes, precedence);

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          precedenceString = (this.precedence !== null) ?
                                this.precedence.asString() :
                                  EMPTY_STRING,
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
