'use strict';

const lexers = require('occam-lexers');

const Rule = require('../rule'),
      ruleNames = require('../ruleNames'),
      DefinitionNode = require('../node/definition'),
      ModifierRuleDefinition = require('../definition/modifierRule');

const { specialSymbols } = lexers,
      { ZeroOrMoreModifierRuleName } = ruleNames,
      { asterisk } = specialSymbols;

class ZeroOrMoreModifierRule extends Rule {
  constructor() {
    const name = ZeroOrMoreModifierRuleName,
          zeroOrMoreModifierTerminalSymbolContent = asterisk, ///
          zeroOrMoreModifierRuleDefinition = new ModifierRuleDefinition(zeroOrMoreModifierTerminalSymbolContent),
          definitions = [
            zeroOrMoreModifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}

module.exports = ZeroOrMoreModifierRule;
