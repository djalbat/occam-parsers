"use strict";

import BacktickPart from "../../part/terminal/backtick";
import NonTerminalNode from "../../node/nonTerminal";

export default class BacktickBNFNode extends NonTerminalNode {
  generatePart(continuatino) {
    const backtickPart = BacktickPart.fromNothing();

    return backtickPart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(BacktickBNFNode, ruleName, childNodes, opacity, precedence); }
}
