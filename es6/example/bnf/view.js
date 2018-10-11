'use strict';

const lexers = require('occam-lexers');

const BNFParser = require('../../bnf/parser'),
      ExampleView = require('../../example/view');

const { BNFLexer } = lexers;

class BNFExampleView extends ExampleView {
  getParseTree() {
    let parseTree = null;

    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          content = this.getContent(),
          tokens = bnfLexer.tokenise(content),
          node = bnfParser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  getTitle() {
    const title = 'BNF parser example';

    return title;
  }

  initialise() {
    super.initialise();

    const { bnf } = BNFParser,
          { entries } = BNFLexer,
          content = bnf,  ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BNFExampleView, properties);}
}

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
