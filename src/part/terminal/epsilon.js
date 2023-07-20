"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import EpsilonBNFNode from "../../node/terminal/epsilon";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(nodes, state, callback, callAhead) {
    let parsed;

    const epsilonBNFNode = EpsilonBNFNode.fromNothing();

    parsed = (epsilonBNFNode !== null);

    if (parsed) {
      nodes.push(epsilonBNFNode);

      if (parsed) {
        if (callAhead !== null) {
          parsed = callAhead();
        }
      }
    }

    return parsed;
  }

  asString() {
    const string = epsilon; ///

    return string;
  }

  static fromNothing() {
    const epsilonPart = new EpsilonPart();

    return epsilonPart;
  }
}
