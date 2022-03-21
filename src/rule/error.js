"use strict";

import Rule from "../rule";
import ErrorBNFNode from "../node/bnf/error";
import ErrorDefinition from "../definition/error";

import { ErrorRuleName } from "../ruleNames";

export default class ErrorRule extends Rule {
  constructor() {
    const errorDefinition = new ErrorDefinition(),
          name = ErrorRuleName,
          ambiguous = false,
          definitions = [
            errorDefinition
          ],
          Node = ErrorBNFNode;
    
    super(name, ambiguous, definitions, Node);
  }
}
