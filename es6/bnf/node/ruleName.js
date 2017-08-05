'use strict';

const necessary = require('necessary');

const RuleNamePart = require('../part/ruleName'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { array } = necessary;

class RuleNameNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const ruleName = this.getRuleName(),
          ruleNamePart = new RuleNamePart(ruleName, noWhitespace);

    return ruleNamePart;
  }

  getRuleName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = array.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///
    
    return ruleName;
  }
  
  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(RuleNameNode, nodes, ruleName); }
}

module.exports = RuleNameNode;
