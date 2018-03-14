'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { openBracket, closeBracket } = specialSymbols,
      { PartRuleName, RightRecursivePartRuleName } = ruleNames;

class GroupOfPartsDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          partRuleName = PartRuleName,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart, noWhitespace),
          parts = [
            openBracketTerminalSymbolPart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = GroupOfPartsDefinition;
