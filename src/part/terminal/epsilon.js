"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import EpsilonBNFNode from "../../node/terminal/epsilon";

const { epsilon } = specialSymbols;

export default class EpsilonPart extends TerminalPart {
  parse(nodes, state, callback, callAhead) {
    let parsed;

    const savedIndex = state.getSavedIndex(),
          epsilonBNFNode = EpsilonBNFNode.fromNothing();

    parsed = (epsilonBNFNode !== null);

    if (parsed) {
      nodes.push(epsilonBNFNode);

      parsed = callback();

      if (parsed) {
        if (callAhead !== null) {
          parsed = callAhead();
        }
      }

      if (!parsed) {
        nodes.pop();
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
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
