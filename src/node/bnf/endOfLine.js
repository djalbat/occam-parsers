"use strict";

import EndOfLinePart from "../../part/terminal/endOfLine";
import NonTerminalNode from "../../node/nonTerminal";

export default class EndOfLineBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const endOfLinePart = EndOfLinePart.fromNothing();

    return endOfLinePart;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(EndOfLineBNFNode, ruleName, precedence, childNodes); }
}
