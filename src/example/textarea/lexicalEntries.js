"use strict";

import Textarea from "../textarea";

export default class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    const value = this.getValue(),
          lexicalEntries = JSON.parse(value);

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const value = JSON.stringify(lexicalEntries, null, "  ");

    this.setValue(value);
  }

  parentContext() {
    const getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);

    return ({
      getLexicalEntries,
      setLexicalEntries
    });
  }

  static defaultProperties = {
    className: "lexical-entries",
    spellCheck: "false"
  };
}
