"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import ChoiceOfPartsPart from "../../part/nonTerminal/choiceOfParts";

import { PART_CHOICE_RULE_NAME } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class ChoiceOfPartsBNFNode extends NonTerminalNode {
  generatePart() {
    const ruleName = PART_CHOICE_RULE_NAME,
          childNodes = this.getChildNodes(),
          partChoiceBNFNodes = nodesFromChildNodesAndRuleName(childNodes, ruleName);

    const partChoices = partChoiceBNFNodes.map((partChoiceBNFNode) => {
            const partChoice = partChoiceBNFNode.generatePartChoice();

            return partChoice;
          }),
          choiceOfPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices),
          part = choiceOfPartsPart; ///

    return part;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ChoiceOfPartsBNFNode, ruleName, childNodes, precedence, opacity); }
}
