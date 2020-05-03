"use strict";

import Rule from "../rule";
import GroupOfPartsNode from "../node/groupOfParts";
import GroupOfPartsDefinition from "../definition/groupOfParts";

import { GroupOfPartsRuleName } from "../ruleNames";

class GroupOfPartsRule extends Rule {
  constructor() {
    const name = GroupOfPartsRuleName,
          groupOfPartsDefinition = new GroupOfPartsDefinition(),
          definitions = [
            groupOfPartsDefinition
          ],
          Node = GroupOfPartsNode;

    super(name, definitions, Node)
  }
}

module.exports = GroupOfPartsRule;
