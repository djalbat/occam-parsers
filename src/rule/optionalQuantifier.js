"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { OPTIONAL_QUANTIFIER_RULE_NAME } from "../ruleNames";

const { questionMark } = specialSymbols;

export default class OptionalQuantifierRule extends Rule {
  static fromNothing() {
    const name = OPTIONAL_QUANTIFIER_RULE_NAME,  ///
          specialSymbol = questionMark, ///
          optionalQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            optionalQuantifierRuleDefinition
          ],
          optionalQuantifierRule = new OptionalQuantifierRule(name, opacity, definitions);

    return optionalQuantifierRule;
  }
}
