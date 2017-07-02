'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      GroupOfPartsPart = require('../part/groupOfParts'),
      TerminalSymbolPart = require('../part/terminalSymbol'),
      ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { verticalBar } = specialSymbols;

class DefinitionsDefinition extends Definition {
  constructor() {
    const definitionRuleName = 'definition',
          verticalBarTerminalSymbolContent = verticalBar,
          definitionRuleNamePart = new RuleNamePart(definitionRuleName),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
          verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
            verticalBarTerminalSymbolPart,
            definitionRuleNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenDefinitionRuleNameParts),
          zeroOrMoreGroupOfPartsPart = new ZeroOrMorePartsPart(groupOfPartsPart),
          parts = [
            definitionRuleNamePart,
            zeroOrMoreGroupOfPartsPart
          ];
    
    super(parts)
  }
}

module.exports = DefinitionsDefinition;
