"use strict";

import EpsilonPart from "./part/terminal/epsilon";
import WildcardPart from "./part/terminal/wildcard";
import EndOfLinePart from "./part/terminal/endOfLine";
import TerminalSymbolPart from "./part/terminal/terminalSymbol";
import RegularExpressionPart from "./part/terminal/regularExpression";
import SignificantTokenTypePart from "./part/terminal/significantTokenType";
import RuleNamePart from "./part/nonTerminal/ruleName";
import OptionalPartPart from "./part/nonTerminal/optionalPart";
import ZeroOrMorePartsPart from "./part/nonTerminal/zeroOrMoreParts";
import OneOrMorePartsPart from "./part/nonTerminal/oneOrMoreParts";
import SequenceOfPartsPart from "./part/nonTerminal/sequenceOfParts";
import ChoiceOfPartsPart from "./part/nonTerminal/choiceOfParts";

export default {
  EpsilonPart,
  WildcardPart,
  EndOfLinePart,
  TerminalSymbolPart,
  RegularExpressionPart,
  SignificantTokenTypePart,
  RuleNamePart,
  OptionalPartPart,
  ZeroOrMorePartsPart,
  OneOrMorePartsPart,
  SequenceOfPartsPart,
  ChoiceOfPartsPart
};
