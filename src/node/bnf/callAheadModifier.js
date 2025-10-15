"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class CallAheadModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(CallAheadModifierBNFNode, ruleName, childNodes, opacity, precedence); }
}
