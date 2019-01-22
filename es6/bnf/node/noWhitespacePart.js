'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class NoWhitespacePartNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NoWhitespacePartNode, ruleName, childNodes); }
}

module.exports = NoWhitespacePartNode;
