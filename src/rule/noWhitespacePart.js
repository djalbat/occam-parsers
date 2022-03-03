"use strict";

import Rule from "../rule";
import NoWhitespacePartBNFNode from "../bnf/node/noWhitespacePart";
import NoWhitespacePartDefinition from "../definition/noWhitespacePart";

import { NoWhitespacePartRuleName } from "../ruleNames";

export default class NoWhitespacePartRule extends Rule {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = NoWhitespacePartRuleName,
          definitions = [
            noWhitespacePartDefinition
          ],
          Node = NoWhitespacePartBNFNode;

    super(name, definitions, Node)
  }
}
