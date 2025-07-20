"use strict";

import Rule from "../../rule";
import PrecedenceDefinition from "../../definition/precedence";

import { PRECEDENCE_RULE_NAME } from "../../ruleNames";

export default class PrecedenceBNFRule extends Rule {
  static fromNothing() {
    const name = PRECEDENCE_RULE_NAME,  ///
          precedenceDefinition = PrecedenceDefinition.fromNothing(),
          opacity = null,
          definitions = [
            precedenceDefinition
          ],
          precedenceRule = new PrecedenceBNFRule(name, opacity, definitions);

    return precedenceRule;
  }
}
