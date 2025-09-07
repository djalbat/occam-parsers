"use strict";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../node/terminal";

export default class SignificantTokenTypePart extends TerminalPart {
  constructor(significantTokenType) {
    super();
    
    this.significantTokenType = significantTokenType;
  }

  getSignificantTokenType() {
    return this.significantTokenType;
  }

  parse(nodes, state, callback, callAhead) {
    let parsed;

    let terminalNode = null;
    
    const savedIndex = state.getSavedIndex(),
          nextSignificantToken = state.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const significantTokenType = significantToken.getType();

      if (significantTokenType === this.significantTokenType) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    parsed = (terminalNode !== null);

    if (parsed) {
      nodes.push(terminalNode);

      if (parsed) {
        if (callAhead !== null) {
          parsed = callAhead();
        }
      }
    }

    if (!parsed) {
      state.backtrack(savedIndex);
    }

    return parsed;
  }

  asString() {
    const string = `[${this.significantTokenType}]`;
    
    return string;
  }

  static fromSignificantTokenType(significantTokenType) {
    const significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);

    return significantTokenTypePart;
  }
}
