"use strict";

import Rule from "../../rule";
import DocumentBNFNode from "../../node/bnf/document";
import DocumentDefinition from "../../definition/document";

import { documentRuleName } from "../../ruleNames";

export default class DocumentBNFRule extends Rule {
  static fromNothing() {
    const documentDefinition = DocumentDefinition.fromNothing(),
          name = documentRuleName,  ///
          opacity = null,
          definitions = [
            documentDefinition
          ],
          NonTerminalNode = DocumentBNFNode,  ///
          documentRule = new DocumentBNFRule(name, opacity, definitions, NonTerminalNode);

    return documentRule;
  }
}
