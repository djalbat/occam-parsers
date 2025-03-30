"use strict";

import Rule from "../../rule";
import StartOfContentPartBNFNode from "../../node/bnf/startOfContentPart";
import StartOfContentPartDefinition from "../../definition/startOfContentPart";

import { startOfContentPartRuleName } from "../../ruleNames";

export default class StartOfContentPartBNFRule extends Rule {
  static fromNothing() {
    const startOfContentPartDefinition = StartOfContentPartDefinition.fromNothing(),
          name = startOfContentPartRuleName,  ///
          opacity = null,
          definitions = [
            startOfContentPartDefinition
          ],
          NonTerminalNode = StartOfContentPartBNFNode,  ///
          startOfContentPartRule = new StartOfContentPartBNFRule(name, opacity, definitions, NonTerminalNode);

    return startOfContentPartRule;
  }
}
