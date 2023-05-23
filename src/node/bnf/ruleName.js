"use strict";

import RuleNamePart from "../../part/nonTerminal/ruleName";
import NonTerminalNode from "../../node/nonTerminal";

import { first } from "../../utilities/array";

export default class RuleNameBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent,
          ruleNamePart = new RuleNamePart(ruleName, lookAhead);

    return ruleNamePart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameBNFNode, ruleName, childNodes); }
}
