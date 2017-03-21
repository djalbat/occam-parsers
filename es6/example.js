'use strict';

var easy = require('easy'),
    easylayout = require('easy-layout'),
    Textarea = easy.Textarea,
    options = easylayout.options,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    grammarTextareaSelector = 'textarea#grammar',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    leftColumn = new SizeableElement(leftColumnSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    grammarTextarea = new Textarea(grammarTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    TO_THE_RIGHT_OF = options.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

class Example {
  static getGrammarTextareaValue() { return grammarTextarea.getValue(); }

  static setGrammarTextareaValue(value) { grammarTextarea.setValue(value); }

  static onContentTextareaKeyUp(handler) { contentTextarea.on('keyup', function() {
    var content = contentTextarea.getValue(); ///

    handler(content);
  }); }

  static onGrammarTextareaChange(handler) { grammarTextarea.onChange(handler); }

  static updateParseTree(lexer, parser) {
    try {
      var contentTextareaValue = contentTextarea.getValue(),
          content = contentTextareaValue;  ///

      if (content !== '') {
        var contents = content.split(/\n/),
            lines = lexer.linesFromContents(contents),
            tokens = tokensFromLines(lines),
            documentNode = parser.parse(tokens);

        if (documentNode === null) {
          throw new Error('The document cannot be parsed for some reason.');
        }

        var parseTree = documentNode.getParseTree();

        parseTree.shiftLine();  //

        var parseTreeString = parseTree.toString(),
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
    var parseTreeTextareaHTML = '';

    parseTreeTextarea.html(parseTreeTextareaHTML);
  }
}

module.exports = Example;

function tokensFromLines(lines) {
  var tokens = lines.reduce(function(tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}