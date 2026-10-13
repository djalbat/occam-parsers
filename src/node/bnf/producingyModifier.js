"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ProducingModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ProducingModifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
