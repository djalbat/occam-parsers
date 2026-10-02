"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ContinuationModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ContinuationModifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
