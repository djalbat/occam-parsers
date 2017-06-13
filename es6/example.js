'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easylayout;

const contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree',
      bnfGrammarTextareaSelector = 'textarea#bnfGrammar',
      sizeableElementSelector = '#sizeableElement',
      verticalSplitterSelector = '#verticalSplitter',
      contentTextarea = new Textarea(contentTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
      bnfGrammarTextarea = new Textarea(bnfGrammarTextareaSelector),
      sizeableElement = new SizeableElement(sizeableElementSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static getBNFGrammarTextareaValue() { return bnfGrammarTextarea.getValue(); }

  static setBNFGrammarTextareaValue(value) { bnfGrammarTextarea.setValue(value); }

  static setContentTextareaValue(value) { contentTextarea.setValue(value); }

  static onBNFGrammarTextareaKeyUp(handler) { bnfGrammarTextarea.onKeyUp(handler); }

  static onContentTextareaKeyUp(handler) { contentTextarea.onKeyUp(handler); }

  static updateParseTreeTextarea(lexer, parser, production) {
    try {
      const contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue, ///
            lines = lexer.linesFromContent(content),
            node = parser.nodeFromLines(lines, production),
            documentNode = node;  ///

      if (documentNode === null) {
        throw new Error('The document cannot be parsed for some reason.');  ///
      }

      const parseTree = documentNode.generateParseTree(lines);

      parseTree.shiftLine();  //

      const parseTreeString = parseTree.toString(),
            parseTreeTextareaHTML = parseTreeString;  ///

      parseTreeTextarea.html(parseTreeTextareaHTML);

      contentTextarea.removeClass('error');
    } catch (error) {
      contentTextarea.addClass('error');

      Example.clearParseTreeTextarea();
    }
  }

  static clearParseTreeTextarea() {
    const parseTreeTextareaHTML = '';

    parseTreeTextarea.html(parseTreeTextareaHTML);
  }
}

module.exports = Example;

