"use strict";

import { first } from "../utilities/array";
import { BNFLexer } from "occam-lexers";

import BNFParser from "../bnf/parser";

import { EMPTY_STRING } from "../constants";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function rulesFromBNF(bnf) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens);

  return rules;
}

export function rulesAsString(rules, multiLine) {
  const maximumRuleNameLength = rules.reduce((maximumRuleNameLength, rule) => {
        const ruleName = rule.getName(),
              ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
      rulesString = rules.reduce((rulesString, rule) => {
        const ruleString = rule.asString(maximumRuleNameLength, multiLine);

        rulesString += ruleString;

        return rulesString;
      }, EMPTY_STRING).replace(/^\n\n/, EMPTY_STRING);

  return rulesString;
}

export function ruleMapFromRules(rules) {
  const ruleMap = {};

  rules.forEach((rule) => {
    const ruleName = rule.getName();

    ruleMap[ruleName] = rule;
  });

  return ruleMap;
}

export function startRuleFromRules(rules) {
  const firstRule = first(rules),
      startRule = firstRule;  ///

  return startRule;
}

export default {
  rulesFromBNF,
  rulesAsString,
  ruleMapFromRules,
  startRuleFromRules
};
