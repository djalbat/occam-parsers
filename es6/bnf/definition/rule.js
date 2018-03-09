'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { separator, terminator } = specialSymbols,
      { RuleNameRuleName, DefinitionsRuleName } = ruleNames;

class RuleDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          ruleNameRuleName = RuleNameRuleName,
          definitionsRuleName = DefinitionsRuleName,
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
          terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, noWhitespace),
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
