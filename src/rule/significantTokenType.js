"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import SignificantTokenTypeBNFNode from "../node/bnf/significantTokenType";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { significantTokenTypeRuleName } from "../ruleNames";

const { typeType } = types;

export default class SignificantTokenTypeRule extends Rule {
  static fromNothing() {
    const significantTokenType = typeType,  ///
          typeSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = significantTokenTypeRuleName,  ///
          ambiguous = false,
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          NonTerminalNode = SignificantTokenTypeBNFNode,  ///
          significantTokenTypeRule = new SignificantTokenTypeRule(name, ambiguous, definitions, NonTerminalNode);

    return significantTokenTypeRule;
  }
}
