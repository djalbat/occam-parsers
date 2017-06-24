'use strict';

const LeftRecursiveRule = require('./rule/leftRecursive'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      NonLeftRecursiveRule = require('./rule/nonLeftRecursive'),
      ImplicitlyLeftRecursiveRule = require('./rule/implicitlyLeftRecursive');

class leftRecursion {
  static eliminate(rules) {
    const nonLeftRecursiveRules = [],
          rightRecursiveRules = [];

    rules.forEach(function(rule, index) {
      const begin = 0,
            end = index,  ///
            previousNonLeftRecursiveRules = nonLeftRecursiveRules.slice(begin, end),
            previousRules = previousNonLeftRecursiveRules,  ///
            implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousRules(rule, previousRules);

      if (implicitlyLeftRecursiveRule !== null) {
        const leftRecursiveRule = LeftRecursiveRule.fromImplicitlyLeftRecursiveRuleAndPreviousRules(implicitlyLeftRecursiveRule, previousRules);
        
        rule = leftRecursiveRule; ///
      }
      
      const leftRecursiveRule = LeftRecursiveRule.fromRule(rule);
      
      if (leftRecursiveRule === null) {
        const nonLeftRecursiveRule = rule;  ///

        nonLeftRecursiveRules.push(nonLeftRecursiveRule);
      } else {
        const rightRecursiveRule = RightRecursiveRule.fromLeftRecursiveRule(leftRecursiveRule),
              nonLeftRecursiveRule = NonLeftRecursiveRule.fromLeftRecursiveRule(leftRecursiveRule);

        rightRecursiveRules.push(rightRecursiveRule);

        nonLeftRecursiveRules.push(nonLeftRecursiveRule);
      }
    });

    rules = [].concat(nonLeftRecursiveRules).concat(rightRecursiveRules);

    return rules;
  }
}

module.exports = leftRecursion;
