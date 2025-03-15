"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import ChoiceOfPartsPart from "../../part/nonTerminal/choiceOfParts";

import { partChoiceRuleName } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class ChoiceOfPartsBNFNode extends NonTerminalNode {
  generatePart(callAhead) {
    const childNodes = this.getChildNodes(),
          partChoiceBNFNodes = nodesFromChildNodesAndRuleName(childNodes, partChoiceRuleName);

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
