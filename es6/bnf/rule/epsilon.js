"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import EpsilonNode from "../node/epsilon";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { EpsilonRuleName } from "../ruleNames";

const { epsilon } = specialSymbols;

export default class EpsilonRule extends Rule {
  constructor() {
    const epsilonTerminalSymbolContent = epsilon,
          epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
          name = EpsilonRuleName,
          definitions = [
            epsilonTerminalSymbolDefinition
          ],
          Node = EpsilonNode;

    super(name, definitions, Node)
  }
}
