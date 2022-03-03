"use strict";

import Rule from "../rule";
import DefinitionsBNFNode from "../bnf/node/definitions";
import DefinitionsDefinition from "../definition/definitions";

import { DefinitionsRuleName } from "../ruleNames";

export default class DefinitionsRule extends Rule {
  constructor() {
    const definitionsDefinition = new DefinitionsDefinition(),
          name = DefinitionsRuleName,
          definitions = [
            definitionsDefinition
          ],
          Node = DefinitionsBNFNode;
    
    super(name, definitions, Node)
  }
}
