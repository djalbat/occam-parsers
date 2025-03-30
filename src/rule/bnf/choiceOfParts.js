"use strict";

import Rule from "../../rule";
import ChoiceOfPartsBNFNode from "../../node/bnf/choiceOfParts";
import ChoiceOfPartsDefinition from "../../definition/choiceOfParts";

import { choiceOfPartsRuleName } from "../../ruleNames";

export default class ChoiceOfPartsBNFRule extends Rule {
  static fromNothing() {
    const name = choiceOfPartsRuleName, ///
          choiceOfPartsDefinition = ChoiceOfPartsDefinition.fromNothing(),
          opacity = null,
          definitions = [
            choiceOfPartsDefinition
          ],
          NonTerminalNode = ChoiceOfPartsBNFNode, ///
          choiceOfPartsRule = new ChoiceOfPartsBNFRule(name, opacity, definitions, NonTerminalNode);

    return choiceOfPartsRule;
  }
}
