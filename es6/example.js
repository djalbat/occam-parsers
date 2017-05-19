'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const verticalSplitterSelector = '#verticalSplitter',
      sizeableElementSelector = '#sizeableElement',
      grammarTextareaSelector = 'textarea#grammar',
      contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree';

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easylayout;

const sizeableElement = new SizeableElement(sizeableElementSelector),
      contentTextarea = new Textarea(contentTextareaSelector),
      grammarTextarea = new Textarea(grammarTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector);

const beforeSizeableElement = false,
      afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static getGrammarTextareaValue() { return grammarTextarea.getValue(); }

  static setGrammarTextareaValue(value) { grammarTextarea.setValue(value); }

  static onContentTextareaKeyUp(handler) { contentTextarea.on('keyup', function() {
    const content = contentTextarea.getValue(); ///

    handler(content);
  }); }

  static onGrammarTextareaChange(handler) { grammarTextarea.onChange(handler); }

  static updateParseTree(lexer, parser) {
    try {
      const contentTextareaValue = contentTextarea.getValue(),
          content = contentTextareaValue;  ///

      if (content !== '') {
        const contents = content.split(/\n/),
              lines = lexer.linesFromContents(contents),
              tokens = tokensFromLines(lines),
              documentNode = parser.parse(tokens);

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