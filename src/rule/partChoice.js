"use strict";

import Rule from "../rule";
import PartChoiceDefinition from "../definition/partChoice";

import { PART_CHOICE_RULE_NAME } from "../ruleNames";

export default class PartChoiceRule extends Rule {
  static fromNothing() {
    const name = PART_CHOICE_RULE_NAME,  ///
          partChoiceDefinition = PartChoiceDefinition.fromNothing(),
          opacity = null,
          definitions = [
            partChoiceDefinition
          ],
          definitionRule = new PartChoiceRule(name, opacity, definitions);

    return definitionRule;
  }
}
