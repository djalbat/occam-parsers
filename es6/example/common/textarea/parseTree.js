'use strict';

const easy = require('easy');

const { InputElement } = easy;

class ParseTreeTextarea extends InputElement {
  setParseTree(parseTree) {
    if (parseTree !== null) {
      parseTree.shiftLine();  //

      const parseTreeString = parseTree.asString(),
            html = parseTreeString;  ///

      this.html(html);
    } else {
      this.clearParseTree();
    }
  }

  clearParseTree() {
    const html = '';

    return html;
  }

  parentContext() {
    const setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

    return ({
      setParseTree,
      clearParseTree
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(ParseTreeTextarea, properties); }
}

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parseTree',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
