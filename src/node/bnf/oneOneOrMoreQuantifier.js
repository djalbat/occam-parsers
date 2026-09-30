"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class OneOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(OneOrMoreQuantifierBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
