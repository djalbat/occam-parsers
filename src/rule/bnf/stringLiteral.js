"use strict";

import { types } from "occam-lexers";

import Rule from "../../rule";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

import { STRING_LITERAL_RULE_NAME } from "../../ruleNames";

const { stringLiteralType } = types;

export default class StringLiteralBNFRule extends Rule {
  static fromNothing() {
    const significantTokenType = stringLiteralType,  ///
          stringLiteralSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = STRING_LITERAL_RULE_NAME,  ///
          opacity = null,
          definitions = [
            stringLiteralSignificantTokenTypeDefinition
          ],
          stringLiteralRule = new StringLiteralBNFRule(name, opacity, definitions);

    return stringLiteralRule;
  }
}
