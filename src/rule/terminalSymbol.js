"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import TerminalSymbolBNFNode from "../node/bnf/terminalSymbol";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { TerminalSymbolRuleName } from "../ruleNames";

const { stringLiteralType } = types;

export default class TerminalSymbolRule extends Rule {
  constructor() {
    const stringLiteralSignificantTokenType = stringLiteralType,  ///
          stringLiteralSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringLiteralSignificantTokenType),
          name = TerminalSymbolRuleName,
          definitions = [
            stringLiteralSignificantTokenTypeDefinition
          ],
          Node = TerminalSymbolBNFNode;

    super(name, definitions, Node)
  }
}
