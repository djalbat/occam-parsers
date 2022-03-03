"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { even } from "../../utilities/array";

export default class DefinitionsBNFNode extends NonTerminalNode {
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          evenChildNodes = even(childNodes),  ///
          definitionNodes = evenChildNodes, ///
          definitions = definitionNodes.map((definitionNode) => {
            const definition = definitionNode.generateDefinition();
            
            return definition;
          });
    
    return definitions;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsBNFNode, ruleName, childNodes); }
}
