"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import RestirctedPartPart from "../../part/nonTerminal/restrictedPart";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

export default class RestirctedPartBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    continuation = false;  ///

    let part;

    part = partBNFNode.generatePart(continuation);

    const restrictedPartPart = RestirctedPartPart.fromPart(part);

    part = restrictedPartPart; ///

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RestirctedPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
