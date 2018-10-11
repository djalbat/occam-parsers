'use strict';

const lexers = require('occam-lexers');

const BNFParser = require('../../bnf/parser'),
      ExampleView = require('../../example/view');

const { BNFLexer } = lexers;

class BNFExampleView extends ExampleView {
  getLexer() {
    const Lexer = BNFLexer;  ///

    return Lexer;
  }

  getParser() {
    const Parser = BNFParser;  ///

    return Parser;
  }

  getTitle() {
    const title = 'BNF parser example';

    return title;
  }

  getInitialContent() {
    const { bnf } = BNFParser,
          initialContent = bnf; ///

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BNFExampleView, properties);}
}

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
