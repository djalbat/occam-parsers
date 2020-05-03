"use strict";

import EndOfLinePart from "../part/terminal/endOfLine";
import NonTerminalNode from "../../common/node/nonTerminal";

class EndOfLineNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const endOfLinePart = new EndOfLinePart();

    return endOfLinePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EndOfLineNode, ruleName, childNodes); }
}

module.exports = EndOfLineNode;
