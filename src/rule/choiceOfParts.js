"use strict";

import Rule from "../rule";
import ChoiceOfPartsBNFNode from "../node/bnf/choiceOfParts";
import ChoiceOfPartsDefinition from "../definition/choiceOfParts";

import { choiceOfPartsRuleName } from "../ruleNames";

export default class ChoiceOfPartsRule extends Rule {
  static fromNothing() {
    const name = choiceOfPartsRuleName, ///
          choiceOfPartsDefinition = ChoiceOfPartsDefinition.fromNothing(),
          ambiguous = false,
          definitions = [
            choiceOfPartsDefinition
          ],
          NonTerminalNode = ChoiceOfPartsBNFNode, ///
          choiceOfPartsRule = new ChoiceOfPartsRule(name, ambiguous, definitions, NonTerminalNode);

    return choiceOfPartsRule;
  }
}
