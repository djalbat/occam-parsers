"use strict";

import bnf from "./bnf";
import Rule from "../rule";
import State from "../state";
import NameRule from "../rule/name";
import PartRule from "../rule/part";
import RuleRule from "../rule/rule";
import ErrorRule from "../rule/error";
import DocumentRule from "../rule/document";
import RuleNameRule from "../rule/ruleName";
import WildcardRule from "../rule/wildcard";
import EndOfLineRule from "../rule/endOfLine";
import QuantifierRule from "../rule/quantifier";
import DefinitionRule from "../rule/definition";
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

import { startRuleFromRules, ruleMapFromRules } from "../utilities/rules";

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
          ruleNode = rule.parse(state, callback),
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
    const nameRule = new NameRule(),
          partRule = new PartRule(),
          ruleRule = new RuleRule(),
          errorRule = new ErrorRule(),
          documentRule = new DocumentRule(),
          ruleNameRule = new RuleNameRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          quantifierRule = new QuantifierRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalPartRule = new TerminalPartRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          nonTerminalPartRule = new NonTerminalPartRule(),
          sequenceOfPartsRule = new SequenceOfPartsRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
          ambiguousModifierRule = new AmbiguousModifierRule(),
          optionalQuantifierRule = new OptionalQuantifierRule(),
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierRule(),
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

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
      ruleNameRule,
      significantTokenTypeRule,
      regularExpressionRule,
      terminalSymbolRule,
      endOfLineRule,
      wildcardRule,
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
