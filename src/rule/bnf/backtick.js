"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import StringLiteralDefinition from "../../definition/stringLiteral";

import { BACKTICK_RULE_NAME } from "../../ruleNames";

const { backtick } = specialSymbols;

export default class BacktickBNFRule extends Rule {
  static fromNothing() {
    const content = backtick, ///
          backtickStringLiteralDefinition = StringLiteralDefinition.fromContent(content),
          name = BACKTICK_RULE_NAME,  ///
          opacity = null,
          definitions = [
            backtickStringLiteralDefinition
          ],
          backtickRule = new BacktickBNFRule(name, opacity, definitions);

    return backtickRule;
  }
}
