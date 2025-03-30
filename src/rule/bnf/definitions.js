"use strict";

import Rule from "../../rule";
import DefinitionsBNFNode from "../../node/bnf/definitions";
import DefinitionsDefinition from "../../definition/definitions";

import { definitionsRuleName } from "../../ruleNames";

export default class DefinitionsBNFRule extends Rule {
  static fromNothing() {
    const definitionsDefinition = DefinitionsDefinition.fromNothing(),
          name = definitionsRuleName, ///
          opacity = null,
          definitions = [
            definitionsDefinition
          ],
          NonTerminalNode = DefinitionsBNFNode, ///
          definitionsRule = new DefinitionsBNFRule(name, opacity, definitions, NonTerminalNode);

    return definitionsRule;
  }
}
