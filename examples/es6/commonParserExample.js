'use strict';

var easyui = require('easyui'),
    parsers = require('../../index'),
    Element = easyui.Element,
    TextArea = easyui.TextArea,
    BNFLexer = parsers.BNFLexer,
    BNFParser = parsers.BNFParser,
    CommonParser = parsers.CommonParser;

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var specialSymbols = '',
    Parts = [],
    mappings = {};

class CommonParserExample {
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

module.exports = CommonParserExample;

var commonParser;

function updateGrammar() {
  var grammarTextAreaValue = grammarTextArea.getValue(),
      grammar = grammarTextAreaValue, ///
      lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
      productions = BNFParser.parse(lines, Parts, mappings);

  commonParser = new CommonParser(productions);
}

function updateInput() {
  var inputTextAreaValue = inputTextArea.getValue(),
      input = inputTextAreaValue,  ///
      parsedInput = commonParser.parse(input),
      paragraphElementHTML = parsedInput; ///

  paragraphElement.html(paragraphElementHTML);
}
