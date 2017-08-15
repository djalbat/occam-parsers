'use strict';

const EpsilonPart = require('./part/terminal/epsilon'),
      WildcardPart = require('./part/terminal/wildcard'),
      EndOfLinePart = require('./part/terminal/endOfLine'),
      TerminalSymbolPart = require('./part/terminal/terminalSymbol'),
      RegularExpressionPart = require('./part/terminal/regularExpression'),
      SignificantTokenTypePart = require('./part/terminal/significantTokenType'),
      RuleNamePart = require('./part/nonTerminal/ruleName'),
      OptionalPartPart = require('./part/nonTerminal/optionalPart'),
      ZeroOrMorePartsPart = require('./part/nonTerminal/zeroOrMoreParts'),
      OneOrMorePartsPart = require('./part/nonTerminal/oneOrMoreParts'),
      GroupOfPartsPart = require('./part/nonTerminal/groupOfParts'),
      ChoiceOfPartsPart = require('./part/nonTerminal/choiceOfParts');

module.exports = {
  EpsilonPart: EpsilonPart,
  WildcardPart: WildcardPart,
  EndOfLinePart: EndOfLinePart,
  TerminalSymbolPart: TerminalSymbolPart,
  RegularExpressionPart: RegularExpressionPart,
  SignificantTokenTypePart: SignificantTokenTypePart,
  RuleNamePart: RuleNamePart,
  OptionalPartPart: OptionalPartPart,
  ZeroOrMorePartsPart: ZeroOrMorePartsPart,
  OneOrMorePartsPart: OneOrMorePartsPart,
  GroupOfPartsPart: GroupOfPartsPart,
  ChoiceOfPartsPart: ChoiceOfPartsPart
};
