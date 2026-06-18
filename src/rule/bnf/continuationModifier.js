"use strict";

import Rule from "../../rule";
import ContinuationModifierRuleDefinition from "../../definition/continuationModifierRule";

import { CONTINUATION_MODIFIER_RULE_NAME } from "../../ruleNames";

export default class ContinuationModifierBNFRule extends Rule {
  static fromNothing() {
    const name = CONTINUATION_MODIFIER_RULE_NAME, ///
          continuationModifierRuleDefinition = ContinuationModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            continuationModifierRuleDefinition
          ],
          continuationModifierRule = new ContinuationModifierBNFRule(name, opacity, definitions);

    return continuationModifierRule;
  }
}
