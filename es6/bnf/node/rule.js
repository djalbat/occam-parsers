'use strict';

const necessary = require('necessary');

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { array } = necessary;

class RuleNode extends NonTerminalNode {
  generateRule(Rule, Definition, mappings) {
    const name = this.getName(),
          definitions = this.generateDefinitions(Definition),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ?
                   mappings[name] :
                     NonTerminalNode,
          rule = new Rule(name, definitions, Node);

    return rule;
  }

  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = array.first(childNodes),
          ruleNameNode = firstChildNode,  ///
          ruleNameNodeRuleName = ruleNameNode.getRuleName(),
          name = ruleNameNodeRuleName;
    
    return name;
  }
  
  generateDefinitions(Definition) {
    const childNodes = this.getChildNodes(),
          lastButOneChildNode = array.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,  ///
          definitions = definitionsNode.generateDefinitions(Definition);
    
    return definitions;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes);

    return ruleNode;
  }
}

module.exports = RuleNode;
