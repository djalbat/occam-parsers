"use strict";

import Rule from "../../rule";
import RestrictedPartDefinition from "../../definition/restrictedPart";

import { RESTRICTED_PART_RULE_NAME } from "../../ruleNames";

export default class RestricteddPartBNFRule extends Rule {
  static fromNothing() {
    const name = RESTRICTED_PART_RULE_NAME, ///
          restrictedPartDefinition = RestrictedPartDefinition.fromNothing(),
          opacity = null,
          definitions = [
            restrictedPartDefinition
          ],
          restrictedPartRule = new RestricteddPartBNFRule(name, opacity, definitions);

    return restrictedPartRule;
  }
}
