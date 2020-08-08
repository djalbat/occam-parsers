"use strict";

import { specialSymbols } from "occam-lexers";

import TerminalPart from "../../part/terminal";
import TerminalNode from "../../../common/node/terminal";

const { wildcard } = specialSymbols;

export default class WildcardPart extends TerminalPart {
  parse(nodes, context, callback) {
    let terminalNode = null;
    
    const savedIndex = context.getSavedIndex(),
		      nextSignificantToken = context.getNextSignificantToken(),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      terminalNode = TerminalNode.fromSignificantToken(significantToken);
    }

    nodes = (terminalNode === null) ?
              null :
                [ ...nodes, terminalNode ];

    if (nodes === null) {
      context.backtrack(savedIndex);
    }

    return nodes;
  }

  asString() {
    const string = wildcard;  ///

    return string;
  }

  clone() { return super.clone(WildcardPart); }
}
