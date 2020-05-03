"use strict";

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      NoWhitespacePartNode = require("../node/noWhitespacePart"),
      NoWhitespacePartDefinition = require("../definition/noWhitespacePart");

const { NoWhitespacePartRuleName } = ruleNames;

class NoWhitespacePartRule extends Rule {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = NoWhitespacePartRuleName,
          definitions = [
            noWhitespacePartDefinition
          ],
          Node = NoWhitespacePartNode;

    super(name, definitions, Node)
  }
}

module.exports = NoWhitespacePartRule;
