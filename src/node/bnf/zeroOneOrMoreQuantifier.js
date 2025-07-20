"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ZerorOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(ZerorOrMoreQuantifierBNFNode, ruleName, childNodes, opacity); }
}
