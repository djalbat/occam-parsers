'use strict';

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { RightRecursivePartRuleName } = ruleNames;

class RightRecursivePartDefinition extends Definition {
  constructor(terminalSymbolContent) {
    let noWhitespace;

    noWhitespace = true;

    const terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, noWhitespace);

    noWhitespace = false;

    const lookAhead = false,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
          parts = [
            terminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = RightRecursivePartDefinition;
