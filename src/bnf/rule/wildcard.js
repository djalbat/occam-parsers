"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import WildcardNode from "../node/wildcard";
import TerminalSymbolDefinition from "../../definition/terminalSymbol";

import { WildcardRuleName } from "../ruleNames";

const { wildcard } = specialSymbols;

export default class WildcardRule extends Rule {
  constructor() {
    const wildcardTerminalSymbolContent = wildcard,
          wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
          name = WildcardRuleName,
          definitions = [
            wildcardTerminalSymbolDefinition
          ],
          Node = WildcardNode;

    super(name, definitions, Node)
  }
}
