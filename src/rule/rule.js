"use strict";

import Rule from "../rule";
import RuleDefinition from "../definition/rule";

import { RULE_RULE_NAME } from "../ruleNames";

export default class RuleRule extends Rule {
  static fromNothing() {
    const ruleDefinition = RuleDefinition.fromNothing(),
          name = RULE_RULE_NAME,  ///
          opacity = null,
          definitions = [
            ruleDefinition
          ],
          ruleRule = new RuleRule(name, opacity, definitions);

    return ruleRule;
  }
}
