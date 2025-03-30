"use strict";

import { types } from "occam-lexers";

import Rule from "../../rule";
import TerminalSymbolBNFNode from "../../node/bnf/terminalSymbol";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

import { terminalSymbolRuleName } from "../../ruleNames";

const { stringLiteralType } = types;

export default class TerminalSymbolBNFRule extends Rule {
  static fromNothing() {
    const significantTokenType = stringLiteralType,  ///
          stringLiteralSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = terminalSymbolRuleName,  ///
          opacity = null,
          definitions = [
            stringLiteralSignificantTokenTypeDefinition
          ],
          NonTerminalNode = TerminalSymbolBNFNode,  ///
          terminalSymbolRule = new TerminalSymbolBNFRule(name, opacity, definitions, NonTerminalNode);

    return terminalSymbolRule;
  }
}
