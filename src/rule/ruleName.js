"use strict";

import Rule from "../rule";
import NameDefinition from "../definition/name";

import { RULE_NAME_RULE_NAME } from "../ruleNames";

export default class RuleNameRule extends Rule {
  static fromNothing() {
    const nameDefinition = NameDefinition.fromNothing(),
          name = RULE_NAME_RULE_NAME,  ///
          opacity = null,
          definitions = [
            nameDefinition  ///
          ],
          ruleNameRule = new RuleNameRule(name, opacity, definitions);

    return ruleNameRule;
  }
}
