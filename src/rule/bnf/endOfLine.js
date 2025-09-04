"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import StringLiteralDefinition from "../../definition/stringLiteral";

import { END_OF_LINE_RULE_NAME } from "../../ruleNames";

const { endOfLine } = specialSymbols;

export default class EndOfLineBNFRule extends Rule {
  static fromNothing() {
    const content = endOfLine,
          endOfLineStringLiteralDefinition = StringLiteralDefinition.fromContent(content),
          name = END_OF_LINE_RULE_NAME, ///
          opacity = null,
          definitions = [
            endOfLineStringLiteralDefinition
          ],
          endOfLineRule = new EndOfLineBNFRule(name, opacity, definitions);

    return endOfLineRule;
  }
}
