'use strict';

const necessary = require('necessary');

const Context = require('./context'),
      parserUtilities = require('../utilities/parser');

const { array } = necessary,
      { first } = array;

class CommonParser {
  constructor(rules) {
    this.rules = rules;
  }

  getRules() {
    return this.rules;
  }
  
  nodeFromLines(lines, rule) {
    const tokens = parserUtilities.tokensFromLines(lines),
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
      const context = new Context(tokens, this.rules),
            noWhitespace = false, ///
            nodeOrNodes = rule.parse(context, noWhitespace);

      if (nodeOrNodes !== null) {
        node = (nodeOrNodes instanceof Array) ?
                 first(nodeOrNodes) :
                   nodeOrNodes;
      }
    }

    return node;
  }
  
  toString() {
    const maximumRuleNameLength = this.rules.reduce(function(maximumRuleNameLength, rule) {
            const ruleName = rule.getName(),
                  ruleNameLength = ruleName.length;
  
            maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);
  
            return maximumRuleNameLength;
          }, 0),
          string = this.rules.reduce(function(string, rule) {
            const ruleString = rule.toString(maximumRuleNameLength);
  
            string += ruleString;
  
            return string;
          }, '');
    
    return string;
  }
}

module.exports = CommonParser;
