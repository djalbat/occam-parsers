"use strict";

import Rule from "../rule";
import ErrorBNFNode from "../node/bnf/error";
import ErrorDefinition from "../definition/error";

import { errorRuleName } from "../ruleNames";

export default class ErrorRule extends Rule {
  constructor() {
    const errorDefinition = new ErrorDefinition(),
          name = errorRuleName, ///
          ambiguous = false,
          definitions = [
            errorDefinition
          ],
          Node = ErrorBNFNode;
    
    super(name, ambiguous, definitions, Node);
  }
}
