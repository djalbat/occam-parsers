"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import WildcardBNFNode from "../node/bnf/wildcard";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { wildcardRuleName } from "../ruleNames";

const { wildcard } = specialSymbols;

export default class WildcardRule extends Rule {
  constructor() {
    const wildcardTerminalSymbolContent = wildcard, ///
          wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
          name = wildcardRuleName,  ///
          ambiguous = false,
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          Node = WildcardBNFNode;

    super(name, ambiguous, definitions, Node)
  }
}
