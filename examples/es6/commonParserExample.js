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

var grammarTextAreaValue = grammarTextArea.getValue(),
    grammar = grammarTextAreaValue, ///
    specialSymbols = '\\.|\\(|\\)',
    lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
    Parts = [],
    mappings = {},
    productions = BNFParser.parse(lines, Parts, mappings);

class CommonParserExample {
  static run() {
    var commonParser = new CommonParser(productions);

    inputTextArea.onChange(function(value) {
      var input = value,  ///
          parsedInput = commonParser.parse(input),
          paragraphElementHTML = parsedInput; ///

      paragraphElement.html(paragraphElementHTML);
    });
  }
}

module.exports = CommonParserExample;
