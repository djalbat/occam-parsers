"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OptionalQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(OptionalQuantifierBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
