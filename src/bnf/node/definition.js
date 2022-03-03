"use strict";

import Definition from "../../definition";
import NonTerminalNode from "../../node/nonTerminal";

export default class DefinitionBNFNode extends NonTerminalNode {
  generateDefinition() {
    const childNodes = this.getChildNodes(),
          partNodes = childNodes, ///
          lookAhead = false,  ///
          parts = partNodes.map((partNode) => {
            const part = partNode.generatePart(lookAhead);
  
            return part;
          }),
          definition = new Definition(parts);

    return definition;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DefinitionBNFNode, ruleName, childNodes); }
}
