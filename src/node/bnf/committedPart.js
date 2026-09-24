"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import CommittedPartPart from "../../part/nonTerminal/committedPart";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

export default class CommittedPartBNFNode extends NonTerminalNode {
  generatePart(continuation) {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    continuation = false;  ///

    let part;

    part = partBNFNode.generatePart(continuation);

    const committedPartPart = CommittedPartPart.fromPart(part);

    part = committedPartPart; ///

    return part;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(CommittedPartBNFNode, ruleName, childNodes, opacity, precedence); }
}
