"use strict";

import bnf from "./bnf";
import Rule from "./rule";
import NameRule from "./rule/name";
import PartRule from "./rule/part";
import RuleRule from "./rule/rule";
import ErrorRule from "./rule/error";
import EpsilonRule from "./rule/epsilon";
import CommonParser from "../common/parser";
import DocumentRule from "./rule/document";
import RuleNameRule from "./rule/ruleName";
import WildcardRule from "./rule/wildcard";
import EndOfLineRule from "./rule/endOfLine";
import QuantifierRule from "./rule/quantifier";
import DefinitionRule from "./rule/definition";
import DefinitionsRule from "./rule/definitions";
import TerminalPartRule from "./rule/terminalPart";
import GroupOfPartsRule from "./rule/groupOfParts";
import ChoiceOfPartsRule from "./rule/choiceOfParts";
import TerminalSymbolRule from "./rule/terminalSymbol";
import NonTerminalPartRule from "./rule/nonTerminalPart";
import NoWhitespacePartRule from "./rule/noWhitespacePart";
import LookAheadModifierRule from "./rule/lookAheadModifier";
import RegularExpressionRule from "./rule/regularExpression";
import OptionalQuantifierRule from "./rule/optionalQuantifier";
import OneOrMoreQuantifierRule from "./rule/oneOrMoreQuantifier";
import ZeroOrMoreQuantifierRule from "./rule/zeroOrMoreQuantifier";
import SignificantTokenTypeRule from "./rule/significantTokenType";

class BNFParser extends CommonParser {
	rulesFromTokens(tokens) {
    const node = this.parse(tokens),
          rules = (node !== null) ?
                    node.generateRules(Rule) :
                      [];

    return rules;
  }

  static fromNothing() {
    const nameRule = new NameRule(),
          partRule = new PartRule(),
          ruleRule = new RuleRule(),
          errorRule = new ErrorRule(),
          epsilonRule = new EpsilonRule(),
          documentRule = new DocumentRule(),
          ruleNameRule = new RuleNameRule(),
          wildcardRule = new WildcardRule(),
          endOfLineRule = new EndOfLineRule(),
          quantifierRule = new QuantifierRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalPartRule = new TerminalPartRule(),
          groupOfPartsRule = new GroupOfPartsRule(),
          choiceOfPartsRule = new ChoiceOfPartsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          nonTerminalPartRule = new NonTerminalPartRule(),
          noWhitespacePartRule = new NoWhitespacePartRule(),
          regularExpressionRule = new RegularExpressionRule(),
          lookAheadModifierRule = new LookAheadModifierRule(),
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
      choiceOfPartsRule,
      groupOfPartsRule,
      ruleNameRule,
      significantTokenTypeRule,
      regularExpressionRule,
      terminalSymbolRule,
      endOfLineRule,
      epsilonRule,
      wildcardRule,
      quantifierRule,
      lookAheadModifierRule,
      optionalQuantifierRule,
      oneOrMoreQuantifierRule,
      zeroOrMoreQuantifierRule,
      errorRule
    ];

    const bnfParser = new BNFParser(rules);
    
    return bnfParser;
  }
}

Object.assign(BNFParser, {
  bnf
});

module.exports = BNFParser;
