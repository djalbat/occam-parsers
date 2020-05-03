"use strict";

import Rule from "../rule";
import DefinitionsNode from "../node/definitions";
import DefinitionsDefinition from "../definition/definitions";

import { DefinitionsRuleName } from "../ruleNames";

class DefinitionsRule extends Rule {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = DefinitionsRuleName,
          definitions = [
            definitionsDefinition
          ],
          Node = DefinitionsNode;
    
    super(name, definitions, Node)
  }
}

module.exports = DefinitionsRule;
