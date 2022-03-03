"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import DefinitionNode from "../node/definition";
import QuantifierRuleDefinition from "../../definition/quantifierRule";

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
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}
