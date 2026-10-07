"use strict";

import { arrayUtilities } from "necessary";

import RuleNamePart from "../../part/nonTerminal/ruleName";
import NonTerminalNode from "../../node/nonTerminal";

const { first } = arrayUtilities;

export default class RuleNameBNFNode extends NonTerminalNode {
  generatePart() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent, ///
          ruleNamePart = RuleNamePart.fromRuleName(ruleName);

    return ruleNamePart;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RuleNameBNFNode, ruleName, childNodes, precedence, opacity); }
}
