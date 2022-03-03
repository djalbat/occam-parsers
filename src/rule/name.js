"use strict";

import Rule from "../rule";
import NameBNFNode from "../bnf/node/name";
import NameDefinition from "../definition/name";

import { NameRuleName } from "../ruleNames";

export default class NameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = NameRuleName,
          definitions = [
            nameDefinition
          ],
          Node = NameBNFNode;
    
    super(name, definitions, Node)
  }
}
