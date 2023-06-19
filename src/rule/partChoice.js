"use strict";

import Rule from "../rule";
import PartChoiceBNFNode from "../node/bnf/partChoice";
import PartChoiceDefinition from "../definition/partChoice";

import { partChoiceRuleName } from "../ruleNames";

export default class PartChoiceRule extends Rule {
  static fromNothing() {
    const name = partChoiceRuleName,  ///
          partChoiceDefinition = PartChoiceDefinition.fromNothing(),
          ambiguous = false,
          definitions = [
            partChoiceDefinition
          ],
          NonTerminalNode = PartChoiceBNFNode,  ///
          definitionRule = new PartChoiceRule(name, ambiguous, definitions, NonTerminalNode);

    return definitionRule;
  }
}
