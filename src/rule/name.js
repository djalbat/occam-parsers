"use strict";

import Rule from "../rule";
import NameBNFNode from "../node/bnf/name";
import NameDefinition from "../definition/name";

import { nameRuleName } from "../ruleNames";

export default class NameRule extends Rule {
  static fromNothing() {
    const nameDefinition = NameDefinition.fromNothing(),
          name = nameRuleName,  ///
          ambiguous = false,
          definitions = [
            nameDefinition
          ],
          NonTerminalNode = NameBNFNode,  ///
          nameRule = new NameRule(name, ambiguous, definitions, NonTerminalNode);

    return nameRule;
  }
}
