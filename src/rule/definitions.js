"use strict";

import Rule from "../rule";
import DefinitionsBNFNode from "../node/bnf/definitions";
import DefinitionsDefinition from "../definition/definitions";

import { DefinitionsRuleName } from "../ruleNames";

export default class DefinitionsRule extends Rule {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = DefinitionsRuleName,
          ambiguous = false,
          definitions = [
            definitionsDefinition
          ],
          Node = DefinitionsBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}