"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../../rule";
import QuantifierBNFNode from "../../node/bnf/quantifier";
import QuantifierRuleDefinition from "../../definition/quantifierRule";

import { zeroOrMoreQuantifierRuleName } from "../../ruleNames";

const { asterisk } = specialSymbols;

export default class ZeroOrMoreQuantifierBNFRule extends Rule {
  static fromNothing() {
    const name = zeroOrMoreQuantifierRuleName,  ///
          specialSymbol = asterisk, ///
          zeroOrMoreQuantifierRuleDefinition = QuantifierRuleDefinition.fromSpecialSymbol(specialSymbol),
          opacity = null,
          definitions = [
            zeroOrMoreQuantifierRuleDefinition
          ],
          NonTerminalNode = QuantifierBNFNode, ///
          zeroOrMoreQuantifierRule = new ZeroOrMoreQuantifierBNFRule(name, opacity, definitions, NonTerminalNode);

    return zeroOrMoreQuantifierRule;
  }
}
