"use strict";

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      GroupOfPartsNode = require("../node/groupOfParts"),
      GroupOfPartsDefinition = require("../definition/groupOfParts");

const { GroupOfPartsRuleName } = ruleNames;

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
