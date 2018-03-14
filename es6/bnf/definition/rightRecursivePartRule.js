'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { RightRecursivePartRuleName } = ruleNames;

class RightRecursivePartRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const noWhitespace = false,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
          parts = [
            terminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RightRecursivePartRuleDefinition;
