"use strict";

const NonTerminalNode = require("../../common/node/nonTerminal");

class ErrorNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ErrorNode, ruleName, childNodes); }
}

module.exports = ErrorNode;
