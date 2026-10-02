"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class QuantifierBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(QuantifierBNFNode, ruleName, childNodes, precedence, opacity); }
}
