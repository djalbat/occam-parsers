"use strict";

import bnf from "./bnf";
import Rule from "../rule";
import State from "../state";
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
import TerminalPartRule from "../rule/terminalPart";
import ChoiceOfPartsRule from "../rule/choiceOfParts";
import TerminalSymbolRule from "../rule/terminalSymbol";
import NonTerminalPartRule from "../rule/nonTerminalPart";
import SequenceOfPartsRule from "../rule/sequenceOfParts";
import NoWhitespacePartRule from "../rule/noWhitespacePart";
import LookAheadModifierRule from "../rule/lookAheadModifier";
import AmbiguousModifierRule from "../rule/ambiguousModifier";
import RegularExpressionRule from "../rule/regularExpression";
import OptionalQuantifierRule from "../rule/optionalQuantifier";
import OneOrMoreQuantifierRule from "../rule/oneOrMoreQuantifier";
import ZeroOrMoreQuantifierRule from "../rule/zeroOrMoreQuantifier";
import SignificantTokenTypeRule from "../rule/significantTokenType";

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

  parse(tokens, rule = this.startRule) {
    const state = State.fromTokensAndRuleMap(tokens, this.ruleMap),
          callback = null,
          precedence = null,
          parentRuleName = null,
          ruleNode = rule.parse(state, callback, precedence, parentRuleName),
          node = ruleNode; ///

    return node;
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

  static bnf = bnf;

  static fromNothing() {
    const nameRule = NameRule.fromNothing(),
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
          choiceOfPartsRule = ChoiceOfPartsRule.fromNothing(),
          terminalSymbolRule = TerminalSymbolRule.fromNothing(),
          nonTerminalPartRule = NonTerminalPartRule.fromNothing(),
          sequenceOfPartsRule = SequenceOfPartsRule.fromNothing(),
          noWhitespacePartRule = NoWhitespacePartRule.fromNothing(),
          regularExpressionRule = RegularExpressionRule.fromNothing(),
          lookAheadModifierRule = LookAheadModifierRule.fromNothing(),
          ambiguousModifierRule = AmbiguousModifierRule.fromNothing(),
          optionalQuantifierRule = OptionalQuantifierRule.fromNothing(),
          oneOrMoreQuantifierRule = OneOrMoreQuantifierRule.fromNothing(),
          zeroOrMoreQuantifierRule = ZeroOrMoreQuantifierRule.fromNothing(),
          significantTokenTypeRule = SignificantTokenTypeRule.fromNothing();

    let rules = [
      documentRule,
      ruleRule,
      nameRule,
      definitionsRule,
      definitionRule,
      partRule,
      nonTerminalPartRule,
      terminalPartRule,
      noWhitespacePartRule,
      sequenceOfPartsRule,
      choiceOfPartsRule,
      partChoiceRule,
      ruleNameRule,
      significantTokenTypeRule,
      regularExpressionRule,
      terminalSymbolRule,
      precedentsRule,
      endOfLineRule,
      wildcardRule,
      epsilonRule,
      quantifierRule,
      ambiguousModifierRule,
      lookAheadModifierRule,
      optionalQuantifierRule,
      oneOrMoreQuantifierRule,
      zeroOrMoreQuantifierRule,
      errorRule
    ];

    const startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules),
          bnfParser = new BNFParser(startRule, ruleMap);
    
    return bnfParser;
  }
}
