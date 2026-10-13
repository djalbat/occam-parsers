"use strict";

import Rule from "../rule";
import SequenceOfPartsDefinition from "../definition/sequenceOfParts";

import { SEQUENCE_OF_PARTS_RULE_NAME } from "../ruleNames";

export default class SequenceOfPartsRule extends Rule {
  static fromNothing() {
    const name = SEQUENCE_OF_PARTS_RULE_NAME, ///
          sequenceOfPartsDefinition = SequenceOfPartsDefinition.fromNothing(),
          opacity = null,
          definitions = [
            sequenceOfPartsDefinition
          ],
          sequenceOfPartsRule = new SequenceOfPartsRule(name, opacity, definitions);

    return sequenceOfPartsRule;
  }
}
