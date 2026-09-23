"use strict";

import EpsilonPart from "./part/terminal/epsilon";
import RuleNamePart from "./part/nonTerminal/ruleName";
import WildcardPart from "./part/terminal/wildcard";
import EndOfLinePart from "./part/terminal/endOfLine";
import OptionalPartPart from "./part/nonTerminal/optionalPart";
import StringLiteralPart from "./part/terminal/stringLiteral";
import ChoiceOfPartsPart from "./part/nonTerminal/choiceOfParts";
import OneOrMorePartsPart from "./part/nonTerminal/oneOrMoreParts";
import SequenceOfPartsPart from "./part/nonTerminal/sequenceOfParts";
import ZeroOrMorePartsPart from "./part/nonTerminal/zeroOrMoreParts";
import RegularExpressionPart from "./part/terminal/regularExpression";
import SignificantTokenTypePart from "./part/terminal/significantTokenType";

export default {
  EpsilonPart,
  RuleNamePart,
  WildcardPart,
  EndOfLinePart,
  OptionalPartPart,
  ChoiceOfPartsPart,
  StringLiteralPart,
  OneOrMorePartsPart,
  SequenceOfPartsPart,
  ZeroOrMorePartsPart,
  RegularExpressionPart,
  SignificantTokenTypePart
};
