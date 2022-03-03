"use strict";

import Rule from "../rule";
import NameDefinition from "../definition/name";
import RuleNameBNFNode from "../bnf/node/ruleName";

import { RuleNameRuleName } from "../ruleNames";

export default class RuleNameRule extends Rule {
  constructor() {
    const nameDefinition = new NameDefinition(),
          name = RuleNameRuleName,
          definitions = [
            nameDefinition  ///
          ],
          Node = RuleNameBNFNode;
    
    super(name, definitions, Node)
  }
}
