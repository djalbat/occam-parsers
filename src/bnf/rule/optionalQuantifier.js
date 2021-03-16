"use strict";

import { specialSymbols } from "occam-lexers";

import Rule from "../rule";
import DefinitionNode from "../node/definition";
import QuantifierRuleDefinition from "../definition/quantifierRule";

import { OptionalQuantifierRuleName } from "../ruleNames";

const { questionMark } = specialSymbols;

export default class OptionalQuantifierRule extends Rule {
  constructor() {
    const name = OptionalQuantifierRuleName,
          optionalQuantifierTerminalSymbolContent = questionMark, ///
          optionalQuantifierRuleDefinition = new QuantifierRuleDefinition(optionalQuantifierTerminalSymbolContent),
          definitions = [
            optionalQuantifierRuleDefinition
          ],
          Node = DefinitionNode;
    
    super(name, definitions, Node)
  }
}
