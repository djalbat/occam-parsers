"use strict";

import TerminalPart from "../../part/terminal";
import EpsilonBNFNode from "../../node/terminal/endOfLine";

import { EPSILON } from "../../constants";

export default class EpsilonPart extends TerminalPart {
  parse(nodes, state, callback) {
    let parsed;

    const savedIndex = state.getSavedIndex(),
          epsilonBNFNode = EpsilonBNFNode.fromNothing();

    parsed = (epsilonBNFNode !== null);

    if (parsed) {
      nodes.push(epsilonBNFNode);

      if (callback !== null) {
        parsed = callback();

        if (!parsed) {
          nodes.pop();
        }
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const string = EPSILON; ///

    return string;
  }

  clone() { return new EpsilonPart(); }
}
