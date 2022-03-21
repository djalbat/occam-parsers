"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierBNFNode from "../node/bnf/quantifier";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { OptionalQuantifierRuleName } from "../ruleNames";

const { questionMark } = specialSymbols;

export default class OptionalQuantifierRule extends Rule {
  constructor() {
    const name = OptionalQuantifierRuleName,
          optionalQuantifierTerminalSymbolContent = questionMark, ///
          optionalQuantifierRuleDefinition = new QuantifierRuleDefinition(optionalQuantifierTerminalSymbolContent),
          ambiguous = false,
          definitions = [
            optionalQuantifierRuleDefinition
          ],
          Node = QuantifierBNFNode;
    
    super(name, ambiguous, definitions, Node)
  }
}
