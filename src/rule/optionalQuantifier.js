"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import QuantifierBNFNode from "../node/bnf/quantifier";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { optionalQuantifierRuleName } from "../ruleNames";

const { questionMark } = specialSymbols;

export default class OptionalQuantifierRule extends Rule {
  static fromNothing() {
    const name = optionalQuantifierRuleName,  ///
          specialSymbol = questionMark, ///
          optionalQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            optionalQuantifierRuleDefinition
          ],
          NonTerminalNode = QuantifierBNFNode,  ///
          optionalQuantifierRule = new OptionalQuantifierRule(name, opacity, definitions, NonTerminalNode);

    return optionalQuantifierRule;
  }
}
