"use strict";

import Rule from "../../rule";
import NameDefinition from "../../definition/name";

import { NAME_RULE_NAME } from "../../ruleNames";

export default class NameBNFRule extends Rule {
  static fromNothing() {
    const nameDefinition = NameDefinition.fromNothing(),
          name = NAME_RULE_NAME,  ///
          opacity = null,
          definitions = [
            nameDefinition
          ],
          nameRule = new NameBNFRule(name, opacity, definitions);

    return nameRule;
  }
}
