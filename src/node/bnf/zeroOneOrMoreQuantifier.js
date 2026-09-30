"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ZerorOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ZerorOrMoreQuantifierBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
