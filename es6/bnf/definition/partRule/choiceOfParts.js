'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../../ruleNames'),
      Definition = require('../../definition'),
      RuleNamePart = require('../../part/nonTerminal/ruleName'),
      GroupOfPartsPart = require('../../part/nonTerminal/groupOfParts'),
      OneOrMorePartsPart = require('../../part/nonTerminal/oneOrMoreParts'),
      TerminalSymbolPart = require('../../part/terminal/terminalSymbol');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { verticalBar, openBracket, closeBracket } = specialSymbols,
      { PartRuleName, RightRecursivePartRuleName } = ruleNames;

class ChoiceOfPartsPartRuleDefinition extends Definition {
  constructor() {
    const lookAhead = false,
          noWhitespace = false,
          partRuleName = PartRuleName,
          rightRecursivePartRuleName = RightRecursivePartRuleName,
          verticalBarTerminalSymbolContent = verticalBar,
          openBracketTerminalSymbolContent = openBracket,
          closeBracketTerminalSymbolContent = closeBracket,
          partRuleNamePart = new RuleNamePart(partRuleName, lookAhead, noWhitespace),
          rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName, lookAhead, noWhitespace),
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

module.exports = ChoiceOfPartsPartRuleDefinition;
