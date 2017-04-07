'use strict';

const easy = require('easy'),
      easylayout = require('easy-layout');

const leftColumnSelector = '#leftColumn',
      grammarTextareaSelector = 'textarea#grammar',
      contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree';

const { Textarea } = easy,
      { options, SizeableElement, VerticalSplitter } = easylayout,
      { TO_THE_RIGHT_OF } = options;

const leftColumn = new SizeableElement(leftColumnSelector),
      contentTextarea = new Textarea(contentTextareaSelector),
      grammarTextarea = new Textarea(grammarTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector);

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

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

        const parseTree = documentNode.getParseTree();

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