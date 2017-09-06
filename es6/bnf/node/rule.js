'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { first, second, discardFourthThenSecond } = arrayUtilities;

class RuleNode extends NonTerminalNode {
  generateRule(Rule, mappings) {
    const name = this.getName(),
          definitions = this.generateDefinitions(),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ?
                   mappings[name] :
                     NonTerminalNode,
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
          secondChildNode = second(childNodes),
          definitionsNode = secondChildNode,  ///
          definitions = definitionsNode.generateDefinitions();
    
    return definitions;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = discardFourthThenSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

    return ruleNode;
  }
}

module.exports = RuleNode;
