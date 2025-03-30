"use strict";

import Rule from "../../rule";
import NoWhitespacePartBNFNode from "../../node/bnf/noWhitespacePart";
import NoWhitespacePartDefinition from "../../definition/noWhitespacePart";

import { noWhitespacePartRuleName } from "../../ruleNames";

export default class NoWhitespacePartBNFRule extends Rule {
  static fromNothing() {
    const noWhitespacePartDefinition = NoWhitespacePartDefinition.fromNothing(),
          name = noWhitespacePartRuleName,  ///
          opacity = null,
          definitions = [
            noWhitespacePartDefinition
          ],
          NonTerminalNode = NoWhitespacePartBNFNode,  ///
          noWhitespacePartRule = new NoWhitespacePartBNFRule(name, opacity, definitions, NonTerminalNode);

    return noWhitespacePartRule;
  }
}
