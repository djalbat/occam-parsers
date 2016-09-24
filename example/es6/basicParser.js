'use strict';

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    Input = easyUI.Input,
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var Parser = require ('../../es6/parser'),
    BNFLexer = require ('../../es6/bnfLexer'),
    BNFParser = require ('../../es6/bnfParser');

var leftColumnSizeableElementSelector = '#leftColumn',
    leftColumnSizeableElement = new SizeableElement(leftColumnSizeableElementSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF,
    verticalSplitter = new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumnSizeableElement);

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    specialSymbolsRegExpPatternInputSelector = 'input#specialSymbolsRegExpPattern',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    specialSymbolsRegExpPatternInput = new Input(specialSymbolsRegExpPatternInputSelector);

var mappings = {};

class BasicParser {
  static run() {
    updateParser();

    specialSymbolsRegExpPatternInput.onChange(function() {
      updateParser();
      updateInput();
    });

    grammarTextArea.onChange(function() {
      updateParser();
      updateInput();
    });

    inputTextArea.onChange(function() {
      updateInput();
    });
  }
}

module.exports = BasicParser;

var parser;

function updateParser() {
  var grammarTextAreaValue = grammarTextArea.getValue(),
      specialSymbolsRegExpPatternInputValue = specialSymbolsRegExpPatternInput.getValue(),
      grammar = grammarTextAreaValue, ///
      specialSymbolsRegExpPattern = specialSymbolsRegExpPatternInputValue, ///
      lines = BNFLexer.linesFromGrammar(grammar),
      productions = BNFParser.parse(lines, specialSymbolsRegExpPattern, mappings);

  parser = new Parser(productions);
}

function updateInput() {
  var inputTextAreaValue = inputTextArea.getValue(),
      input = inputTextAreaValue,  ///
      documentNode = parser.parse(input),
      documentNodeString = documentNode.toString(),
      parseTreeTextAreaHTML = documentNodeString;  ///

  parseTreeTextArea.html(parseTreeTextAreaHTML);
}
