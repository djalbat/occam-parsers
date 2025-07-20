"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import QuantifierRuleDefinition from "../../definition/quantifierRule";

import { ONE_OR_MORE_QUANTIFIER_RULE_NAME } from "../../ruleNames";

const { plus } = specialSymbols;

export default class OneOrMoreQuantifierBNFRule extends Rule {
  static fromNothing() {
    const name = ONE_OR_MORE_QUANTIFIER_RULE_NAME, ///
          specialSymbol = plus, ///
          oneOrMoreQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            oneOrMoreQuantifierRuleDefinition
          ],
          oneOrMoreQuantifierRule = new OneOrMoreQuantifierBNFRule(name, opacity, definitions);

    return oneOrMoreQuantifierRule;
  }
}
