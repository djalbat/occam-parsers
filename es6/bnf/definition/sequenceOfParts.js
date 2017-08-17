'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class SequenceOfPartsDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const partRuleName = ruleNames.PartRule,
          terminalSymbolNoWhitespace = true,
          partRuleNamePart = new RuleNamePart(partRuleName),
          terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolNoWhitespace),
          parts = [
            partRuleNamePart,
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = SequenceOfPartsDefinition;
