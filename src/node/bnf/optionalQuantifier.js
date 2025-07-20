"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OptionalQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(OptionalQuantifierBNFNode, ruleName, childNodes, opacity); }
}
