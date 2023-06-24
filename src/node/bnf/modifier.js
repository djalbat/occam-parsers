"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ModifierBNFNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNode) { return NonTerminalNode.fromRuleNameAndChildNodes(ModifierBNFNode, ruleName, childNode); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ModifierBNFNode, ruleName, childNodes, precedence); }
}
