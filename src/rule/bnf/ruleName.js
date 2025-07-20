"use strict";

import Rule from "../../rule";
import NameDefinition from "../../definition/name";

import { RULE_NAME_RULE_NAME } from "../../ruleNames";

export default class RuleNameBNFRule extends Rule {
  static fromNothing() {
    const nameDefinition = NameDefinition.fromNothing(),
          name = RULE_NAME_RULE_NAME,  ///
          opacity = null,
          definitions = [
            nameDefinition  ///
          ],
          ruleNameRule = new RuleNameBNFRule(name, opacity, definitions);

    return ruleNameRule;
  }
}
