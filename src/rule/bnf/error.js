"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import ErrorBNFNode from "../../node/bnf/error";
import ErrorDefinition from "../../definition/error";

import { errorRuleName } from "../../ruleNames";

const { opaque } = specialSymbols;

export default class ErrorBNFRule extends Rule {
  static fromNothing() {
    const errorDefinition = ErrorDefinition.fromNothing(),
          name = errorRuleName, ///
          opacity = opaque, ///
          definitions = [
            errorDefinition
          ],
          NonTerminalNode = ErrorBNFNode, ///
          errorRule = new ErrorBNFRule(name, opacity, definitions, NonTerminalNode);

    return errorRule;
  }
}
