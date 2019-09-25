'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      ModifierRuleDefinition = require('../definition/quantifierRule');

const { specialSymbols } = lexers,
      { OptionalModifierRuleName } = ruleNames,
      { questionMark } = specialSymbols;

class OptionalModifierRule extends Rule {
  constructor() {
    const name = OptionalModifierRuleName,
          optionalModifierTerminalSymbolContent = questionMark, ///
          optionalModifierRuleDefinition = new ModifierRuleDefinition(optionalModifierTerminalSymbolContent),
          definitions = [
            optionalModifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = OptionalModifierRule;
