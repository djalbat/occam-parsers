"use strict";

import Rule from "../../rule";
import CallAheadModifierRuleDefinition from "../../definition/callAheadModifierRule";

import { CALL_AHEAD_MODIFIER_RULE_NAME } from "../../ruleNames";

export default class CallAheadModifierBNFRule extends Rule {
  static fromNothing() {
    const name = CALL_AHEAD_MODIFIER_RULE_NAME, ///
          callAheadModifierRuleDefinition = CallAheadModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            callAheadModifierRuleDefinition
          ],
          callAheadModifierRule = new CallAheadModifierBNFRule(name, opacity, definitions);

    return callAheadModifierRule;
  }
}
