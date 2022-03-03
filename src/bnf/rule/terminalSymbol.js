"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import TerminalSymbolNode from "../node/terminalSymbol";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

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
          Node = TerminalSymbolNode;

    super(name, definitions, Node)
  }
}
