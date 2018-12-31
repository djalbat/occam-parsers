'use strict';

const easy = require('easy');

const { InputElement } = easy;

class ParseTreeTextarea extends InputElement {
  showError() {
    this.addClass('error');
  }

  hideError() {
    this.removeClass('error');
  }

  setParseTree(parseTree) {
    if (parseTree !== null) {
      parseTree.shiftLine();  //

      const parseTreeString = parseTree.asString(),
            value = parseTreeString;  ///

      this.setValue(value);
    } else {
      this.clearParseTree();
    }
  }

  clearParseTree() {
    const value = '';

    this.setValue(value);
  }

  parentContext() {
    const showError = this.showError.bind(this),
          hideError = this.hideError.bind(this),
          setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

    return ({
      showError,
      hideError,
      setParseTree,
      clearParseTree
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(ParseTreeTextarea, properties); }
}

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
