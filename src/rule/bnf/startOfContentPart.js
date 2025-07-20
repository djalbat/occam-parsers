"use strict";

import Rule from "../../rule";
import StartOfContentPartDefinition from "../../definition/startOfContentPart";

import { START_OF_CONTENT_PART_RULE_NAME } from "../../ruleNames";

export default class StartOfContentPartBNFRule extends Rule {
  static fromNothing() {
    const startOfContentPartDefinition = StartOfContentPartDefinition.fromNothing(),
          name = START_OF_CONTENT_PART_RULE_NAME,  ///
          opacity = null,
          definitions = [
            startOfContentPartDefinition
          ],
          startOfContentPartRule = new StartOfContentPartBNFRule(name, opacity, definitions);

    return startOfContentPartRule;
  }
}
