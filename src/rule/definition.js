"use strict";

import Rule from "../rule";
import DefinitionBNFNode from "../node/bnf/definition";
import DefinitionDefinition from "../definition/definition";

import { definitionRuleName } from "../ruleNames";

export default class DefinitionRule extends Rule {
  static fromNothing() {
    const name = definitionRuleName,  ///
          definitionDefinition = DefinitionDefinition.fromNothing(),
          opacity = null,
          definitions = [
            definitionDefinition
          ],
          NonTerminalNode = DefinitionBNFNode,  ///
          definitionRule = new DefinitionRule(name, opacity, definitions, NonTerminalNode);

    return definitionRule;
  }
}
