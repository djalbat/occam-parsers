"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ZerorOrMoreQuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ZerorOrMoreQuantifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
