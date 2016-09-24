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

var leftColumnSelector = '#leftColumn',
    inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    specialSymbolsRegExpInputSelector = 'input#specialSymbolsRegExp',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    specialSymbolsRegExpInput = new Input(specialSymbolsRegExpInputSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var mappings = {};

class BasicParser {
  static run() {
    updateParser();

    specialSymbolsRegExpInput.onChange(function() {
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
      specialSymbolsRegExpInputValue = specialSymbolsRegExpInput.getValue(),
      grammar = grammarTextAreaValue, ///
      specialSymbolsRegExp = specialSymbolsRegExpInputValue, ///
      lines = BNFLexer.linesFromGrammar(grammar),
      productions = BNFParser.parse(lines, specialSymbolsRegExp, mappings);

  parser = new Parser(productions);
}

function updateInput() {
  var inputTextAreaValue = inputTextArea.getValue(),
      input = inputTextAreaValue,  ///
      documentNode = parser.parse(input),
      parseTree = documentNode.getParseTree(),
      parseTreeStr = parseTree.toString(),
      parseTreeTextAreaHTML = parseTreeStr;  ///

  parseTreeTextArea.html(parseTreeTextAreaHTML);
}
