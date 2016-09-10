'use strict';

var easyui = require('easyui'),
    parsers = require('../../index'),
    Element = easyui.Element,
    TextArea = easyui.TextArea,
    CommonParser = parsers.CommonParser;

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

class CommonParserExample {
  static run() {
    var commonParser = new CommonParser();

    inputTextArea.onChange(function(value) {
      var input = value,  ///
          parsedInput = commonParser.parse(input),
          paragraphElementHTML = parsedInput; ///

      paragraphElement.html(paragraphElementHTML);
    });
  }
}

module.exports = CommonParserExample;
