'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      RuleNamePart = require('../part/ruleName'),
      TerminalSymbolPart = require('../part/terminalSymbol');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { separator, terminator } = specialSymbols;

class RuleDefinition extends Definition {
  constructor() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          ruleNameRuleName = 'ruleName',
          definitionsRuleName = 'definitions',
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
          terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
          definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
          ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
          parts = [
            ruleNameRuleNamePart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = RuleDefinition;
