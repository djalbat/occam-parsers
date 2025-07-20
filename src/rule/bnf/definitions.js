"use strict";

import Rule from "../../rule";
import DefinitionsDefinition from "../../definition/definitions";

import { DEFINITIONS_RULE_NAME } from "../../ruleNames";

export default class DefinitionsBNFRule extends Rule {
  static fromNothing() {
    const definitionsDefinition = DefinitionsDefinition.fromNothing(),
          name = DEFINITIONS_RULE_NAME, ///
          opacity = null,
          definitions = [
            definitionsDefinition
          ],
          definitionsRule = new DefinitionsBNFRule(name, opacity, definitions);

    return definitionsRule;
  }
}
