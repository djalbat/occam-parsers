"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ErrorBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ErrorBNFNode, ruleName, childNodes, opacity, precedence); }
}
