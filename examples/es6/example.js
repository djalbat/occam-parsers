'use strict';

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    occamLexers = require('occam-lexers'),
    BNFLexer = occamLexers.BNFLexer,
    Input = easyUI.Input,
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    terminalSymbolsRegExpPatternInputSelector = 'input#terminalSymbolsRegExpPattern',
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    terminalSymbolsRegExpPatternInput = new Input(terminalSymbolsRegExpPatternInputSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser');

var parser = undefined;

class Example {
  static updateParser(mappings) {
    var grammarTextAreaValue = grammarTextArea.getValue(),
        terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
        grammar = grammarTextAreaValue, ///
        terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue, ///
        lines = BNFLexer.linesFromGrammar(grammar),
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, mappings);

    parser = new Parser(productions);
  }

  static updateParseTree(lexer) {
    var contentTextAreaValue = contentTextArea.getValue(),
        content = contentTextAreaValue,  ///
        tokens = lexer.tokensFromContent(content),
        documentNode = parser.parse(tokens),
        parseTree = documentNode.getParseTree(),
        parseTreeStr = parseTree.toString(),
        parseTreeTextAreaHTML = parseTreeStr;  ///

    parseTreeTextArea.html(parseTreeTextAreaHTML);
  }
}

Example.contentTextArea = contentTextArea;
Example.grammarTextArea = grammarTextArea;
Example.terminalSymbolsRegExpPatternInput = terminalSymbolsRegExpPatternInput;

module.exports = Example;
