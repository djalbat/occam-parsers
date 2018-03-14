'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { DefinitionRuleName } = ruleNames,
      { verticalBar } = specialSymbols;

class DefinitionsDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          definitionRuleName = DefinitionRuleName,
          verticalBarTerminalSymbolContent = verticalBar,
          definitionRuleNamePart = new RuleNamePart(definitionRuleName, noWhitespace),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent, noWhitespace),
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
