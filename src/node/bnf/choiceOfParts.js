"use strict";

import NonTerminalNode from "../../node/nonTerminal";
import ChoiceOfPartsPart from "../../part/nonTerminal/choiceOfParts";

import { partChoiceRuleName } from "../../ruleNames";
import { nodesFromChildNodesAndRuleName } from "../../utilities/node";

export default class ChoiceOfPartsBNFNode extends NonTerminalNode {
  generatePart(lookAhead) {
    const childNodes = this.getChildNodes(),
          partChoiceBNFNodes = nodesFromChildNodesAndRuleName(childNodes, partChoiceRuleName);

    lookAhead = false;  ///

    const partChoices = partChoiceBNFNodes.map((partChoiceBNFNode) => {
            const partChoice = partChoiceBNFNode.generatePartChoice(lookAhead);

            return partChoice;
          }),
          choiceOfPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices),
          part = choiceOfPartsPart; ///

    return part;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ChoiceOfPartsBNFNode, ruleName, childNodes, ambiguous); }
}
