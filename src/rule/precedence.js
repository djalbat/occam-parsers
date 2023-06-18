"use strict";

import Rule from "../rule";
import PrecedenceBNFNode from "../node/bnf/precedence";
import PrecedenceDefinition from "../definition/precedence";

import { precedenceRuleName } from "../ruleNames";

export default class PrecedenceRule extends Rule {
  constructor() {
    const name = precedenceRuleName,  ///
          precedenceDefinition = new PrecedenceDefinition(),
          ambiguous = false,
          definitions = [
            precedenceDefinition
          ],
          Node = PrecedenceBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
