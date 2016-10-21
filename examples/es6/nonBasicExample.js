'use strict';

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textArea#content',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class NonBasicExample {
  static updateParseTree(preprocessor, lexer, parser) {
    var contentTextAreaValue = contentTextArea.getValue(),
        content = contentTextAreaValue,  ///
        tokens = lexer.tokensFromContent(content);

    if (preprocessor !== undefined) {
      var preprocessedTokens = preprocessor.parse(tokens);

      tokens = preprocessedTokens;  ///
    }

    var documentNode = parser.parse(tokens),
        parseTree = documentNode.getParseTree(),
        parseTreeStr = parseTree.toString(),
        parseTreeTextAreaHTML = parseTreeStr;  ///

    parseTreeTextArea.html(parseTreeTextAreaHTML);
  }
  
  static clearParseTree() {
    var parseTreeTextAreaHTML = '';

    parseTreeTextArea.html(parseTreeTextAreaHTML);
  }
}

NonBasicExample.contentTextArea = contentTextArea;
NonBasicExample.grammarTextArea = grammarTextArea;

module.exports = NonBasicExample;
