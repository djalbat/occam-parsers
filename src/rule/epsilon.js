"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import EpsilonBNFNode from "../node/bnf/epsilon";
import TerminalSymbolDefinition from "../definition/terminalSymbol";

import { epsilonRuleName } from "../ruleNames";

const { epsilon } = specialSymbols;

export default class EpsilonRule extends Rule {
  constructor() {
    const epsilonTerminalSymbolContent = epsilon, ///
          epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
          name = epsilonRuleName, ///
          ambiguous = false,
          definitions = [
            epsilonTerminalSymbolDefinition
          ],
          Node = EpsilonBNFNode;

    super(name, ambiguous, definitions, Node)
  }
}
