"use strict";

import WildcardPart from "../../part/terminal/wildcard";
import NonTerminalNode from "../../node/nonTerminal";

export default class WildcardBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const wildcardPart = WildcardPart.fromNothing();

    return wildcardPart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(WildcardBNFNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(WildcardBNFNode, ruleName, childNodes, precedence); }
}
