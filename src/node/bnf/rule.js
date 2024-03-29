"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../../node/nonTerminal";

import { opacityModifierRuleName } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

const { first, secondLast } = arrayUtilities;

export default class RuleBNFNode extends NonTerminalNode {
  generateRule(Rule) {
    const name = this.getName(),
          opacity = this.getOpacity(),
          definitions = this.generateDefinitions(),
          rule = Rule.fromNameOpacityDefinitionsAndNonTerminalNode(name, opacity, definitions, NonTerminalNode);

    return rule;
  }

  getOpacity() {
    let opacity = null;

    const childNodes = this.getChildNodes(),
          opacityModifierBNFNode = nodeFromChildNodesAndRuleName(childNodes, opacityModifierRuleName);

    if (opacityModifierBNFNode !== null) {
      opacity = opacityModifierBNFNode.getOpacity();
    }

    return opacity;
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
          secondLastChildNode = secondLast(childNodes),
          definitionsBNFNode = secondLastChildNode, ///
          definitions = definitionsBNFNode.generateDefinitions();
    
    return definitions;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(RuleBNFNode, ruleName, childNodes, opacity); }
}
