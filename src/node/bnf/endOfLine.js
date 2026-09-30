"use strict";

import EndOfLinePart from "../../part/terminal/endOfLine";
import NonTerminalNode from "../../node/nonTerminal";

export default class EndOfLineBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const endOfLinePart = EndOfLinePart.fromNothing();

    return endOfLinePart;
  }

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(EndOfLineBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
