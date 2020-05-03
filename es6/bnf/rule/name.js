"use strict";

import Rule from "../rule";
import NameNode from "../node/name";
import NameDefinition from "../definition/name";

import { NameRuleName } from "../ruleNames";

export default class NameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = NameRuleName,
          definitions = [
            nameDefinition
          ],
          Node = NameNode;
    
    super(name, definitions, Node)
  }
}
