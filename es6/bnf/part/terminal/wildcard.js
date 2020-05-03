"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

const { wildcard } = specialSymbols;

class WildcardPart extends TerminalPart {
  parse(configuration) {
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      nextSignificantToken = configuration.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }
    
    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }

  asString() {
    const string = wildcard;  ///

    return string;
  }

  clone() { return super.clone(WildcardPart); }
}

module.exports = WildcardPart;
