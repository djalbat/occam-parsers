"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class CallAheadModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndCallAhead(ruleName, childNode, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndCallAhead(CallAheadModifierBNFNode, ruleName, childNode, opacity); }
}
