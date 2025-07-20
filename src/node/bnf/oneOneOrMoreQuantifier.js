"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OneOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(OneOrMoreQuantifierBNFNode, ruleName, childNodes, opacity); }
}
