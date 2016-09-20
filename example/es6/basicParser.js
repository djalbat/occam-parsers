'use strict';

var easyui = require('easyui'),
    Input = easyui.Input,
    Element = easyui.Element,
    TextArea = easyui.TextArea;

var Parser = require ('../../es6/parser'),
    BNFLexer = require ('../../es6/bnfLexer'),
    BNFParser = require ('../../es6/bnfParser');

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    specialSymbolsRegExpPatternInputSelector = 'input#specialSymbolsRegExpPattern',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector),
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
      parsedInput = parser.parse(input),
      paragraphElementHTML = parsedInput; ///

  paragraphElement.html(paragraphElementHTML);
}
