'use strict';

const RuleNamePart = require('../part/nonTerminal/ruleName'),
      arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { first } = arrayUtilities;

class RuleNameNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const ruleName = this.getRuleName(),
          ruleNamePart = new RuleNamePart(ruleName);

    return ruleNamePart;
  }

  getRuleName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///
    
    return ruleName;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes); }
}

module.exports = RuleNameNode;
