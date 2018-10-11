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
  getParseTree() {
    let parseTree = null;

    const Lexer = this.getLexer(),
          Parser = this.getParser(),
          lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
          content = this.getContent(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

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

  contentKeyUpHandler() { this.keyUpHandler(); }

  childElements(properties) {
    const title = this.getTitle(),
          contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          bnfTextareaKeyUpHandler = this.bnfTextareaKeyUpHandler ? this.bnfTextareaKeyUpHandler.bind(this) : null,
          lexicalEntriesKeyUpHandler = this.lexicalEntriesKeyUpHandler ? this.lexicalEntriesKeyUpHandler.bind(this) : null,
          bnfTextareaReadOnly = (bnfTextareaKeyUpHandler === null),
          lexicalEntriesReadOnly = (lexicalEntriesKeyUpHandler === null);

    return ([

      <h1>{title}</h1>,
      <div className="columns">
        <SizeableElement>
          <h2>Lexical entries</h2>
          <LexicalEntriesTextarea onKeyUp={lexicalEntriesKeyUpHandler} readOnly={lexicalEntriesReadOnly} />
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={bnfTextareaKeyUpHandler} readOnly={bnfTextareaReadOnly} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Parse tree</h2>
          <ParseTreeTextarea />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={contentKeyUpHandler} />
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
