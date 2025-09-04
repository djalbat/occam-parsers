"use strict";

import bnf from "./bnf";
import Rule from "../rule";
import NonTerminalNodeMap from "../nonTerminalNodeMap";
import parserMixins from "../mixins/parser";
import NameBNFRule from "../rule/bnf/name";
import PartBNFRule from "../rule/bnf/part";
import RuleBNFRule from "../rule/bnf/rule";
import ErrorBNFRule from "../rule/bnf/error";
import EpsilonBNFRule from "../rule/bnf/epsilon";
import DocumentBNFRule from "../rule/bnf/document";
import RuleNameBNFRule from "../rule/bnf/ruleName";
import WildcardBNFRule from "../rule/bnf/wildcard";
import EndOfLineBNFRule from "../rule/bnf/endOfLine";
import PartChoiceBNFRule from "../rule/bnf/partChoice";
import QuantifierBNFRule from "../rule/bnf/quantifier";
import DefinitionBNFRule from "../rule/bnf/definition";
import PrecedentsBNFRule from "../rule/bnf/precedence";
import DefinitionsBNFRule from "../rule/bnf/definitions";
import TerminalPartBNFRule from "../rule/bnf/terminalPart";
import ChoiceOfPartsBNFRule from "../rule/bnf/choiceOfParts";
import StringLiteralBNFRule from "../rule/bnf/stringLiteral";
import NonTerminalPartBNFRule from "../rule/bnf/nonTerminalPart";
import SequenceOfPartsBNFRule from "../rule/bnf/sequenceOfParts";
import OpacityModifierBNFRule from "../rule/bnf/opacityModifier";
import NoWhitespacePartBNFRule from "../rule/bnf/noWhitespacePart";
import CallAheadModifierBNFRule from "../rule/bnf/callAheadModifier";
import RegularExpressionBNFRule from "../rule/bnf/regularExpression";
import OptionalQuantifierBNFRule from "../rule/bnf/optionalQuantifier";
import StartOfContentPartBNFRule from "../rule/bnf/startOfContentPart";
import OneOrMoreQuantifierBNFRule from "../rule/bnf/oneOrMoreQuantifier";
import ZeroOrMoreQuantifierBNFRule from "../rule/bnf/zeroOrMoreQuantifier";
import SignificantTokenTypeBNFRule from "../rule/bnf/significantTokenType";

import { ruleMapFromRules, startRuleFromRules } from "../utilities/rules";

export default class BNFParser {
  constructor(startRule, ruleMap) {
    this.startRule = startRule;
    this.ruleMap = ruleMap;
  }

  getStartRule() {
    return this.startRule;
  }

  getRuleMap() {
    return this.ruleMap;
  }

	rulesFromTokens(tokens) {
	  let rules;

    const node = this.parse(tokens);

    if (node === null) {
      throw new Error(`There is no node.`);
    }

    rules = node.generateRules(Rule);

    const rulesLength = rules.length;

    if (rulesLength === 0) {
      throw new Error(`There are no rules.`);
    }

    return rules;
  }

  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = null;

  static bnf = bnf;

  static fromNothing() {
    const nameBNFRule = NameBNFRule.fromNothing(),
          partBNFRule = PartBNFRule.fromNothing(),
          ruleBNFRule = RuleBNFRule.fromNothing(),
          errorBNFRule = ErrorBNFRule.fromNothing(),
          epsilonBNFRule = EpsilonBNFRule.fromNothing(),
          documentBNFRule = DocumentBNFRule.fromNothing(),
          ruleNameBNFRule = RuleNameBNFRule.fromNothing(),
          wildcardBNFRule = WildcardBNFRule.fromNothing(),
          endOfLineBNFRule = EndOfLineBNFRule.fromNothing(),
          partChoiceBNFRule = PartChoiceBNFRule.fromNothing(),
          quantifierBNFRule = QuantifierBNFRule.fromNothing(),
          definitionBNFRule = DefinitionBNFRule.fromNothing(),
          precedentsBNFRule = PrecedentsBNFRule.fromNothing(),
          definitionsBNFRule = DefinitionsBNFRule.fromNothing(),
          terminalPartBNFRule = TerminalPartBNFRule.fromNothing(),
          choiceOfPartsBNFRule = ChoiceOfPartsBNFRule.fromNothing(),
          stringLiteralBNFRule = StringLiteralBNFRule.fromNothing(),
          nonTerminalPartBNFRule = NonTerminalPartBNFRule.fromNothing(),
          sequenceOfPartsBNFRule = SequenceOfPartsBNFRule.fromNothing(),
          opacityModifierBNFRule = OpacityModifierBNFRule.fromNothing(),
          noWhitespacePartBNFRule = NoWhitespacePartBNFRule.fromNothing(),
          regularExpressionBNFRule = RegularExpressionBNFRule.fromNothing(),
          callAheadModifierBNFRule = CallAheadModifierBNFRule.fromNothing(),
          optionalQuantifierBNFRule = OptionalQuantifierBNFRule.fromNothing(),
          startOfContentPartBNFRule = StartOfContentPartBNFRule.fromNothing(),
          oneOrMoreQuantifierBNFRule = OneOrMoreQuantifierBNFRule.fromNothing(),
          zeroOrMoreQuantifierBNFRule = ZeroOrMoreQuantifierBNFRule.fromNothing(),
          significantTokenTypeBNFRule = SignificantTokenTypeBNFRule.fromNothing(),
          rules = [
            documentBNFRule,
            ruleBNFRule,
            nameBNFRule,
            definitionsBNFRule,
            definitionBNFRule,
            partBNFRule,
            nonTerminalPartBNFRule,
            terminalPartBNFRule,
            startOfContentPartBNFRule,
            noWhitespacePartBNFRule,
            sequenceOfPartsBNFRule,
            choiceOfPartsBNFRule,
            partChoiceBNFRule,
            ruleNameBNFRule,
            significantTokenTypeBNFRule,
            regularExpressionBNFRule,
            stringLiteralBNFRule,
            precedentsBNFRule,
            endOfLineBNFRule,
            wildcardBNFRule,
            epsilonBNFRule,
            quantifierBNFRule,
            opacityModifierBNFRule,
            callAheadModifierBNFRule,
            optionalQuantifierBNFRule,
            oneOrMoreQuantifierBNFRule,
            zeroOrMoreQuantifierBNFRule,
            errorBNFRule
          ],
          startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules),
          bnfParser = new BNFParser(startRule, ruleMap);
    
    return bnfParser;
  }
}

Object.assign(BNFParser.prototype, parserMixins);
