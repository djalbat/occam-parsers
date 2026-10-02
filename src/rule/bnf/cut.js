"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import StringLiteralDefinition from "../../definition/stringLiteral";

import { CUT_RULE_NAME } from "../../ruleNames";

const { backtick } = specialSymbols;

export default class CutBNFRule extends Rule {
  static fromNothing() {
    const content = backtick, ///
          cutStringLiteralDefinition = StringLiteralDefinition.fromContent(content),
          name = CUT_RULE_NAME, ///
          opacity = null,
          definitions = [
            cutStringLiteralDefinition
          ],
          cutRule = new CutBNFRule(name, opacity, definitions);

    return cutRule;
  }
}
