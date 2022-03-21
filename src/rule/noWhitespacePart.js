"use strict";

import Rule from "../rule";
import NoWhitespacePartBNFNode from "../node/bnf/noWhitespacePart";
import NoWhitespacePartDefinition from "../definition/noWhitespacePart";

import { NoWhitespacePartRuleName } from "../ruleNames";

export default class NoWhitespacePartRule extends Rule {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = NoWhitespacePartRuleName,
          ambiguous = false,
          definitions = [
            noWhitespacePartDefinition
          ],
          Node = NoWhitespacePartBNFNode;

    super(name, ambiguous, definitions, Node)
  }
}
