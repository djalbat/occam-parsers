"use strict";

import Rule from "../rule";
import ChoiceOfPartsDefinition from "../definition/choiceOfParts";

import { CHOICE_OF_PARTS_RULE_NAME } from "../ruleNames";

export default class ChoiceOfPartsRule extends Rule {
  static fromNothing() {
    const name = CHOICE_OF_PARTS_RULE_NAME, ///
          choiceOfPartsDefinition = ChoiceOfPartsDefinition.fromNothing(),
          opacity = null,
          definitions = [
            choiceOfPartsDefinition
          ],
          choiceOfPartsRule = new ChoiceOfPartsRule(name, opacity, definitions);

    return choiceOfPartsRule;
  }
}
