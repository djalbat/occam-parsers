"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import EndOfLineBNFNode from "../../node/terminal/endOfLine";

const { END_OF_LINE } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(nodes, state, callback) {
    let parsed;

    let endOfLineBNFNode = null;
    
    const savedIndex = state.getSavedIndex(),
		      nextSignificantToken = state.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

      if (significantTokenEndOfLineToken) {
        endOfLineBNFNode = EndOfLineBNFNode.fromSignificantToken(significantToken);
      }
    }

    parsed = (endOfLineBNFNode !== null);

    if (parsed) {
      nodes.push(endOfLineBNFNode);

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
    const string = END_OF_LINE; ///

    return string;
  }

  clone() { return new EndOfLinePart(); }
}
