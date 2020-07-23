"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(context) {
    let terminalNode = null;
    
    const nextSignificantToken = context.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }
    
    return terminalNode;
  }

  asString() {
    const string = wildcard;  ///

    return string;
  }

  clone() { return super.clone(WildcardPart); }
}
