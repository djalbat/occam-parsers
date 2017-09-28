'use strict';

const Configuration = require('./configuration'),
      arrayUtilities = require('../utilities/array'),
      parserUtilities = require('../utilities/parser');

const { first } = arrayUtilities,
      { tokensFromLines } = parserUtilities;

class CommonParser {
  constructor(rules) {
    this.rules = rules;
  }

  getRules() {
    return this.rules;
  }
  
  nodeFromLines(lines, rule) {
    const tokens = tokensFromLines(lines),
          node = this.parse(tokens, rule);

    return node;
  }

  parse(tokens, rule = null) {
    let node = null;

    if (rule === null) {
      const rulesLength = this.rules.length;

      if (rulesLength > 0) {
        const firstRule = first(this.rules);

        rule = firstRule; ///
      }
    }

    if (rule !== null) {
      const configuration = new Configuration(tokens, this.rules),
            noWhitespace = false, ///
            nodeOrNodes = rule.parse(configuration, noWhitespace);

      if (nodeOrNodes !== null) {
        node = (nodeOrNodes instanceof Array) ?
                 first(nodeOrNodes) :
                   nodeOrNodes;
      }
    }

    return node;
  }

  rulesAsString() {
    const maximumRuleNameLength = this.rules.reduce(function(maximumRuleNameLength, rule) {
            const ruleName = rule.getName(),
                  ruleNameLength = ruleName.length;
  
            maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);
  
            return maximumRuleNameLength;
          }, 0),
          rulesString = this.rules.reduce(function(rulesString, rule) {
            const ruleString = rule.asString(maximumRuleNameLength);
  
            rulesString += ruleString;
  
            return rulesString;
          }, '');
    
    return rulesString;
  }
}

module.exports = CommonParser;
