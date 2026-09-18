"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import IsolatedPartPart from "../../part/nonTerminal/isolatedPart";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

export default class IsolatedPartBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    continuation = false;  ///

    let part;

    part = partBNFNode.generatePart(continuation);

    const isolatedPartPart = IsolatedPartPart.fromPart(part);

    part = isolatedPartPart; ///

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(IsolatedPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
