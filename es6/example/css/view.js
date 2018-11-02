'use strict';

const lexers = require('occam-lexers');

const CSSParser = require('../../css/parser'),
      ExampleView = require('../../example/view');

const { CSSLexer } = lexers;

class CSSExampleView extends ExampleView {
  getTitle() {
    const title = 'CSS parser example';

    return title;
  }

  getLexer() {
    const Lexer = CSSLexer;  ///

    return Lexer;
  }

  getParser() {
    const Parser = CSSParser;  ///

    return Parser;
  }

  getInitialContent() {
    const initialContent = 'background-color : white !important;\n';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(CSSExampleView, properties);}
}

Object.assign(CSSExampleView, {
  defaultProperties: {
    className: 'css'
  }
});

module.exports = CSSExampleView;
