"use strict";

import { types } from "occam-lexers";

import Rule from "../rule";
import RegularExpressionNode from "../node/regularExpression";
import SignificantTokenTypeDefinition from "../../definition/significantTokenType";

import { RegularExpressionRuleName } from "../ruleNames";

const { regularExpressionType } = types;

export default class RegularExpressionRule extends Rule {
  constructor() {
    const regularExpressionSignificantTokenType = regularExpressionType,  ///
          regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
          name = RegularExpressionRuleName,
          definitions = [
            regularExpressionSignificantTokenTypeDefinition
          ],
          Node = RegularExpressionNode;
    
    super(name, definitions, Node)
  }
}
