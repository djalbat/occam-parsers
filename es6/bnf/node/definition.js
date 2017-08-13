'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionNode extends NonTerminalNode {
  generateDefinition(Definition) {
    const childNodes = this.getChildNodes(),
          partNodes = childNodes, ///
          parts = partNodes.map(function(partNode) {
            const noWhitespace = false, ///
                  part = partNode.generatePart(noWhitespace);
  
            return part;
          }),
          definition = new Definition(parts);

    return definition;
  }

  static fromNodesAndRuleName(nodes, ruleName) {
    const childNodes = nodes, ///
          definitionNode = NonTerminalNode.fromRuleNameAndChildNodes(DefinitionNode, ruleName, childNodes);

    return definitionNode;
  }
}

module.exports = DefinitionNode;
