'use strict';

const Rule = require('../../bnf/rule');

class CustomGrammarRule extends Rule {
  static fromRuleNameAndRule(Class, ruleName, rule) {
    const ruleNonTerminalNode = rule.getNonTerminalNode(),
          ruleDefinitions = rule.getDefinitions(),
          name = ruleName,  ///
          definitions = Class.definitionsFromRuleDefinitions(ruleDefinitions),
          NonTerminalNode = ruleNonTerminalNode, ///
          statementRule = new CustomGrammarRule(name, definitions, NonTerminalNode);
    
    return statementRule;
  }
}

module.exports = CustomGrammarRule;
