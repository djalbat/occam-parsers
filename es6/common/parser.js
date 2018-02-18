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
  
  nodeFromTokens(significantTokens, rule, parentNodes = false) {
    const node = this.parse(significantTokens, rule);

    if (parentNodes) {
      if (node !== null) {
        const parentNode = null;  ///

        node.setParentNode(parentNode);
      }
    }

    return node;
  }

  parse(significantTokens, rule = null, parentNodes = false) {
    let node = null;

    if (rule === null) {
      const rulesLength = this.rules.length;

      if (rulesLength > 0) {
        const firstRule = first(this.rules);

        rule = firstRule; ///
      }
    }

    if (rule !== null) {
      const configuration = Configuration.fromSignificantTokensAndRules(significantTokens, this.rules),
            noWhitespace = false, ///
            nodeOrNodes = rule.parse(configuration, noWhitespace);

      if (nodeOrNodes !== null) {
        node = (nodeOrNodes instanceof Array) ?
                 first(nodeOrNodes) :
                   nodeOrNodes;
      }
    }

    if (parentNodes) {
      if (node !== null) {
        setParentNodes(node);
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

function setParentNodes(node) {
  const nodeTerminalNode = node.isTerminalNode(),
        nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          parentNode = nonTerminalNode, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach(function(childNode) {
      childNode.setParentNode(parentNode);

      const node = childNode; ///

      setParentNodes(node);
    });
  }
}
