"use strict";

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      DefinitionNode = require("../node/definition"),
      DefinitionDefinition = require("../definition/definition");

const { DefinitionRuleName } = ruleNames;

class DefinitionRule extends Rule {
  constructor() {
    const name = DefinitionRuleName,
          definitionDefinition = new DefinitionDefinition(),
          definitions = [
            definitionDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionRule;
