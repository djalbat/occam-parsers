"use strict";

import WildcardPart from "../part/terminal/wildcard";
import NonTerminalNode from "../../common/node/nonTerminal";

export default class WildcardNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const wildcardPart = new WildcardPart();

    return wildcardPart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(WildcardNode, ruleName, childNodes); }
}
