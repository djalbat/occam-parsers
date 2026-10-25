"use strict";

import NonTerminalPart from "../../part/nonTerminal";

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
    frame = frame.isolate();  ///

    return this.part.parse(frame, state, forward, back);
  }

  asString() {
    const partString = this.part.asString(),
          string = `(${partString})`;

    return string;
  }

  static fromPart(part) {
    const type = IsolatedPartPartType,
          isolatedPartPart = new IsolatedPartPart(type, part);

    return isolatedPartPart;
  }
}
