"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import QuantifierBNFNode from "../../node/bnf/quantifier";
import QuantifierRuleDefinition from "../../definition/quantifierRule";

import { oneOrMoreQuantifierRuleName } from "../../ruleNames";

const { plus } = specialSymbols;

export default class OneOrMoreQuantifierBNFRule extends Rule {
  static fromNothing() {
    const name = oneOrMoreQuantifierRuleName, ///
          specialSymbol = plus, ///
          oneOrMoreQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            oneOrMoreQuantifierRuleDefinition
          ],
          NonTerminalNode = QuantifierBNFNode,  ///
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierBNFRule(name, opacity, definitions, NonTerminalNode);

    return oneOrMoreQuantifierRule;
  }
}
