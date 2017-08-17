'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { separator, terminator } = specialSymbols;

class RuleDefinition extends Definition {
  constructor() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          ruleNameRuleName = ruleNames.RuleNameRule,
          definitionsRuleName = ruleNames.DefinitionsRule,
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
