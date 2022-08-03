"use strict";

import Rule from "../rule";
import NoWhitespacePartBNFNode from "../node/bnf/noWhitespacePart";
import NoWhitespacePartDefinition from "../definition/noWhitespacePart";

import { noWhitespacePartRuleName } from "../ruleNames";

export default class NoWhitespacePartRule extends Rule {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = noWhitespacePartRuleName,  ///
          ambiguous = false,
          definitions = [
            noWhitespacePartDefinition
          ],
          Node = NoWhitespacePartBNFNode;

    super(name, ambiguous, definitions, Node)
  }
}
