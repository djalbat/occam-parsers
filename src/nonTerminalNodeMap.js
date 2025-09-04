"use strict";

import PartBNFNode from "./node/bnf/part";
import NameBNFNode from "./node/bnf/name";
import RuleBNFNode from "./node/bnf/rule";
import ErrorBNFNode from "./node/bnf/error";
import EpsilonBNFNode from "./node/bnf/epsilon";
import DocumentBNFNode from "./node/bnf/document";
import RuleNameBNFNode from "./node/bnf/ruleName";
import WildcardBNFNode from "./node/bnf/wildcard";
import EndOfLineBNFNode from "./node/bnf/endOfLine";
import PartChoiceBNFNode from "./node/bnf/partChoice";
import PrecedenceBNFNode from "./node/bnf/precedence";
import QuantifierBNFNode from "./node/bnf/quantifier";
import DefinitionBNFNode from "./node/bnf/definition";
import DefinitionsBNFNode from "./node/bnf/definitions";
import TerminalPartBNFNode from "./node/bnf/terminalPart";
import ChoiceOfPartsBNFNode from "./node/bnf/choiceOfParts";
import StringLiteralBNFNode from "./node/bnf/stringLiteral";
import BonTerminalPartBNFNode from "./node/bnf/nonTerminalPart";
import SequenceOfPartsBNFNode from "./node/bnf/sequenceOfParts";
import OpacityModifierBNFNode from "./node/bnf/opacityModifier";
import NoWhitespacePartBNFNode from "./node/bnf/noWhitespacePart";
import CallAheadModifierBNFNode from "./node/bnf/callAheadModifier";
import RegularExpressionBNFNode from "./node/bnf/regularExpression";
import StartOfContentPartBNFNode from "./node/bnf/startOfContentPart";
import OptionalQuantifierBNFNode from "./node/bnf/optionalQuantifier";
import OneOrMoreQuantifierBNFNode from "./node/bnf/oneOneOrMoreQuantifier";
import SignificantTokenTypeBNFNode from "./node/bnf/significantTokenType";
import ZeroOrMoreQuantifierBNFNode from "./node/bnf/zeroOneOrMoreQuantifier";

import { NAME_RULE_NAME,
         PART_RULE_NAME,
         RULE_RULE_NAME,
         ERROR_RULE_NAME,
         EPSILON_RULE_NAME,
         DOCUMENT_RULE_NAME,
         WILDCARD_RULE_NAME,
         RULE_NAME_RULE_NAME,
         DEFINITION_RULE_NAME,
         PRECEDENCE_RULE_NAME,
         QUANTIFIER_RULE_NAME,
         END_OF_LINE_RULE_NAME,
         PART_CHOICE_RULE_NAME,
         DEFINITIONS_RULE_NAME,
         TERMINAL_PART_RULE_NAME,
         STRING_LITERAL_RULE_NAME,
         CHOICE_OF_PARTS_RULE_NAME,
         OPACITY_MODIFIER_RULE_NAME,
         NON_TERMINAL_PART_RULE_NAME,
         SEQUENCE_OF_PARTS_RULE_NAME,
         NO_WHITESPACE_PART_RULE_NAME,
         REGULAR_EXPRESSION_RULE_NAME,
         CALL_AHEAD_MODIFIER_RULE_NAME,
         OPTIONAL_QUANTIFIER_RULE_NAME,
         START_OF_CONTENT_PART_RULE_NAME,
         SIGNIFICANT_TOKEN_TYPE_RULE_NAME,
         ONE_OR_MORE_QUANTIFIER_RULE_NAME,
         ZERO_OR_MORE_QUANTIFIER_RULE_NAME } from "./ruleNames";

const NonTerminalNodeMap = {
  [NAME_RULE_NAME]: NameBNFNode,
  [PART_RULE_NAME]: PartBNFNode,
  [RULE_RULE_NAME]: RuleBNFNode,
  [ERROR_RULE_NAME]: ErrorBNFNode,
  [EPSILON_RULE_NAME]: EpsilonBNFNode,
  [DOCUMENT_RULE_NAME]: DocumentBNFNode,
  [WILDCARD_RULE_NAME]: WildcardBNFNode,
  [RULE_NAME_RULE_NAME]: RuleNameBNFNode,
  [DEFINITION_RULE_NAME]: DefinitionBNFNode,
  [PRECEDENCE_RULE_NAME]: PrecedenceBNFNode,
  [QUANTIFIER_RULE_NAME]: QuantifierBNFNode,
  [END_OF_LINE_RULE_NAME]: EndOfLineBNFNode,
  [PART_CHOICE_RULE_NAME]: PartChoiceBNFNode,
  [DEFINITIONS_RULE_NAME]: DefinitionsBNFNode,
  [TERMINAL_PART_RULE_NAME]: TerminalPartBNFNode,
  [STRING_LITERAL_RULE_NAME]: StringLiteralBNFNode,
  [CHOICE_OF_PARTS_RULE_NAME]: ChoiceOfPartsBNFNode,
  [OPACITY_MODIFIER_RULE_NAME]: OpacityModifierBNFNode,
  [NON_TERMINAL_PART_RULE_NAME]: BonTerminalPartBNFNode,
  [SEQUENCE_OF_PARTS_RULE_NAME]: SequenceOfPartsBNFNode,
  [NO_WHITESPACE_PART_RULE_NAME]: NoWhitespacePartBNFNode,
  [REGULAR_EXPRESSION_RULE_NAME]: RegularExpressionBNFNode,
  [CALL_AHEAD_MODIFIER_RULE_NAME]: CallAheadModifierBNFNode,
  [OPTIONAL_QUANTIFIER_RULE_NAME]: OptionalQuantifierBNFNode,
  [START_OF_CONTENT_PART_RULE_NAME]: StartOfContentPartBNFNode,
  [SIGNIFICANT_TOKEN_TYPE_RULE_NAME]: SignificantTokenTypeBNFNode,
  [ONE_OR_MORE_QUANTIFIER_RULE_NAME]: OneOrMoreQuantifierBNFNode,
  [ZERO_OR_MORE_QUANTIFIER_RULE_NAME]: ZeroOrMoreQuantifierBNFNode
};

export default NonTerminalNodeMap;