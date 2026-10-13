"use strict";

import Rule from "../rule";
import ProducingModifierRuleDefinition from "../definition/producingModifierRule";

import { PRODUCING_MODIFIER_RULE_NAME } from "../ruleNames";

export default class ProducingModifierRule extends Rule {
  static fromNothing() {
    const name = PRODUCING_MODIFIER_RULE_NAME, ///
          producingModifierRuleDefinition = ProducingModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            producingModifierRuleDefinition
          ],
          producingModifierRule = new ProducingModifierRule(name, opacity, definitions);

    return producingModifierRule;
  }
}
