"use strict";

import Rule from "../rule";
import NoWhitespacePartNode from "../node/noWhitespacePart";
import NoWhitespacePartDefinition from "../../definition/noWhitespacePart";

import { NoWhitespacePartRuleName } from "../ruleNames";

export default class NoWhitespacePartRule extends Rule {
  constructor() {
    const noWhitespacePartDefinition = new NoWhitespacePartDefinition(),
          name = NoWhitespacePartRuleName,
          definitions = [
            noWhitespacePartDefinition
          ],
          Node = NoWhitespacePartNode;

    super(name, definitions, Node)
  }
}
