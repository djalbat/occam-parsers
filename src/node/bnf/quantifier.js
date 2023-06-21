"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class QuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(QuantifierBNFNode, ruleName, childNodes, precedence); }
}
