"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ErrorBNFNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ErrorBNFNode, ruleName, childNodes); }
}
