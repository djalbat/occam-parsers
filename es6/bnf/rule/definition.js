"use strict";

import Rule from "../rule";
import DefinitionNode from "../node/definition";
import DefinitionDefinition from "../definition/definition";

import { DefinitionRuleName } from "../ruleNames";

export default class DefinitionRule extends Rule {
  constructor() {
    const name = DefinitionRuleName,
          definitionDefinition = new DefinitionDefinition(),
          definitions = [
            definitionDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}
