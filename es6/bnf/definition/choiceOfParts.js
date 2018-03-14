'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      ruleNames = require('../ruleNames'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { PartRuleName, RightRecursivePartRuleName } = ruleNames,
      { verticalBar, openBracket, closeBracket } = specialSymbols;

class ChoiceOfPartsDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          partRuleName = PartRuleName,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          verticalBarTerminalSymbolContent = verticalBar,
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partRuleNamePart = new RuleNamePart(partRuleName, noWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, noWhitespace),
          verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent, noWhitespace),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
          verticalBarTerminalSymbolThenPartRuleNameParts = [
            verticalBarTerminalSymbolPart,
            partRuleNamePart
          ],
          groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
          oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMoreGroupOfPartsPart,
            closeBracketTerminalSymbolPart,
            rightRecursivePartRuleNamePart
          ];
    
    super(parts)
  }
}

module.exports = ChoiceOfPartsDefinition;
