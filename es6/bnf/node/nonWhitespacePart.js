'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class NonWhitespacePartNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NonWhitespacePartNode, ruleName, childNodes); }
}

module.exports = NonWhitespacePartNode;
