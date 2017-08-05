'use strict';

const arrayUtilities = require('../../utilities/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionsNode extends NonTerminalNode {
  generateDefinitions(Definition) {
    const childNodes = this.getChildNodes(),
          definitionNodes = childNodes, ///
          definitions = definitionNodes.map(function(definitionNode) {
            const definition = definitionNode.generateDefinition(Definition);
            
            return definition;
          });
    
    return definitions;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = arrayUtilities.discardOdd(nodes),
          rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);

    return rulesNode;
  }
}

module.exports = DefinitionsNode;
