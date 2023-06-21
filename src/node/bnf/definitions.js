"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { definitionRuleName } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DefinitionsBNFNode extends NonTerminalNode {
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          definitionBNFNodes = nodesFromChildNodesAndRuleName(childNodes, definitionRuleName),
          definitions = definitionBNFNodes.map((definitionBNFNode) => {
            const definition = definitionBNFNode.generateDefinition();
            
            return definition;
          });
    
    return definitions;
  }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(DefinitionsBNFNode, ruleName, childNodes, precedence); }
}
