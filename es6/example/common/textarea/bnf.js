'use strict';

const easy = require('easy');

const { InputElement } = easy;

class BNFTextarea extends InputElement {
  getBNF() {
    const value = this.getValue(),
          bnf = value;  ///

    return bnf;
  }

  setBNF(bnf) {
    const value = bnf;  ///

    this.setValue(value);
  }

  parentContext() {
    const getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);

    return ({
      getBNF,
      setBNF
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(BNFTextarea, properties); }
}

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false'
  }
});

module.exports = BNFTextarea;
