"use strict";

import Rule from "../../rule";
import DefinitionDefinition from "../../definition/definition";

import { DEFINITION_RULE_NAME } from "../../ruleNames";

export default class DefinitionBNFRule extends Rule {
  static fromNothing() {
    const name = DEFINITION_RULE_NAME,  ///
          definitionDefinition = DefinitionDefinition.fromNothing(),
          opacity = null,
          definitions = [
            definitionDefinition
          ],
          definitionRule = new DefinitionBNFRule(name, opacity, definitions);

    return definitionRule;
  }
}
