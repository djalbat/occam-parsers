"use strict";

import Rule from "../rule";
import SequenceOfPartsBNFNode from "../node/bnf/sequenceOfParts";
import SequenceOfPartsDefinition from "../definition/sequenceOfParts";

import { sequenceOfPartsRuleName } from "../ruleNames";

export default class SequenceOfPartsRule extends Rule {
  static fromNothing() {
    const name = sequenceOfPartsRuleName, ///
          sequenceOfPartsDefinition = SequenceOfPartsDefinition.fromNothing(),
          opacity = null,
          definitions = [
            sequenceOfPartsDefinition
          ],
          NonTerminalNode = SequenceOfPartsBNFNode, ///
          sequenceOfPartsRule = new SequenceOfPartsRule(name, opacity, definitions, NonTerminalNode);

    return sequenceOfPartsRule;
  }
}
