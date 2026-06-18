"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ContiunationModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ContiunationModifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
