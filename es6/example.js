'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easyLayout;

const contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree',
      lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      extendedBNFGrammarTextareaSelector = 'textarea#extendedBNFGrammar',
      sizeableElementSelector = '#sizeableElement',
      verticalSplitterSelector = '#verticalSplitter',
      contentTextarea = new Textarea(contentTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
      lexicalGrammarTextarea =new Textarea(lexicalGrammarTextareaSelector),
      extendedBNFGrammarTextarea = new Textarea(extendedBNFGrammarTextareaSelector),
      sizeableElement = new SizeableElement(sizeableElementSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

let lexer = null,
    parser = null;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static run(content, lexicalGrammar, extendedBNFGrammar, updateHandler) {
    const contentTextareaValue = content, ///
          extendedBNFGrammarTextareaValue = extendedBNFGrammar,  ///
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  ');

    contentTextarea.setValue(contentTextareaValue);

    lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

    extendedBNFGrammarTextarea.setValue(extendedBNFGrammarTextareaValue);

    contentTextarea.onKeyUp(updateHandler);

    lexicalGrammarTextarea.onKeyUp(updateHandler);

    extendedBNFGrammarTextarea.onKeyUp(updateHandler);
  }

  static updateLexer(Lexer) {
    const lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

    let lexicalGrammar = null;

    try {
      lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
    } catch (error) {}

    const lexicalGrammarValid = (lexicalGrammar !== null);

    if (lexicalGrammarValid) {
      lexer = Lexer.fromGrammar(lexicalGrammar);

      lexicalGrammarTextarea.removeClass('error');
    } else {
      lexer = null;

      lexicalGrammarTextarea.addClass('error');
    }
  }

  static updateParser(callback) {
    const bnfGrammarTextareaValue = extendedBNFGrammarTextarea.getValue(),
          grammar = bnfGrammarTextareaValue; ///

    parser = callback(grammar);
  }

  static updateParseTree(productionName) {
    let node = null;

    if ((lexer !== null) && (parser !== null)) {
      try {
        const contentTextareaValue = contentTextarea.getValue(),
              content = contentTextareaValue, ///
              production = parser.findProduction(productionName),
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
        Example.clearParseTreeTextarea();

        contentTextarea.addClass('error');
      }
    } else {
      const parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
    
    return node;
  }
}

module.exports = Example;
