"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import ChoiceOfPartsPart from "../../part/nonTerminal/choiceOfParts";

import { PART_CHOICE_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class ChoiceOfPartsBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const ruleName = PART_CHOICE_RULE_NAME,
          childNodes = this.getChildNodes(),
          partChoiceBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName);

    callAhead = false;  ///

    const partChoices = partChoiceBNFNodes.map((partChoiceBNFNode) => {
            const partChoice = partChoiceBNFNode.generatePartChoice(callAhead);

            return partChoice;
          }),
          choiceOfPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices),
          part = choiceOfPartsPart; ///

    return part;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(ChoiceOfPartsBNFNode, ruleName, childNodes, opacity); }
}
