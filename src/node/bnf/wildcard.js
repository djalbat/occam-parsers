"use strict";

import WildcardPart from "../../part/terminal/wildcard";
import NonTerminalNode from "../../node/nonTerminal";

export default class WildcardBNFNode extends NonTerminalNode {
  generatePart(continuatino) {
    const wildcardPart = WildcardPart.fromNothing();

    return wildcardPart;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(WildcardBNFNode, ruleName, childNodes, precedence, opacity); }
}
