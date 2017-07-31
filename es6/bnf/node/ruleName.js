'use strict';

const arrayUtil = require('../../util/array'),
      RuleNamePart = require('../part/ruleName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class RuleNameNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const ruleName = this.getRuleName(),
          ruleNamePart = new RuleNamePart(ruleName, noWhitespace);

    return ruleNamePart;
  }

  getRuleName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///
    
    return ruleName;
  }
  
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(RuleNameNode, nodes, ruleName); }
}

module.exports = RuleNameNode;
