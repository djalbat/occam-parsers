"use strict";

import Definition from "../../definition";
import NonTerminalNode from "../../node/nonTerminal";

import { partRuleName } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DefinitionBNFNode extends NonTerminalNode {
  generateDefinition() {
    const childNodes = this.getChildNodes(),
          partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, partRuleName),
          lookAhead = false,  ///
          parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(lookAhead);
  
            return part;
          }),
          precedence = null,
          definition = Definition.fromPartsAndPrecedence(parts, precedence);

    return definition;
  }

  static fromRuleNamePrecedenceAndChildNodes(ruleName, precedence, childNodes) { return NonTerminalNode.fromRuleNamePrecedenceAndChildNodes(DefinitionBNFNode, ruleName, precedence, childNodes); }
}
