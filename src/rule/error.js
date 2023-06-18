"use strict";

import Rule from "../rule";
import ErrorBNFNode from "../node/bnf/error";
import ErrorDefinition from "../definition/error";

import { errorRuleName } from "../ruleNames";

export default class ErrorRule extends Rule {
  static fromNothing() {
    const errorDefinition = ErrorDefinition.fromNothing(),
          name = errorRuleName, ///
          ambiguous = false,
          definitions = [
            errorDefinition
          ],
          NonTerminalNode = ErrorBNFNode,
          errorRule = new ErrorRule(name, ambiguous, definitions, NonTerminalNode);

    return errorRule;
  }
}
