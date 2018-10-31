'use strict';

const lexers = require('occam-lexers');

const ExampleView = require('../../example/view'),
      MetaJSONParser = require('../../metaJSON/parser');

const { MetaJSONLexer } = lexers;

class MetaJSONExampleView extends ExampleView {
  getTitle() {
    const title = 'MetaJSON parser example';

    return title;
  }

  getLexer() {
    const Lexer = MetaJSONLexer;  ///

    return Lexer;
  }

  getParser() {
    const Parser = MetaJSONParser;  ///

    return Parser;
  }

  getInitialContent() {
    const initialContent = `{
  "repository" : "https://github.com/jecs-imperial/occam-lexers"
}`;

    return initialContent;
  }

  static fromProperties(properties) { return ExampleView.fromProperties(MetaJSONExampleView, properties);}
}

Object.assign(MetaJSONExampleView, {
  defaultProperties: {
    className: 'metaJSON'
  }
});

module.exports = MetaJSONExampleView;
