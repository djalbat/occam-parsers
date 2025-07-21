"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class QuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(QuantifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
