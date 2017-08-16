'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionsNode extends NonTerminalNode {
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          definitionNodes = childNodes, ///
          definitions = definitionNodes.map(function(definitionNode) {
            const definition = definitionNode.generateDefinition();
            
            return definition;
          });
    
    return definitions;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardOdd(nodes),
          definitionsNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);

    return definitionsNode;
  }
}

module.exports = DefinitionsNode;
