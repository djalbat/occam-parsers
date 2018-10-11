'use strict';

const lexers = require('occam-lexers');

const BasicParser = require('../../basic/parser'),
      ExampleView = require('../../example/view');

const { BasicLexer } = lexers;

class BasicExampleView extends ExampleView {
  getParseTree() {
    let parseTree = null;

    const content = this.getContent(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          basicLexer = BasicLexer.fromEntries(entries),
          tokens = basicLexer.tokenise(content),
          basicParser = BasicParser.fromNothing(),
          node = basicParser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  getTitle() {
    const title = 'Basic parser example';

    return title;
  }

  initialise() {
    super.initialise();

    const { bnf } = BasicParser,
          { entries } = BasicLexer,
          content = '1+2/3',
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BasicExampleView, properties);}
}

Object.assign(BasicExampleView, {
  defaultProperties: {
    className: 'basic'
  }
});

module.exports = BasicExampleView;
