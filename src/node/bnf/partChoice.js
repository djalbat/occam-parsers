"use strict";

import PartChoice from "../../partChoice";
import NonTerminalNode from "../../node/nonTerminal";

import { nodeFromChildNodesAndRuleName } from "../../utilities/node";
import { PART_RULE_NAME, PRECEDENCE_RULE_NAME } from "../../ruleNames";

export default class PartChoiceBNFNode extends NonTerminalNode {
  generatePartChoice(callAhead) {
    let ruleName;

    const childNodes = this.getChildNodes();

    ruleName = PART_RULE_NAME;

    const partBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    ruleName = PRECEDENCE_RULE_NAME;

    const precedenceBNFNode = nodeFromChildNodesAndRuleName(childNodes, ruleName);

    callAhead = false;  ///

    const part = partBNFNode.generatePart(callAhead),
          precedence = (precedenceBNFNode === null) ?
                          null :
                            precedenceBNFNode.getPrecedence(),
          definition = PartChoice.fromPartAndPrecedence(part, precedence);

    return definition;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(PartChoiceBNFNode, ruleName, childNodes, opacity); }
}
