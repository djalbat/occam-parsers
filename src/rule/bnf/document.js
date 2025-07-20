"use strict";

import Rule from "../../rule";
import DocumentDefinition from "../../definition/document";

import { DOCUMENT_RULE_NAME } from "../../ruleNames";

export default class DocumentBNFRule extends Rule {
  static fromNothing() {
    const documentDefinition = DocumentDefinition.fromNothing(),
          name = DOCUMENT_RULE_NAME,  ///
          opacity = null,
          definitions = [
            documentDefinition
          ],
          documentRule = new DocumentBNFRule(name, opacity, definitions);

    return documentRule;
  }
}
