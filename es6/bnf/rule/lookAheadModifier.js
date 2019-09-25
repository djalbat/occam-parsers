'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      ModifierRuleDefinition = require('../definition/modifierRule');

const { specialSymbols } = lexers,
      { LookAheadModifierRuleName } = ruleNames,
      { exclamationMark } = specialSymbols;

class LookAheadModifierRule extends Rule {
  constructor() {
    const name = LookAheadModifierRuleName,
          lookAheadModifierTerminalSymbolContent = exclamationMark, ///
          lookAheadModifierRuleDefinition = new ModifierRuleDefinition(lookAheadModifierTerminalSymbolContent),
          definitions = [
            lookAheadModifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = LookAheadModifierRule;
