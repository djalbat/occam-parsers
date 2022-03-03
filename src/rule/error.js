"use strict";

import Rule from "../rule";
import ErrorBNFNode from "../bnf/node/error";
import ErrorDefinition from "../definition/error";

import { ErrorRuleName } from "../ruleNames";

export default class ErrorRule extends Rule {
  constructor() {
    const errorDefinition = new ErrorDefinition(),
          name = ErrorRuleName,
          definitions = [
            errorDefinition
          ],
          Node = ErrorBNFNode;
    
    super(name, definitions, Node);
  }
}
