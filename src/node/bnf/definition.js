"use strict";

import Definition from "../../definition";
import NonTerminalNode from "../../node/nonTerminal";

import { partRuleName, precedenceRuleName } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName, nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DefinitionBNFNode extends NonTerminalNode {
  generateDefinition() {
    const childNodes = this.getChildNodes(),
          partBNFNodes = nodesFromChildNodesAndRuleName(childNodes, partRuleName),
          precedenceBNFNode = nodeFromChildNodesAndRuleName(childNodes, precedenceRuleName),
          lookAhead = false,  ///
          parts = partBNFNodes.map((partBNFNode) => {
            const part = partBNFNode.generatePart(lookAhead);
  
            return part;
          }),
          precedence = (precedenceBNFNode === null) ?
                          null :
                            precedenceBNFNode.getPrecedence(),
          definition = Definition.fromPartsAndPrecedence(parts, precedence);

    return definition;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(DefinitionBNFNode, ruleName, childNodes, opacity); }
}
