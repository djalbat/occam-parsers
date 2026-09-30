"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ContinuationModifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ContinuationModifierBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
