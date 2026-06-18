"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ContinuationModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ContinuationModifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
