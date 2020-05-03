"use strict";

const Definition = require("../definition"),
      NonTerminalNode = require("../../common/node/nonTerminal");

class DefinitionNode extends NonTerminalNode {
  generateDefinition() {
    const childNodes = this.getChildNodes(),
          partNodes = childNodes, ///
          lookAhead = false,  ///
          parts = partNodes.map(function(partNode) {
            const part = partNode.generatePart(lookAhead);
  
            return part;
          }),
          definition = new Definition(parts);

    return definition;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DefinitionNode, ruleName, childNodes); }
}

module.exports = DefinitionNode;
