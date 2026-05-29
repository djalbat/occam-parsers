"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

import { rulesAsString, rulesFromStartRuleAndRuleMap } from "../../utilities/rules";

export default class BasicView extends View {
  getNode(tokens) {
    const bnf = this.getBNF(),
          basicParser = BasicParser.fromBNF(bnf),
          node = basicParser.parse(tokens),
          ruleMap = basicParser.getRuleMap(),
          startRule = basicParser.getStartRule(),
          rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap),
          string  = rulesAsString(rules);

    console.log(string)

    return node;
  }

  static Lexer = BasicLexer;  ///

  static Parser = BasicParser;  ///

  static initialContent = `(1+2).`;

  static defaultProperties = {
    className: "basic"
  };
}
