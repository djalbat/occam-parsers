'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { first, third } = arrayUtilities;

class RuleNode extends NonTerminalNode {
  generateRule(Rule) {
    const name = this.getName(),
          definitions = this.generateDefinitions(),
          Node = NonTerminalNode,
          rule = new Rule(name, definitions, Node);

    return rule;
  }

  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          ruleNameNode = firstChildNode,  ///
          ruleNameNodeRuleName = ruleNameNode.getRuleName(),
          name = ruleNameNodeRuleName;  ///
    
    return name;
  }
  
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          definitionsNode = thirdChildNode,  ///
          definitions = definitionsNode.generateDefinitions();
    
    return definitions;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

    return ruleNode;
  }
}

module.exports = RuleNode;
