"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class BranchingModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(BranchingModifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
