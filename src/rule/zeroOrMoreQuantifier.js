"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import DefinitionBNFNode from "../node/bnf/definition";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { ZeroOrMoreQuantifierRuleName } from "../ruleNames";

const { asterisk } = specialSymbols;

export default class ZeroOrMoreQuantifierRule extends Rule {
  constructor() {
    const name = ZeroOrMoreQuantifierRuleName,
          zeroOrMoreQuantifierTerminalSymbolContent = asterisk, ///
          zeroOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(zeroOrMoreQuantifierTerminalSymbolContent),
          definitions = [
            zeroOrMoreQuantifierRuleDefinition
          ],
          Node = DefinitionBNFNode;
    
    super(name, definitions, Node)
  }
}
