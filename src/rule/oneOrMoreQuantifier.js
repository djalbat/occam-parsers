"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierBNFNode from "../node/bnf/quantifier";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { oneOrMoreQuantifierRuleName } from "../ruleNames";

const { plus } = specialSymbols;

export default class OneOrMoreQuantifierRule extends Rule {
  static fromNothing() {
    const name = oneOrMoreQuantifierRuleName, ///
          specialSymbol = plus, ///
          oneOrMoreQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            oneOrMoreQuantifierRuleDefinition
          ],
          NonTerminalNode = QuantifierBNFNode,  ///
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierRule(name, opacity, definitions, NonTerminalNode);

    return oneOrMoreQuantifierRule;
  }
}
