"use strict";

import Rule from "../rule";
import SequenceOfPartsBNFNode from "../node/bnf/sequenceOfParts";
import SequenceOfPartsDefinition from "../definition/sequenceOfParts";

import { sequenceOfPartsRuleName } from "../ruleNames";

export default class SequenceOfPartsRule extends Rule {
  static fromNothing() {
    const name = sequenceOfPartsRuleName, ///
          sequenceOfPartsDefinition = SequenceOfPartsDefinition.fromNothing(),
          ambiguous = false,
          definitions = [
            sequenceOfPartsDefinition
          ],
          NonTerminalNode = SequenceOfPartsBNFNode, ///
          sequenceOfPartsRule = new SequenceOfPartsRule(name, ambiguous, definitions, NonTerminalNode);

    return sequenceOfPartsRule;
  }
}
