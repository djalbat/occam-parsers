'use strict';

const lexers = require('occam-lexers');

const ExampleView = require('../../example/view'),
      BasicParser = require('../../basic/parser');

const { BasicLexer } = lexers;

class BasicExampleView extends ExampleView {
  getLexer() {
    const Lexer = BasicLexer;  ///

    return Lexer;
  }

  getParser() {
    const Parser = BasicParser;  ///

    return Parser;
  }

  getTitle() {
    const title = 'Basic parser example';

    return title;
  }

  getInitialContent() {
    const initialContent = '1+2/3';

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BasicExampleView, properties);}
}

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: 'basic'
  }
});

module.exports = BasicExampleView;
