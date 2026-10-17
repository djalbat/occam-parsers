"use strict";

import Frame from "../../frame";
import NonTerminalPart from "../../part/nonTerminal";

import { isolatedPrecedence } from "../../precedence";
import { IsolatedPartPartType } from "../../partTypes";

export default class IsolatedPartPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  isConsuming(ruleMap, visitedRules = [], checkForCutParts = false) { return this.part.isConsuming(ruleMap, visitedRules, checkForCutParts); }

  parse(frame, state, forward, back) {
    return this.part.parse(frame, state, (frame, state, back) => {
      frame = this.compose(frame);

      return forward(frame, state, back);
    }, back);
  }

  compose(frame) {
    const childNodes = frame.getChildNodes(),
          precedence = isolatedPrecedence;

    frame = Frame.fromChildNodesAndPrecedence(childNodes, precedence);

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `( ${partString} )`;

    return string;
  }

  static fromPart(part) {
    const type = IsolatedPartPartType,
          isolatedPartPart = new IsolatedPartPart(type, part);

    return isolatedPartPart;
  }
}
