'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { RightRecursivePartRuleName } = ruleNames;

class RightRecursivePartDefinition extends Definition {
  constructor(terminalSymbolContent) {
    const content = terminalSymbolContent,  ///
		      noWhitespace = true,
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace),
		      rightRecursivePartRuleName = RightRecursivePartRuleName,
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
          parts = [
            terminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RightRecursivePartDefinition;
