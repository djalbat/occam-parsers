'use strict';

const ruleNames = require('../ruleNames'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { RuleRuleName } = ruleNames;

class DocumentNode extends NonTerminalNode {
  generateRules(Rule) {
    const childNodes = this.getChildNodes(),
          ruleNodes = childNodes.reduce(function(ruleNodes, childNode) {
            const childNodeNonTerminalNode = childNode.isNonTerminalNode();

            if (childNodeNonTerminalNode) {
              const nonTerminalNode = childNode,  ///
                    ruleName = childNode.getRuleName(),
                    ruleNameRuleRuleName = (ruleName === RuleRuleName),
                    nonTerminalNodeRuleNode = ruleNameRuleRuleName;  ///

              if (nonTerminalNodeRuleNode) {
                const ruleNode = nonTerminalNode; ///

                ruleNodes.push(ruleNode);
              }
            }

            return ruleNodes;
          }, []),
          rules = ruleNodes.map(function(ruleNode) {
            const rule = ruleNode.generateRule(Rule);
            
            return rule;
          });
    
    return rules;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DocumentNode, ruleName, childNodes); }
}

module.exports = DocumentNode;
