"use strict";

const lexers = require("occam-lexers");

const Rule = require("../rule"),
      ruleNames = require("../ruleNames"),
      DefinitionNode = require("../node/definition"),
      QuantifierRuleDefinition = require("../definition/quantifierRule");

const { specialSymbols } = lexers,
      { plus } = specialSymbols,
      { OneOrMoreQuantifierRuleName } = ruleNames;

class OneOrMoreQuantifierRule extends Rule {
  constructor() {
    const name = OneOrMoreQuantifierRuleName,
          oneOrMoreQuantifierTerminalSymbolContent = plus, ///
          oneOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(oneOrMoreQuantifierTerminalSymbolContent),
          definitions = [
            oneOrMoreQuantifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = OneOrMoreQuantifierRule;
