'use strict';

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var lexers = require('../../es6/occam-lexers'),
    BNFLexer = lexers.BNFLexer;

var Parser = require('../../es6/parser'),
    BNFParser = require('../../es6/bnfParser');

var leftColumnSelector = '#leftColumn',
    grammarTextAreaSelector = 'textarea#grammar',
    contentTextAreaSelector = 'textarea#content',
    parseTreeTextAreaSelector = 'textarea#parseTree',
    leftColumn = new SizeableElement(leftColumnSelector),
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var parser = undefined;

class Example {
  static getGrammarTextAreaValue() { return grammarTextArea.getValue(); }

  static setGrammarTextAreaValue(value) { grammarTextArea.setValue(value); }

  static onContentTextAreaChange(handler) { contentTextArea.onChange(handler); }

  static onGrammarTextAreaChange(handler) { grammarTextArea.onChange(handler); }

  static updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes) {
    var lines = BNFLexer.linesFromGrammar(grammar),
        mappings = {},
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

    parser = new Parser(productions);
  }

  static updateParseTree(lexer) {
    var contentTextAreaValue = contentTextArea.getValue(),
        content = contentTextAreaValue,  ///
        tokens = lexer.tokensFromContent(content),
        documentNode = parser.parse(tokens);

    if (documentNode !== null) {
      var parseTree = documentNode.getParseTree();

      parseTree.shiftLine();  //

      var parseTreeString = parseTree.toString(),
          parseTreeTextAreaHTML = parseTreeString;  ///

      parseTreeTextArea.html(parseTreeTextAreaHTML);
    } else {
      Example.clearParseTree();
    }
  }

  static clearParseTree() {
    var parseTreeTextAreaHTML = '';

    parseTreeTextArea.html(parseTreeTextAreaHTML);
  }
}

module.exports = Example;
