"use strict";

import EndOfLinePart from "../../part/terminal/endOfLine";
import NonTerminalNode from "../../node/nonTerminal";

export default class EndOfLineBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const endOfLinePart = EndOfLinePart.fromNothing();

    return endOfLinePart;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(EndOfLineBNFNode, ruleName, childNodes, precedence, opacity); }
}
