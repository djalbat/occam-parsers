"use strict";

import PartChoice from "../../partChoice";
import NonTerminalNode from "../../node/nonTerminal";

import { nodeFromChildNodesAndRuleName } from "../../utilities/node";
import { PART_RULE_NAME, PRECEDENCE_RULE_NAME } from "../../ruleNames";

export default class PartChoiceBNFNode extends NonTerminalNode {
  generatePartChoice(continuation) {
    let ruleName;

    const childNodes = this.getChildNodes();

    ruleName = PART_RULE_NAME;

    const partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    ruleName = PRECEDENCE_RULE_NAME;

    const precedenceBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    continuation = false;  ///

    const part = partBNFNode.generatePart(continuation),
          precedence = (precedenceBNFNode === null) ?
                          null :
                            precedenceBNFNode.getPrecedence(),
          definition = PartChoice.fromPartAndPrecedence(part, precedence);

    return definition;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PartChoiceBNFNode, ruleName, childNodes, opacity, precedence); }
}
