"use strict";

import Rule from "../../rule";
import PartChoiceBNFNode from "../../node/bnf/partChoice";
import PartChoiceDefinition from "../../definition/partChoice";

import { partChoiceRuleName } from "../../ruleNames";

export default class PartChoiceBNFRule extends Rule {
  static fromNothing() {
    const name = partChoiceRuleName,  ///
          partChoiceDefinition = PartChoiceDefinition.fromNothing(),
          opacity = null,
          definitions = [
            partChoiceDefinition
          ],
          NonTerminalNode = PartChoiceBNFNode,  ///
          definitionRule = new PartChoiceBNFRule(name, opacity, definitions, NonTerminalNode);

    return definitionRule;
  }
}
