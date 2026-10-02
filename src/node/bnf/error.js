"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ErrorBNFNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ErrorBNFNode, ruleName, childNodes, precedence, opacity); }
}
