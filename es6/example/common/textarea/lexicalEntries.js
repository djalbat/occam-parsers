'use strict';

const easy = require('easy');

const { InputElement } = easy;

class LexicalEntriesTextarea extends InputElement {
  constructor(selector, changeHandler, keyUpHandler) {
    super(selector, changeHandler);

    if (keyUpHandler) {
      this.onKeyUp(keyUpHandler);
    }
  }

  onKeyUp(keyUpHandler) {
    this.on('keyUp', keyUpHandler);
  }

  getLexicalEntries() {
    const value = this.getValue(),
          lexicalEntries = JSON.parse(value);

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const value = JSON.stringify(lexicalEntries, null, '  ');

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

  static fromProperties(properties) { return InputElement.fromProperties(LexicalEntriesTextarea, properties); }
}

Object.assign(LexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'lexicalEntries',
    spellCheck: 'false'
  }
});

module.exports = LexicalEntriesTextarea;
