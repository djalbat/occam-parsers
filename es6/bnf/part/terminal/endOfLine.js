"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import EndOfLineNode from "../../../common/node/terminal/endOfLine";

const { END_OF_LINE } = specialSymbols;

export default class EndOfLinePart extends TerminalPart {
  parse(context, callback) {
    let parsed;

    let endOfLineNode = null;
    
    const savedIndex = context.getSavedIndex(),
		      nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

      if (significantTokenEndOfLineToken) {
        endOfLineNode = EndOfLineNode.fromSignificantToken(significantToken);
      }
    }

    parsed = (endOfLineNode !== null);

    if (parsed) {
      if (callback) {
        parsed = callback();
      }
    }

    if (!parsed) {
      context.backtrack(savedIndex);

      endOfLineNode = null;
    }

    return endOfLineNode;
  }

  asString() {
    const string = END_OF_LINE; ///

    return string;
  }

  clone() { return super.clone(EndOfLinePart); }
}
