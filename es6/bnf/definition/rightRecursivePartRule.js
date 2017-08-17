'use strict';

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class RightRecursivePartRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const terminalSymbolPartNoWhitespace = true,
          rightRecursivePartRuleName = ruleNames.RightRecursivePartRule,
          terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolPartNoWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
          parts = [
            terminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RightRecursivePartRuleDefinition;
