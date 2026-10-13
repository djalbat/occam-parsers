"use strict";

import Rule from "../rule";
import CutDefinition from "../definition/cut";

import { CUT_RULE_NAME } from "../ruleNames";

export default class CutRule extends Rule {
  static fromNothing() {
    const cutDefinition = CutDefinition.fromNothing(),
          name = CUT_RULE_NAME, ///
          opacity = null,
          definitions = [
            cutDefinition,
          ],
          cutRule = new CutRule(name, opacity, definitions);

    return cutRule;
  }
}
