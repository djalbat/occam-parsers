"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import ErrorDefinition from "../../definition/error";

import { ERROR_RULE_NAME } from "../../ruleNames";

const { opaque } = specialSymbols;

export default class ErrorBNFRule extends Rule {
  static fromNothing() {
    const errorDefinition = ErrorDefinition.fromNothing(),
          name = ERROR_RULE_NAME, ///
          opacity = opaque, ///
          definitions = [
            errorDefinition
          ],
          errorRule = new ErrorBNFRule(name, opacity, definitions);

    return errorRule;
  }
}
