'use strict';

const BNFParser = require('../../bnf/parser'),
      ExampleView = require('../../example/view');

class BNFExampleView extends ExampleView {
  // getTokens() {
  //   const entries = this.getEntries(),
  //         content = this.getContent(),
  //         bnfParser = BNFParser.fromEntries(entries),
  //         tokens = bnfParser.tokenise(content);
  //
  //   return tokens;
  // }

  getTitle() {
    const title = 'BNF parser example';

    return title;
  }

  initialise() {
    super.initialise();

    // const { entries } = BNFParser;
    //
    // this.setEntries(entries);
  }

  static fromProperties(properties) { return ExampleView.fromProperties(BNFExampleView, properties);}
}

Object.assign(BNFExampleView, {
  defaultProperties: {
    className: 'bnf'
  }
});

module.exports = BNFExampleView;
