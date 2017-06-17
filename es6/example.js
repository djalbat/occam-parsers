'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easylayout;

const contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree',
      sizeableElementSelector = '#sizeableElement',
      verticalSplitterSelector = '#verticalSplitter',
      contentTextarea = new Textarea(contentTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
      sizeableElement = new SizeableElement(sizeableElementSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static getBNFGrammarTextareaValue() { return bnfGrammarTextarea.getValue(); }

  static setBNFGrammarTextareaValue(value) { bnfGrammarTextarea.setValue(value); }

  static setContentTextareaValue(value) { contentTextarea.setValue(value); }

  static onContentTextareaKeyUp(handler) { contentTextarea.onKeyUp(handler); }

  static updateParseTreeTextarea(lexer, parser, production) {
    let node = null;
    
    try {
      const contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue, ///
            lines = lexer.linesFromContent(content);

      node = parser.nodeFromLines(lines, production);
      
      if (node === null) {
        throw new Error('The document cannot be parsed for some reason.');  ///
      }

      const parseTree = node.generateParseTree(lines);

      parseTree.shiftLine();  //

      const parseTreeString = parseTree.toString(),
            parseTreeTextareaHTML = parseTreeString;  ///

      parseTreeTextarea.html(parseTreeTextareaHTML);

      contentTextarea.removeClass('error');
    } catch (error) {
      contentTextarea.addClass('error');

      Example.clearParseTreeTextarea();
    }
    
    return node;
  }

  static clearParseTreeTextarea() {
    const parseTreeTextareaHTML = '';

    parseTreeTextarea.html(parseTreeTextareaHTML);
  }
}

module.exports = Example;

