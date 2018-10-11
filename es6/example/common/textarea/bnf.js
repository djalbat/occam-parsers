'use strict';

const easy = require('easy');

const { InputElement } = easy;

class BNFTextarea extends InputElement {
  constructor(selector, changeHandler, keyUpHandler) {
    super(selector, changeHandler);

    this.onKeyUp(keyUpHandler);
  }

  onKeyUp(keyUpHandler) {
    this.on('keyUp', keyUpHandler);
  }

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

  static fromProperties(properties) {
    const { onKeyUp } = properties,
          keyUpHandler = onKeyUp, ///
          bnfTextarea = InputElement.fromProperties(BNFTextarea, properties, keyUpHandler);

    return bnfTextarea;
  }
}

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellcheck: false
  }
});

module.exports = BNFTextarea;
