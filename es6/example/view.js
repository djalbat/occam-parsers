'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const { Element } = easy,
      { SizeableElement } = easyLayout;

const BNFTextarea = require('./common/textarea/bnf'),
      ContentTextarea = require('./common/textarea/content'),
      ParseTreeTextarea = require('./common/textarea/parseTree'),
      LexicalEntriesTextarea = require('./common/textarea/lexicalEntries'),
      MainVerticalSplitter = require('./common/verticalSplitter/main');

class ExampleView extends Element {
  keyUpHandler() {
    try {
      const parseTree = this.getParseTree();

      this.hideError();

      this.setParseTree(parseTree);
    } catch (error) {
      this.showError();

      this.clearParseTree();
    }
  }

  childElements(properties) {
    const title = this.getTitle(),
          keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <h1>{title}</h1>,
      <div className="columns">
        <SizeableElement>
          <h2>Lexical entries</h2>
          <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
          <h2>BNF</h2>
          <BNFTextarea />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Parse tree</h2>
          <ParseTreeTextarea />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </div>
      </div>

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static fromProperties(Class, properties) {
    const florenceExampleView = Element.fromProperties(Class, properties);

    florenceExampleView.initialise();

    return florenceExampleView
  }
}

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});

module.exports = ExampleView;
