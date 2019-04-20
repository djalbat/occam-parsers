'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { separator, terminator } = specialSymbols,
      { NameRuleName, DefinitionsRuleName } = ruleNames;

class RuleDefinition extends Definition {
  constructor() {
    const lookAhead = false,
          noWhitespace = false,
          separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          nameRuleName = NameRuleName,
          definitionsRuleName = DefinitionsRuleName,
          nameRuleNamePart = new RuleNamePart(nameRuleName, lookAhead, noWhitespace),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
          definitionsRuleNamePart = new RuleNamePart(definitionsRuleName, lookAhead, noWhitespace),
          terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent, noWhitespace),
          parts = [
            nameRuleNamePart,
            separatorTerminalSymbolPart,
            definitionsRuleNamePart,
            terminatorTerminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = RuleDefinition;
