"use strict";

import Rule from "../rule";
import DefinitionBNFNode from "../node/bnf/definition";
import DefinitionDefinition from "../definition/definition";

import { DefinitionRuleName } from "../ruleNames";

export default class DefinitionRule extends Rule {
  constructor() {
    const name = DefinitionRuleName,
          definitionDefinition = new DefinitionDefinition(),
          ambiguous = false,
          definitions = [
            definitionDefinition
          ],
          Node = DefinitionBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
