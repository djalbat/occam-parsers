"use strict";

import { types } from "occam-lexers";

import Rule from "../../rule";
import SignificantTokenTypeBNFNode from "../../node/bnf/significantTokenType";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

import { significantTokenTypeRuleName } from "../../ruleNames";

const { typeType } = types;

export default class SignificantTokenTypeBNFRule extends Rule {
  static fromNothing() {
    const significantTokenType = typeType,  ///
          typeSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = significantTokenTypeRuleName,  ///
          opacity = null,
          definitions = [
            typeSignificantTokenTypeDefinition
          ],
          NonTerminalNode = SignificantTokenTypeBNFNode,  ///
          significantTokenTypeRule = new SignificantTokenTypeBNFRule(name, opacity, definitions, NonTerminalNode);

    return significantTokenTypeRule;
  }
}
