'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { PartRuleName } = ruleNames;

class SequenceOfPartsDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const noWhitespace = true,
          partRuleName = PartRuleName,
          partRuleNamePart = new RuleNamePart(partRuleName),
          terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace),
          parts = [
            partRuleNamePart,
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = SequenceOfPartsDefinition;
