"use strict";

const lexers = require("occam-lexers");

const ruleNames = require("../ruleNames"),
      Definition = require("../definition"),
      RuleNamePart = require("../part/nonTerminal/ruleName"),
      TerminalSymbolPart = require("../part/terminal/terminalSymbol");

const { specialSymbols } = lexers,
      { separator, terminator } = specialSymbols,
      { NameRuleName, DefinitionsRuleName } = ruleNames;

class RuleDefinition extends Definition {
  constructor() {
    const separatorTerminalSymbolContent = separator,
          terminatorTerminalSymbolContent = terminator,
          nameRuleName = NameRuleName,
          definitionsRuleName = DefinitionsRuleName,
          nameRuleNamePart = new RuleNamePart(nameRuleName),
          separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
          definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
          terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
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
