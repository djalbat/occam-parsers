"use strict";

import Rule from "../../rule";
import NoWhitespacePartDefinition from "../../definition/noWhitespacePart";

import { NO_WHITESPACE_PART_RULE_NAME } from "../../ruleNames";

export default class NoWhitespacePartBNFRule extends Rule {
  static fromNothing() {
    const noWhitespacePartDefinition = NoWhitespacePartDefinition.fromNothing(),
          name = NO_WHITESPACE_PART_RULE_NAME,  ///
          opacity = null,
          definitions = [
            noWhitespacePartDefinition
          ],
          noWhitespacePartRule = new NoWhitespacePartBNFRule(name, opacity, definitions);

    return noWhitespacePartRule;
  }
}
