"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierBNFNode from "../node/bnf/quantifier";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { oneOrMoreQuantifierRuleName } from "../ruleNames";

const { plus } = specialSymbols;

export default class OneOrMoreQuantifierRule extends Rule {
  constructor() {
    const name = oneOrMoreQuantifierRuleName, ///
          oneOrMoreQuantifierTerminalSymbolContent = plus, ///
          oneOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(oneOrMoreQuantifierTerminalSymbolContent),
          ambiguous = false,
          definitions = [
            oneOrMoreQuantifierRuleDefinition
          ],
          Node = QuantifierBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
