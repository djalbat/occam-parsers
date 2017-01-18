'use strict';

var easyui = require('easyui'),
    easyuilayout = require('easyui-layout'),
    TextArea = easyui.TextArea,
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

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

var Query = require('./common/query');

class Example {
  static getGrammarTextAreaValue() { return grammarTextArea.getValue(); }

  static setGrammarTextAreaValue(value) { grammarTextArea.setValue(value); }

  static onContentTextAreaChange(handler) { contentTextArea.onChange(handler); }

  static onGrammarTextAreaChange(handler) { grammarTextArea.onChange(handler); }

  static updateParseTree(lexer, parser) {
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

      var query = Query.fromExpression('//*[4...11]/statement[1...3]');

      var nodes = query.nodesFromNode(documentNode);

      debugger
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
