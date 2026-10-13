"use strict";

import Rule from "../rule";
import DocumentDefinition from "../definition/document";

import { DOCUMENT_RULE_NAME } from "../ruleNames";

export default class DocumentRule extends Rule {
  static fromNothing() {
    const documentDefinition = DocumentDefinition.fromNothing(),
          name = DOCUMENT_RULE_NAME,  ///
          opacity = null,
          definitions = [
            documentDefinition
          ],
          documentRule = new DocumentRule(name, opacity, definitions);

    return documentRule;
  }
}
