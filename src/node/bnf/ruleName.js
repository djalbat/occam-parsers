"use strict";

import { arrayUtilities } from "necessary";

import RuleNamePart from "../../part/nonTerminal/ruleName";
import NonTerminalNode from "../../node/nonTerminal";

const { first } = arrayUtilities;

export default class RuleNameBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent, ///
          ruleNamePart = RuleNamePart.fromCallAheadAndRuleName(callAhead, ruleName);

    return ruleNamePart;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNameBNFNode, ruleName, childNodes, opacity, precedence); }
}
