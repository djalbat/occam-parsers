"use strict";

import { types } from "occam-lexers";

import Rule from "../../rule";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

import { TERMINAL_SYMBOL_RULE_NAME } from "../../ruleNames";

const { stringLiteralType } = types;

export default class TerminalSymbolBNFRule extends Rule {
  static fromNothing() {
    const significantTokenType = stringLiteralType,  ///
          stringLiteralSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = TERMINAL_SYMBOL_RULE_NAME,  ///
          opacity = null,
          definitions = [
            stringLiteralSignificantTokenTypeDefinition
          ],
          terminalSymbolRule = new TerminalSymbolBNFRule(name, opacity, definitions);

    return terminalSymbolRule;
  }
}
