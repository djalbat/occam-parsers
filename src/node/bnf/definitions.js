"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { DEFINITION_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class DefinitionsBNFNode extends NonTerminalNode {
  generateDefinitions() {
    const ruleName = DEFINITION_RULE_NAME,
          childNodes = this.getChildNodes(),
          definitionBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName),
          definitions = definitionBNFNodes.map((definitionBNFNode) => {
            const definition = definitionBNFNode.generateDefinition();
            
            return definition;
          });
    
    return definitions;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DefinitionsBNFNode, ruleName, childNodes, opacity, precedence); }
}
