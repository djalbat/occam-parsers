'use strict';

const Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

class RightRecursivePartRuleDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const terminalSymbolPartNoWhitespace = true,
          rightRecursivePartRuleName = 'rightRecursivePart',
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
