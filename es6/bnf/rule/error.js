"use strict";

import Rule from "../rule";
import ErrorNode from "../node/error";
import ErrorDefinition from "../definition/error";

import { ErrorRuleName } from "../ruleNames";

export default class ErrorRule extends Rule {
  constructor() {
    const errorDefinition = new ErrorDefinition(),
          name = ErrorRuleName,
          definitions = [
            errorDefinition
          ],
          Node = ErrorNode;
    
    super(name, definitions, Node);
  }
}
