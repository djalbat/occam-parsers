"use strict";

import Rule from "../../rule";
import BranchingModifierRuleDefinition from "../../definition/branchingModifierRule";

import { BRANCHING_MODIFIER_RULE_NAME } from "../../ruleNames";

export default class BranchingModifierBNFRule extends Rule {
  static fromNothing() {
    const name = BRANCHING_MODIFIER_RULE_NAME, ///
          branchingModifierRuleDefinition = BranchingModifierRuleDefinition.fromNothing(),
          opacity = null,
          definitions = [
            branchingModifierRuleDefinition
          ],
          branchingModifierRule = new BranchingModifierBNFRule(name, opacity, definitions);

    return branchingModifierRule;
  }
}
