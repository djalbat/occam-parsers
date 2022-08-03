"use strict";

import Rule from "../rule";
import SequenceOfPartsBNFNode from "../node/bnf/sequenceOfParts";
import SequenceOfPartsDefinition from "../definition/sequenceOfParts";

import { sequenceOfPartsRuleName } from "../ruleNames";

export default class SequenceOfPartsRule extends Rule {
  constructor() {
    const name = sequenceOfPartsRuleName, ///
          sequenceOfPartsDefinition = new SequenceOfPartsDefinition(),
          ambiguous = false,
          definitions = [
            sequenceOfPartsDefinition
          ],
          Node = SequenceOfPartsBNFNode;

    super(name, ambiguous, definitions, Node)
  }
}
