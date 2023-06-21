"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ErrorBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ErrorBNFNode, ruleName, childNodes, precedence); }
}
