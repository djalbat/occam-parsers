"use strict";

import Rule from "../rule";
import NameBNFNode from "../node/bnf/name";
import NameDefinition from "../definition/name";

import { NameRuleName } from "../ruleNames";

export default class NameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = NameRuleName,
          ambiguous = false,
          definitions = [
            nameDefinition
          ],
          Node = NameBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}