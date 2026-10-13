"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import StringLiteralDefinition from "../definition/stringLiteral";

import { EPSILON_RULE_NAME } from "../ruleNames";

const { epsilon } = specialSymbols;

export default class EpsilonRule extends Rule {
  static fromNothing() {
    const content = epsilon, ///
          epsilonStringLiteralDefinition = StringLiteralDefinition.fromContent(content),
          name = EPSILON_RULE_NAME, ///
          opacity = null,
          definitions = [
            epsilonStringLiteralDefinition
          ],
          epsilonRule = new EpsilonRule(name, opacity, definitions);

    return epsilonRule;
  }
}
