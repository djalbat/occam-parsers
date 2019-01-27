'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class RightRecursivePartNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RightRecursivePartNode, ruleName, childNodes); }
}

module.exports = RightRecursivePartNode;
