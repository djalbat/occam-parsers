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

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNode, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(DefinitionsBNFNode, ruleName, childNode, ambiguous); }
}
