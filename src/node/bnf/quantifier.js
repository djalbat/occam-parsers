"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class QuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(QuantifierBNFNode, ruleName, childNodes, ambiguous); }
}
