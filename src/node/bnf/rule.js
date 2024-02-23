"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

const { first, second, third, fourth } = arrayUtilities;

export default class RuleBNFNode extends NonTerminalNode {
  generateRule(Rule) {
    const name = this.getName(),
          ambiguous = this.isAmbiguous(),
          definitions = this.generateDefinitions(),
          rule = Rule.fromNameAmbiguousDefinitionsAndNonTerminalNode(name, ambiguous, definitions, NonTerminalNode);

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

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(RuleBNFNode, ruleName, childNodes, ambiguous); }
}
