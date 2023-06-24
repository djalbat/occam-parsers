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

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ChoiceOfPartsBNFNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ChoiceOfPartsBNFNode, ruleName, childNodes, precedence); }
}
