"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import StringLiteralDefinition from "../../definition/stringLiteral";

import { WILDCARD_RULE_NAME } from "../../ruleNames";

const { wildcard } = specialSymbols;

export default class WildcardBNFRule extends Rule {
  static fromNothing() {
    const content = wildcard, ///
          wildcardStringLiteralDefinition = StringLiteralDefinition.fromContent(content),
          name = WILDCARD_RULE_NAME,  ///
          opacity = null,
          definitions = [
            wildcardStringLiteralDefinition
          ],
          wildcardRule = new WildcardBNFRule(name, opacity, definitions);

    return wildcardRule;
  }
}
