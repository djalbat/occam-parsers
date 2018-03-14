'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { RightRecursivePartRuleName } = ruleNames;

class RightRecursivePartRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    let noWhitespace;

    noWhitespace = true;

    const terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace);

    noWhitespace = false;

    const rightRecursivePartRuleName = RightRecursivePartRuleName,
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
          parts = [
            terminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RightRecursivePartRuleDefinition;
