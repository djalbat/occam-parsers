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

    const content = terminalSymbolContent,  ///
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

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

module.exports = RightRecursivePartDefinition;
