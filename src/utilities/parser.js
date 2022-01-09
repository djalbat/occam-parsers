"use strict";

import { BNFLexer } from "occam-lexers";

import BNFParser from "../bnf/parser";

import { startRuleFromRules, ruleMapFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function rulesFromBNF(bnf) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens);

  return rules;
}

export function parserFromRules(Class, rules) {
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        parser = new Class(startRule, ruleMap);

  return parser;
}
