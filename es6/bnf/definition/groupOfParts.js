'use strict';

const lexers = require('occam-lexers');

const ruleNames = require('../ruleNames'),
      Definition = require('../definition'),
      RuleNamePart = require('../part/nonTerminal/ruleName'),
      TerminalSymbolPart = require('../part/terminal/terminalSymbol'),
      OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts');

const { PartRuleName } = ruleNames,
      { specialSymbols } = lexers,
      { openBracket, closeBracket } = specialSymbols;

class GroupOfPartsDefinition extends Definition {
  constructor() {
    const nonWhitespace = false,
          partRuleName = PartRuleName,
          openBracketTerminalSymbolContent = openBracket, ///
          closeBracketTerminalSymbolContent = closeBracket, ///
          partRuleNamePart = new RuleNamePart(partRuleName),
          openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, nonWhitespace),
          closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, nonWhitespace),
          oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
          parts = [
            openBracketTerminalSymbolPart,
            partRuleNamePart,
            oneOrMorePartRuleNamePartsPart,
            closeBracketTerminalSymbolPart
          ];

    super(parts)
  }
}

module.exports = GroupOfPartsDefinition;