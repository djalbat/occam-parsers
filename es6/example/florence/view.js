'use strict';

const ExampleView = require('../../example/view'),
      FlorenceParser = require('../../florence/parser');

class FlorenceExampleView extends ExampleView {
  // getTokens() {
  //   const entries = this.getEntries(),
  //         content = this.getContent(),
  //         florenceParser = FlorenceParser.fromEntries(entries),
  //         tokens = florenceParser.tokenise(content);
  //
  //   return tokens;
  // }

  getTitle() {
    const title = 'Florence parser example';

    return title;
  }

  initialise() {
    super.initialise();

    // const { entries } = FlorenceParser;
    //
    // this.setEntries(entries);
  }

  static fromProperties(properties) { return ExampleView.fromProperties(FlorenceExampleView, properties);}
}

Object.assign(FlorenceExampleView, {
  defaultProperties: {
    className: 'florence'
  }
});

module.exports = FlorenceExampleView;
