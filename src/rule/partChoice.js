"use strict";

import Rule from "../rule";
import PartChoiceBNFNode from "../node/bnf/partChoice";
import PartChoiceDefinition from "../definition/partChoice";

import { partChoiceRuleName } from "../ruleNames";

export default class PartChoiceRule extends Rule {
  static fromNothing() {
    const name = partChoiceRuleName,  ///
          partChoiceDefinition = PartChoiceDefinition.fromNothing(),
          opacity = null,
          definitions = [
            partChoiceDefinition
          ],
          NonTerminalNode = PartChoiceBNFNode,  ///
          definitionRule = new PartChoiceRule(name, opacity, definitions, NonTerminalNode);

    return definitionRule;
  }
}
