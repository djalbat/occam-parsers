'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { PartRuleName } = ruleNames;

class SequenceOfPartsDefinition extends Definition {
  constructor(terminalSymbolContent) {
    let noWhitespace;

    noWhitespace = false;

    const partRuleName = PartRuleName,
          partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace);

    noWhitespace = true;

    const terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace),
          parts = [
            partRuleNamePart,
            terminalSymbolPart
          ];
    
    super(parts)
  }
}

module.exports = SequenceOfPartsDefinition;
