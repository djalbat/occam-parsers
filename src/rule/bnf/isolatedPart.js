"use strict";

import Rule from "../../rule";
import IsolatedPartDefinition from "../../definition/isolatedPart";

import { ISOLATED_PART_RULE_NAME } from "../../ruleNames";

export default class IsolatedPartBNFRule extends Rule {
  static fromNothing() {
    const name = ISOLATED_PART_RULE_NAME, ///
          isolatedPartDefinition = IsolatedPartDefinition.fromNothing(),
          opacity = null,
          definitions = [
            isolatedPartDefinition
          ],
          isolatedPartRule = new IsolatedPartBNFRule(name, opacity, definitions);

    return isolatedPartRule;
  }
}
