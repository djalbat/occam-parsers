"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import DefinitionBNFNode from "../node/bnf/definition";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { OneOrMoreQuantifierRuleName } from "../ruleNames";

const { plus } = specialSymbols;

export default class OneOrMoreQuantifierRule extends Rule {
  constructor() {
    const name = OneOrMoreQuantifierRuleName,
          oneOrMoreQuantifierTerminalSymbolContent = plus, ///
          oneOrMoreQuantifierRuleDefinition = new QuantifierRuleDefinition(oneOrMoreQuantifierTerminalSymbolContent),
          definitions = [
            oneOrMoreQuantifierRuleDefinition
          ],
          Node = DefinitionBNFNode;
    
    super(name, definitions, Node)
  }
}
