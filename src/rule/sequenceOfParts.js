"use strict";

import Rule from "../rule";
import SequenceOfPartsBNFNode from "../node/bnf/sequenceOfParts";
import SequenceOfPartsDefinition from "../definition/sequenceOfParts";

import { SequenceOfPartsRuleName } from "../ruleNames";

export default class SequenceOfPartsRule extends Rule {
  constructor() {
    const name = SequenceOfPartsRuleName,
          sequenceOfPartsDefinition = new SequenceOfPartsDefinition(),
          definitions = [
            sequenceOfPartsDefinition
          ],
          Node = SequenceOfPartsBNFNode;

    super(name, definitions, Node)
  }
}
