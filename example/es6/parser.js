'use strict';

var easyui = require('easyui'),
    Element = easyui.Element,
    TextArea = easyui.TextArea;

var BNFLexer = require ('../../es6/bnfLexer'),
    BNFParser = require ('../../es6/bnfParser'),
    Parser = require ('../../es6/parser');

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var specialSymbols = '',
    Parts = [],
    mappings = {};

class ParserExample {
  static run() {
    updateGrammar();

    grammarTextArea.onChange(function() {
      updateGrammar();
      updateInput();
    });

    inputTextArea.onChange(function() {
      updateInput();
    });
  }
}

module.exports = ParserExample;

var parser;

function updateGrammar() {
  var grammarTextAreaValue = grammarTextArea.getValue(),
      grammar = grammarTextAreaValue, ///
      lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
      productions = BNFParser.parse(lines, Parts, mappings);

  parser = new Parser(productions);
}

function updateInput() {
  var inputTextAreaValue = inputTextArea.getValue(),
      input = inputTextAreaValue,  ///
      parsedInput = parser.parse(input),
      paragraphElementHTML = parsedInput; ///

  paragraphElement.html(paragraphElementHTML);
}
