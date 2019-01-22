'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

const { even } = arrayUtilities;

class DefinitionsNode extends NonTerminalNode {
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          evenChildNodes = even(childNodes),  ///
          definitionNodes = evenChildNodes, ///
          definitions = definitionNodes.map(function(definitionNode) {
            const definition = definitionNode.generateDefinition();
            
            return definition;
          });
    
    return definitions;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          definitionsNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);

    return definitionsNode;
  }
}

module.exports = DefinitionsNode;
