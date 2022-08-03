"use strict";

import Rule from "../rule";
import ChoiceOfPartsBNFNode from "../node/bnf/choiceOfParts";
import ChoiceOfPartsDefinition from "../definition/choiceOfParts";

import { choiceOfPartsRuleName } from "../ruleNames";

export default class ChoiceOfPartsRule extends Rule {
  constructor() {
    const name = choiceOfPartsRuleName, ///
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
          ambiguous = false,
          definitions = [
            choiceOfPartsDefinition
          ],
          Node = ChoiceOfPartsBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
