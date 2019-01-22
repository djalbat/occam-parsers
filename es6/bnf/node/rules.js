'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class RulesNode extends NonTerminalNode {
  generateRules(Rule) {
    const childNodes = this.getChildNodes(),
          ruleNodes = childNodes,  ///
          rules = ruleNodes.map(function(ruleNode) {
            const rule = ruleNode.generateRule(Rule);
            
            return rule;
          });
    
    return rules;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RulesNode, ruleName, childNodes); }
}

module.exports = RulesNode;
