"use strict";

import Rule from "../../rule";
import ComittedPartDefinition from "../../definition/committedPart";

import { COMMITTED_PART_RULE_NAME } from "../../ruleNames";

export default class ComittedPartBNFRule extends Rule {
  static fromNothing() {
    const name = COMMITTED_PART_RULE_NAME, ///
          committedPartDefinition = ComittedPartDefinition.fromNothing(),
          opacity = null,
          definitions = [
            committedPartDefinition
          ],
          committedPartRule = new ComittedPartBNFRule(name, opacity, definitions);

    return committedPartRule;
  }
}
