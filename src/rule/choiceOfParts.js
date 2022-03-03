"use strict";

import Rule from "../rule";
import ChoiceOfPartsBNFNode from "../node/bnf/choiceOfParts";
import ChoiceOfPartsDefinition from "../definition/choiceOfParts";

import { ChoiceOfPartsRuleName } from "../ruleNames";

export default class ChoiceOfPartsRule extends Rule {
  constructor() {
    const name = ChoiceOfPartsRuleName,
          choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
          definitions = [
            choiceOfPartsDefinition
          ],
          Node = ChoiceOfPartsBNFNode;
    
    super(name, definitions, Node)
  }
}
