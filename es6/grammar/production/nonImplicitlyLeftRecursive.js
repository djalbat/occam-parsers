'use strict';

const Rule = require('../../common/rule'),
      Production = require('../../common/production');

class NonImplicitlyLeftRecursiveProduction extends Production {
  static fromProductionAndPreviousProductions(production, previousProductions) {
    const productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,  ///
          rules = rulesFromProductionAndPreviousProductions(production, previousProductions),
          Node = productionNode,  ///
          nonImplicitlyLeftRecursiveProduction = new NonImplicitlyLeftRecursiveProduction(name, rules, Node);

    return nonImplicitlyLeftRecursiveProduction;
  }
}

module.exports = NonImplicitlyLeftRecursiveProduction;

function rulesFromProductionAndPreviousProductions(production, previousProductions) {
  const productionRules = production.getRules(),
        rules = productionRules.reduce(function(rules, productionRule) {
          const productionRuleImplicitlyLeftRecursivePreviousProduction = productionRule.implicitlyLeftRecursivePreviousProduction(previousProductions);

          if (productionRuleImplicitlyLeftRecursivePreviousProduction !== null) {
            const previousProduction = productionRuleImplicitlyLeftRecursivePreviousProduction, ///
                  rulesWithPreviousProductionInlineFromProductionInline = rulesWithPreviousProductionInlineFromProductionRuleAndPreviousProduction(productionRule, previousProduction);

            rules = rules.concat(rulesWithPreviousProductionInlineFromProductionInline);
          } else {
            const rule = productionRule;

            rules.push(rule);
          }

          return rules;
        }, []);

  return rules;
}

function rulesWithPreviousProductionInlineFromProductionRuleAndPreviousProduction(productionRule, previousProduction) {
  const previousProductionRules = previousProduction.getRules(),
        rulesWithPreviousProductionInline = previousProductionRules.map(function(previousProductionRule) {
          const previousProductionRuleParts = previousProductionRule.getParts(),
                productionRuleAllButFirstParts = productionRule.getAllButFirstParts(),
                ruleWithPreviousProductionInlineParts = [].concat(previousProductionRuleParts).concat(productionRuleAllButFirstParts),
                ruleWithPreviousProductionInline = new Rule(ruleWithPreviousProductionInlineParts);

          return ruleWithPreviousProductionInline;
        });

  return rulesWithPreviousProductionInline;
}

