"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import QuantifierRuleDefinition from "../../definition/quantifierRule";

import { ZERO_OR_MORE_QUANTIFIER_RULE_NAME } from "../../ruleNames";

const { asterisk } = specialSymbols;

export default class ZeroOrMoreQuantifierBNFRule extends Rule {
  static fromNothing() {
    const name = ZERO_OR_MORE_QUANTIFIER_RULE_NAME,  ///
          specialSymbol = asterisk, ///
          zeroOrMoreQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            zeroOrMoreQuantifierRuleDefinition
          ],
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierBNFRule(name, opacity, definitions);

    return zeroOrMoreQuantifierRule;
  }
}
