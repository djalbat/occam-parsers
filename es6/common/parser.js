'use strict';

const Configuration = require('./configuration'),
      arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities;

class CommonParser {
  constructor(rules) {
    this.rules = rules;
  }

  getRules() {
    return this.rules;
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
      const configuration = Configuration.fromTokensAndRules(tokens, this.rules),
            noWhitespace = false, ///
            nodeOrNodes = rule.parse(configuration, noWhitespace);

      if (nodeOrNodes !== null) {
        if (nodeOrNodes instanceof Array) {
          const nodes = nodeOrNodes,  ///
                firstNode = first(nodes);

          node = firstNode; ///
        } else {
          node = nodeOrNodes; ///
        }
      }
    }

    return node;
  }
}

module.exports = CommonParser;
