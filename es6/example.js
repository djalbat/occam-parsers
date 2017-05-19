'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easylayout;

const grammarTextareaSelector = 'textarea#grammar',
      contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree',
      sizeableElementSelector = '#sizeableElement',
      verticalSplitterSelector = '#verticalSplitter',
      grammarTextarea = new Textarea(grammarTextareaSelector),
      contentTextarea = new Textarea(contentTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
      sizeableElement = new SizeableElement(sizeableElementSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static getGrammarTextareaValue() {
    const grammarTextareaValue = grammarTextarea.getValue();

    return grammarTextareaValue;
  }

  static setGrammarTextareaValue(grammarTextareaValue) {
    const value = grammarTextareaValue; ///

    grammarTextarea.setValue(value);
  }

  static onContentTextareaKeyUp(handler) { contentTextarea.onKeyUp(handler); }

  static onGrammarTextareaKeyUp(handler) { grammarTextarea.onKeyUp(handler); }

  static updateParseTree(lexer, parser, production) {
    try {
      const contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue;  ///

      if (content !== '') {
        const contents = content.split(/\n/),
              lines = lexer.linesFromContents(contents),
              tokens = tokensFromLines(lines),
              documentNode = parser.parse(tokens, production);

        if (documentNode === null) {
          throw new Error('The document cannot be parsed for some reason.');
        }

        const parseTree = documentNode.parseTree(lines);

        parseTree.shiftLine();  //

        const parseTreeString = parseTree.toString(),
              parseTreeTextareaHTML = parseTreeString;  ///

        parseTreeTextarea.html(parseTreeTextareaHTML);
      } else {
        Example.clearParseTree();
      }

      contentTextarea.removeClass('error');
    } catch (error) {
      contentTextarea.addClass('error');
    
      Example.clearParseTree();
    }
  }

  static clearParseTree() {
    const parseTreeTextareaHTML = '';

    parseTreeTextarea.html(parseTreeTextareaHTML);
  }
}

module.exports = Example;

function tokensFromLines(lines) {
  const tokens = lines.reduce(function(tokens, line) {
          const lineTokens = line.getTokens();
      
          tokens = tokens.concat(lineTokens);
      
          return tokens;
        }, []);
      
  return tokens;
}