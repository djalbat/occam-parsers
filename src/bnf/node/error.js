"use strict";

import NonTerminalNode from "../../node/nonTerminal";

export default class ErrorNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ErrorNode, ruleName, childNodes); }
}
