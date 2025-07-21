"use strict";

import WildcardPart from "../../part/terminal/wildcard";
import NonTerminalNode from "../../node/nonTerminal";

export default class WildcardBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const wildcardPart = WildcardPart.fromNothing();

    return wildcardPart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(WildcardBNFNode, ruleName, childNodes, opacity, precedence); }
}
