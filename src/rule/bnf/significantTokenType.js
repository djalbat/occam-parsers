"use strict";

import { types } from "occam-lexers";

import Rule from "../../rule";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

import { SIGNIFICANT_TOKEN_TYPE_RULE_NAME } from "../../ruleNames";

const { typeType } = types;

export default class SignificantTokenTypeBNFRule extends Rule {
  static fromNothing() {
    const significantTokenType = typeType,  ///
          typeSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = SIGNIFICANT_TOKEN_TYPE_RULE_NAME,  ///
          opacity = null,
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          significantTokenTypeRule = new SignificantTokenTypeBNFRule(name, opacity, definitions);

    return significantTokenTypeRule;
  }
}
