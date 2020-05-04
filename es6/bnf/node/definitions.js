"use strict";

import NonTerminalNode from "../../common/node/nonTerminal";

import { even } from "../../utilities/array";

export default class DefinitionsNode extends NonTerminalNode {
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

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes); }
}
