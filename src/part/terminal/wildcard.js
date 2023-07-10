"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(nodes, state, callback, callAhead) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = state.getSavedIndex(),
		      nextSignificantToken = state.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

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
    const string = wildcard;  ///

    return string;
  }

  static fromNothing() {
    const wildcardPart = new WildcardPart();

    return wildcardPart;
  }
}
