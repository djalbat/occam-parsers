'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const BNFTextarea = require('./common/textarea/bnf'),
      ContentTextarea = require('./common/textarea/content'),
      ParseTreeTextarea = require('./common/textarea/parseTree'),
      MainVerticalSplitter = require('./common/verticalSplitter/main'),
      LexicalEntriesTextarea = require('./common/textarea/lexicalEntries');

const { Element } = easy,
      { SizeableElement } = easyLayout;

class ExampleView extends Element {
  getParseTree() {
    let parseTree = null;

    const Lexer = this.getLexer(),
          Parser = this.getParser(),
			    lexicalEntries = this.getLexicalEntries(),
			    bnf = this.getBNF(),
			    entries = lexicalEntries, ///
			    lexer = Lexer.fromEntries(entries),
          parser = Parser.fromBNF(bnf),
          content = this.getContent(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler() {
    // try {
      const parseTree = this.getParseTree();

      this.hideError();

      this.setParseTree(parseTree);
    // } catch (error) {
    //   this.showError();
    //
    //   this.clearParseTree();
    // }
  }

  getInitialContent() {
    const initialContent = '';

    return initialContent;
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
          <BNFTextarea onKeyUp={keyUpHandler} />
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

    const Lexer = this.getLexer(),
          Parser = this.getParser(),
          initialContent = this.getInitialContent(),
          { bnf } = Parser,
          { entries } = Lexer,
          content = initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static fromProperties(Class, properties) {
    const exampleView = Element.fromProperties(Class, properties);

    exampleView.initialise();

    return exampleView
  }
}

Object.assign(ExampleView, {
  tagName: 'div',
  defaultProperties: {
    className: 'example'
  }
});

module.exports = ExampleView;
