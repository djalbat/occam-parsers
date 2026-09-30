"use strict";

import WildcardPart from "../../part/terminal/wildcard";
import NonTerminalNode from "../../node/nonTerminal";

export default class WildcardBNFNode extends NonTerminalNode {
  generatePart(continuatino) {
    const wildcardPart = WildcardPart.fromNothing();

    return wildcardPart;
  }

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(WildcardBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
