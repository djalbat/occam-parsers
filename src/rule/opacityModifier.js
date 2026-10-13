"use strict";

import Rule from "../rule";
import OpacityModifierRuleDefinition from "../definition/opacityModifierRule";

import { OPACITY_MODIFIER_RULE_NAME } from "../ruleNames";

export default class OpacityModifierRule extends Rule {
  static fromNothing() {
    const name = OPACITY_MODIFIER_RULE_NAME, ///
          opacityModifierRuleDefinition = OpacityModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            opacityModifierRuleDefinition
          ],
          opacityModifierRule = new OpacityModifierRule(name, opacity, definitions);

    return opacityModifierRule;
  }
}
