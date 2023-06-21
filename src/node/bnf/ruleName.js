"use strict";

import { arrayUtilities } from "necessary";

import RuleNamePart from "../../part/nonTerminal/ruleName";
import NonTerminalNode from "../../node/nonTerminal";

const { first } = arrayUtilities;

export default class RuleNameBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent,
          ruleNamePart = RuleNamePart.fromRuleNameAndLookAhead(ruleName, lookAhead);

    return ruleNamePart;
  }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(RuleNameBNFNode, ruleName, childNodes, precedence); }
}
