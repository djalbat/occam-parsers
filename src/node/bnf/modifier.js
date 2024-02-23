"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNode, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ModifierBNFNode, ruleName, childNode, ambiguous); }
}
