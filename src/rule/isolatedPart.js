"use strict";

import Rule from "../rule";
import IsolatedPartDefinition from "../definition/isolatedPart";

import { ISOLATED_PART_RULE_NAME } from "../ruleNames";

export default class IsolatedPartRule extends Rule {
  static fromNothing() {
    const name = ISOLATED_PART_RULE_NAME, ///
          isolatedPartDefinition = IsolatedPartDefinition.fromNothing(),
          opacity = null,
          definitions = [
            isolatedPartDefinition
          ],
          isolatedPartRule = new IsolatedPartRule(name, opacity, definitions);

    return isolatedPartRule;
  }
}
