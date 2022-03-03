"use strict";

import Rule from "../rule";
import SequenceOfPartsNode from "../node/sequenceOfParts";
import SequenceOfPartsDefinition from "../../definition/sequenceOfParts";

import { SequenceOfPartsRuleName } from "../ruleNames";

export default class SequenceOfPartsRule extends Rule {
  constructor() {
    const name = SequenceOfPartsRuleName,
          sequenceOfPartsDefinition = new SequenceOfPartsDefinition(),
          definitions = [
            sequenceOfPartsDefinition
          ],
          Node = SequenceOfPartsNode;

    super(name, definitions, Node)
  }
}
