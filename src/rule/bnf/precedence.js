"use strict";

import Rule from "../../rule";
import PrecedenceBNFNode from "../../node/bnf/precedence";
import PrecedenceDefinition from "../../definition/precedence";

import { precedenceRuleName } from "../../ruleNames";

export default class PrecedenceBNFRule extends Rule {
  static fromNothing() {
    const name = precedenceRuleName,  ///
          precedenceDefinition = PrecedenceDefinition.fromNothing(),
          opacity = null,
          definitions = [
            precedenceDefinition
          ],
          NonTerminalNode = PrecedenceBNFNode,  ///
          precedenceRule = new PrecedenceBNFRule(name, opacity, definitions, NonTerminalNode);

    return precedenceRule;
  }
}
