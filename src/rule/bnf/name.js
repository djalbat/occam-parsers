"use strict";

import Rule from "../../rule";
import NameBNFNode from "../../node/bnf/name";
import NameDefinition from "../../definition/name";

import { nameRuleName } from "../../ruleNames";

export default class NameBNFRule extends Rule {
  static fromNothing() {
    const nameDefinition = NameDefinition.fromNothing(),
          name = nameRuleName,  ///
          opacity = null,
          definitions = [
            nameDefinition
          ],
          NonTerminalNode = NameBNFNode,  ///
          nameRule = new NameBNFRule(name, opacity, definitions, NonTerminalNode);

    return nameRule;
  }
}
