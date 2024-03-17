"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class LookAheadModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndLookAhead(ruleName, childNode, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndLookAhead(LookAheadModifierBNFNode, ruleName, childNode, opacity); }
}
