"use strict";

import Rule from "../../rule";
import BranchingfPartsDefinition from "../../definition/branchingParts";

import { BRANCHING_PARTS_RULE_NAME } from "../../ruleNames";

export default class BranchingfPartsBNFRule extends Rule {
  static fromNothing() {
    const name = BRANCHING_PARTS_RULE_NAME, ///
          branchingPartsDefinition = BranchingfPartsDefinition.fromNothing(),
          opacity = null,
          definitions = [
            branchingPartsDefinition
          ],
          branchingPartsRule = new BranchingfPartsBNFRule(name, opacity, definitions);

    return branchingPartsRule;
  }
}
