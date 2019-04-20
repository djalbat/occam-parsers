'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../../part/terminal/terminalSymbol'),
      OneOrMorePartsPart = require('../../part/nonTerminal/oneOrMoreParts');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { openBracket, closeBracket } = specialSymbols,
      { PartRuleName, RightRecursivePartRuleName } = ruleNames;

class GroupOfPartsPartRuleDefinition extends Definition {
  constructor() {
    const lookAhead = false,
          noWhitespace = false,
          partRuleName = PartRuleName,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partRuleNamePart = new RuleNamePart(partRuleName, lookAhead, noWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart, noWhitespace),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = GroupOfPartsPartRuleDefinition;
