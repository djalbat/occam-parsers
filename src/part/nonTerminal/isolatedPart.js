"use strict";

import NonTerminalPart from "../../part/nonTerminal";

import { ISOLATED_PRECEDENCE } from "../../constants";
import { IsolatedPartPartType } from "../../partTypes";

export default class IsolatedPartPart extends NonTerminalPart {
  constructor(type, branching, part) {
    super(type, branching);

    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(frame, state, forward, back) {
    return this.part.parse(frame, state, (frame, state, back) => {
      frame = this.compose(frame);

      return forward(frame, state, back);
    }, back);
  }

  comopse(frame) {
    const childNodes = frame.getChildNodes(),
          precedence = ISOLATED_PRECEDENCE;

    frame = frame.fromChildNodesAndPrecedence(childNodes, precedence);

    return frame;
  }

  asString() {
    const partString = this.part.asString(),
          string = `( ${partString} )`;

    return string;
  }

  static fromPart(part) {
    const type = IsolatedPartPartType,
          branching = false,
          isolatedPartPart = new IsolatedPartPart(type, branching, part);

    return isolatedPartPart;
  }
}
