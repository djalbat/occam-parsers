"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../node/terminal/endOfLine";

const { END_OF_LINE } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(nodes, state, callback, callAhead) {
    let parsed;

    let endOfLineNode = null;
    
    const savedIndex = state.getSavedIndex(),
		      nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

      if (significantTokenEndOfLineToken) {
        endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken);
      }
    }

    parsed = (endOfLineNode !== null);

    if (parsed) {
      nodes.push(endOfLineNode);

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
    const string = END_OF_LINE; ///

    return string;
  }

  static fromNothing() {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }
}
