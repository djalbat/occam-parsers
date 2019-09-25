'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      ModifierRuleDefinition = require('../definition/modifierRule');

const { specialSymbols } = lexers,
      { OneOrMoreModifierRuleName } = ruleNames,
      { plus } = specialSymbols;

class OneOrMoreModifierRule extends Rule {
  constructor() {
    const name = OneOrMoreModifierRuleName,
          oneOrMoreModifierTerminalSymbolContent = plus, ///
          oneOrMoreModifierRuleDefinition = new ModifierRuleDefinition(oneOrMoreModifierTerminalSymbolContent),
          definitions = [
            oneOrMoreModifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = OneOrMoreModifierRule;
