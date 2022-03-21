"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { first, second, third, fourth } from "../../utilities/array";

export default class RuleBNFNode extends NonTerminalNode {
  generateRule(Rule) {
    const name = this.getName(),
          ambiguous = this.isAmbiguous(),
          definitions = this.generateDefinitions(),
          Node = NonTerminalNode,
          rule = new Rule(name, ambiguous, definitions, Node);

    return rule;
  }

  isAmbiguous() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeTerminalNode = secondChildNode.isTerminalNode(),
          ambiguous = !secondChildNodeTerminalNode;

    return ambiguous;
  }

  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          nameBNFNode = firstChildNode,  ///
          name = nameBNFNode.getName();
    
    return name;
  }
  
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length,
          thirdChildNode = third(childNodes),
          fourthChildNode = fourth(childNodes),
          definitionsBNFNode = (childNodesLength === 4) ?
                                 thirdChildNode :  ///
                                   fourthChildNode, ///
          definitions = definitionsBNFNode.generateDefinitions();
    
    return definitions;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RuleBNFNode, ruleName, childNodes); }
}
