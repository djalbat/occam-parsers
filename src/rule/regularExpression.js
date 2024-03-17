"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import RegularExpressionBNFNode from "../node/bnf/regularExpression";
import SignificantTokenTypeDefinition from "../definition/significantTokenType";

import { regularExpressionRuleName } from "../ruleNames";

const { regularExpressionType } = types;

export default class RegularExpressionRule extends Rule {
  static fromNothing() {
    const significantTokenType = regularExpressionType,  ///
          regularExpressionSignificantTokenTypeDefinition = SignificantTokenTypeDefinition.fromSignificantTokenType(significantTokenType),
          name = regularExpressionRuleName, ///
          opacity = null,
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          NonTerminalNode = RegularExpressionBNFNode, ///
          regularExpressionRule = new RegularExpressionRule(name, opacity, definitions, NonTerminalNode);

    return regularExpressionRule;
  }
}
