"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { first, third } from "../../utilities/array";

export default class RuleNode extends NonTerminalNode {
  generateRule(Rule) {
    const name = this.getName(),
          definitions = this.generateDefinitions(),
          Node = NonTerminalNode,
          rule = new Rule(name, definitions, Node);

    return rule;
  }

  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          nameNode = firstChildNode,  ///
          name = nameNode.getName();
    
    return name;
  }
  
  generateDefinitions() {
    const childNodes = this.getChildNodes(),
          thirdChildNode = third(childNodes),
          definitionsNode = thirdChildNode,  ///
          definitions = definitionsNode.generateDefinitions();
    
    return definitions;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RuleNode, ruleName, childNodes); }
}
