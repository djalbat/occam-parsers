"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import IsolatedPartPart from "../../part/nonTerminal/isolatedPart";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

export default class IsolatedPartBNFNode extends NonTerminalNode {
  generatePart() {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    let part;

    part = partBNFNode.generatePart();

    const isolatedPartPart = IsolatedPartPart.fromPart(part);

    part = isolatedPartPart; ///

    return part;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IsolatedPartBNFNode, ruleName, childNodes, precedence, opacity); }
}
