'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easyLayout;

const contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree',
      extendedBNFGrammarTextareaSelector = 'textarea#extendedBNFGrammar',
      adjustedExtendedBNFGrammarTextareaSelector = 'textarea#adjustedExtendedBNFGrammar',
      sizeableElementSelector = '#sizeableElement',
      verticalSplitterSelector = '#verticalSplitter',
      contentTextarea = new Textarea(contentTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
      extendedBNFGrammarTextarea = new Textarea(extendedBNFGrammarTextareaSelector),
      adjustedExtendedBNFGrammarTextarea = new Textarea(adjustedExtendedBNFGrammarTextareaSelector),
      sizeableElement = new SizeableElement(sizeableElementSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static getExtendedBNFGrammarTextareaValue() { return extendedBNFGrammarTextarea.getValue(); }

  static setExtendedBNFGrammarTextareaValue(value) { extendedBNFGrammarTextarea.setValue(value); }

  static setContentTextareaValue(value) { contentTextarea.setValue(value); }

  static onExtendedBNFGrammarTextareaKeyUp(handler) { extendedBNFGrammarTextarea.onKeyUp(handler); }

  static onContentTextareaKeyUp(handler) { contentTextarea.onKeyUp(handler); }

  static updateParseTreeTextarea(lexer, parser, production) {
    const extendedBNFParserString = parser.toString(),
          adjustedExtendedBNFGrammarTextareaValue = extendedBNFParserString;  ///

    adjustedExtendedBNFGrammarTextarea.setValue(adjustedExtendedBNFGrammarTextareaValue);

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
