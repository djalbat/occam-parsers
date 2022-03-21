"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierBNFNode from "../node/bnf/quantifier";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { ZeroOrMoreQuantifierRuleName } from "../ruleNames";

const { asterisk } = specialSymbols;

export default class ZeroOrMoreQuantifierRule extends Rule {
  constructor() {
    const name = ZeroOrMoreQuantifierRuleName,
          zeroOrMoreQuantifierTerminalSymbolContent = asterisk, ///
          zeroOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(zeroOrMoreQuantifierTerminalSymbolContent),
          ambiguous = false,
          definitions = [
            zeroOrMoreQuantifierRuleDefinition
          ],
          Node = QuantifierBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
