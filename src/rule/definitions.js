"use strict";

import Rule from "../rule";
import DefinitionsDefinition from "../definition/definitions";

import { DEFINITIONS_RULE_NAME } from "../ruleNames";

export default class DefinitionsRule extends Rule {
  static fromNothing() {
    const definitionsDefinition = DefinitionsDefinition.fromNothing(),
          name = DEFINITIONS_RULE_NAME, ///
          opacity = null,
          definitions = [
            definitionsDefinition
          ],
          definitionsRule = new DefinitionsRule(name, opacity, definitions);

    return definitionsRule;
  }
}
