"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import CommittedPartPart from "../../part/nonTerminal/committedPart";

import { PART_RULE_NAME } from "../../ruleNames";
import { nodeFromChildNodesAndRuleName } from "../../utilities/node";

export default class CommittedPartBNFNode extends NonTerminalNode {
  isConsuming() {
    const multiplicity = this.getMultiplicity(),
          consuming = (multiplicity === 2);

    return consuming;
  }

  generatePart(continuation) {
    const ruleName = PART_RULE_NAME,
          childNodes = this.getChildNodes(),
          partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    continuation = false;  ///

    let part;

    part = partBNFNode.generatePart(continuation);

    const consuming = this.isConsuming(),
          committedPartPart = CommittedPartPart.fromPartAndConsuming(part, consuming);

    part = committedPartPart; ///

    return part;
  }

  static fromRuleNameChildNodesPrecedenceCommittedAndOpacity(ruleName, childNodes, precedence, committed, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceCommittedAndOpacity(CommittedPartBNFNode, ruleName, childNodes, precedence, committed, opacity); }
}
