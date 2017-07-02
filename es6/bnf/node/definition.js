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
          rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DefinitionNode);

    return rulesNode;
  }
}

module.exports = DefinitionNode;
