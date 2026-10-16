"use strict";

import bnf from "./bnf";
import Rule from "../rule";
import parserMixins from "../mixins/parser";
import NonTerminalNodeMap from "../nonTerminalNodeMap";

import CutRule from "../rule/cut";
import NameRule from "../rule/name";
import PartRule from "../rule/part";
import RuleRule from "../rule/rule";
import ErrorRule from "../rule/error";
import EpsilonRule from "../rule/epsilon";
import DocumentRule from "../rule/document";
import RuleNameRule from "../rule/ruleName";
import WildcardRule from "../rule/wildcard";
import EndOfLineRule from "../rule/endOfLine";
import PartChoiceRule from "../rule/partChoice";
import QuantifierRule from "../rule/quantifier";
import DefinitionRule from "../rule/definition";
import PrecedentsRule from "../rule/precedence";
import DefinitionsRule from "../rule/definitions";
import IsolatedPartRule from "../rule/isolatedPart";
import TerminalPartRule from "../rule/terminalPart";
import ChoiceOfPartsRule from "../rule/choiceOfParts";
import StringLiteralRule from "../rule/stringLiteral";
import BranchingPartsRule from "../rule/branchingParts";
import NonTerminalPartRule from "../rule/nonTerminalPart";
import SequenceOfPartsRule from "../rule/sequenceOfParts";
import OpacityModifierRule from "../rule/opacityModifier";
import NoWhitespacePartRule from "../rule/noWhitespacePart";
import RegularExpressionRule from "../rule/regularExpression";
import OptionalQuantifierRule from "../rule/optionalQuantifier";
import OneOrMoreQuantifierRule from "../rule/oneOrMoreQuantifier";
import ZeroOrMoreQuantifierRule from "../rule/zeroOrMoreQuantifier";
import SignificantTokenTypeRule from "../rule/significantTokenType";

import { ruleMapFromRules } from "../utilities/rules";

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
    const cutRule = CutRule.fromNothing(),
          nameRule = NameRule.fromNothing(),
          partRule = PartRule.fromNothing(),
          ruleRule = RuleRule.fromNothing(),
          errorRule = ErrorRule.fromNothing(),
          epsilonRule = EpsilonRule.fromNothing(),
          documentRule = DocumentRule.fromNothing(),
          ruleNameRule = RuleNameRule.fromNothing(),
          wildcardRule = WildcardRule.fromNothing(),
          endOfLineRule = EndOfLineRule.fromNothing(),
          partChoiceRule = PartChoiceRule.fromNothing(),
          quantifierRule = QuantifierRule.fromNothing(),
          definitionRule = DefinitionRule.fromNothing(),
          precedentsRule = PrecedentsRule.fromNothing(),
          definitionsRule = DefinitionsRule.fromNothing(),
          terminalPartRule = TerminalPartRule.fromNothing(),
          isolatedPartRule = IsolatedPartRule.fromNothing(),
          choiceOfPartsRule = ChoiceOfPartsRule.fromNothing(),
          stringLiteralRule = StringLiteralRule.fromNothing(),
          branchingPartsRule = BranchingPartsRule.fromNothing(),
          nonTerminalPartRule = NonTerminalPartRule.fromNothing(),
          sequenceOfPartsRule = SequenceOfPartsRule.fromNothing(),
          opacityModifierRule = OpacityModifierRule.fromNothing(),
          noWhitespacePartRule = NoWhitespacePartRule.fromNothing(),
          regularExpressionRule = RegularExpressionRule.fromNothing(),
          optionalQuantifierRule = OptionalQuantifierRule.fromNothing(),
          oneOrMoreQuantifierRule = OneOrMoreQuantifierRule.fromNothing(),
          zeroOrMoreQuantifierRule = ZeroOrMoreQuantifierRule.fromNothing(),
          significantTokenTypeRule = SignificantTokenTypeRule.fromNothing(),
          rules = [
            cutRule,
            nameRule,
            partRule,
            ruleRule,
            errorRule,
            epsilonRule,
            documentRule,
            ruleNameRule,
            wildcardRule,
            endOfLineRule,
            partChoiceRule,
            quantifierRule,
            definitionRule,
            precedentsRule,
            definitionsRule,
            terminalPartRule,
            isolatedPartRule,
            choiceOfPartsRule,
            stringLiteralRule,
            branchingPartsRule,
            nonTerminalPartRule,
            sequenceOfPartsRule,
            opacityModifierRule,
            noWhitespacePartRule,
            regularExpressionRule,
            optionalQuantifierRule,
            oneOrMoreQuantifierRule,
            zeroOrMoreQuantifierRule,
            significantTokenTypeRule
          ],
          startRule = documentRule,  ///
          ruleMap = ruleMapFromRules(rules),
          bnfParser = new BNFParser(startRule, ruleMap);

    return bnfParser;
  }
}

Object.assign(BNFParser.prototype, parserMixins);
