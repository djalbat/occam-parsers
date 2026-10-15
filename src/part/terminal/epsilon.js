"use strict";

import { specialSymbols } from "occam-lexers";

import Frame from "../../frame";
import EpsilonNode from "../../node/terminal/epsilon";
import TerminalPart from "../../part/terminal";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  isEpsilonPart() {
    const epsilonPart = true;

    return epsilonPart;
  }

  isConsuming(ruleMap, visitedRules = [], checkForCutParts = false) {
    const consuming = false;

    return consuming;
  }

  parse(frame, state, forward, back) {
    const epsilonNode = EpsilonNode.fromNothing(),
          childNode = epsilonNode,
          partFrame = Frame.fromChildNode(childNode);

    frame = this.compose(frame, partFrame);

    return forward(frame, state, back);
  }

  asString() {
    const string = `${epsilon}`;

    return string;
  }

  static fromNothing() {
    const epsilonPart = new EpsilonPart();

    return epsilonPart;
  }
}
