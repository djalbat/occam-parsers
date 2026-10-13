"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { REGULAR_EXPRESSION_RULE_NAME } from "../ruleNames";

const { regularExpressionType } = types;

export default class RegularExpressionRule extends Rule {
  static fromNothing() {
    const significantTokenType = regularExpressionType,  ///
          regularExpressionSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = REGULAR_EXPRESSION_RULE_NAME, ///
          opacity = null,
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          regularExpressionRule = new RegularExpressionRule(name, opacity, definitions);

    return regularExpressionRule;
  }
}
