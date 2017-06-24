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
  static getLexicalGrammarTextareaValue() { return lexicalGrammarTextarea.getValue(); }

  static getExtendedBNFGrammarTextareaValue() { return extendedBNFGrammarTextarea.getValue(); }

  static setLexicalGrammarTextareaValue(value) { lexicalGrammarTextarea.setValue(value); }

  static setExtendedBNFGrammarTextareaValue(value) { extendedBNFGrammarTextarea.setValue(value); }

  static setContentTextareaValue(value) { contentTextarea.setValue(value); }

  static onLexicalGrammarTextareaKeyUp(handler) { lexicalGrammarTextarea.onKeyUp(handler); }

  static onExtendedBNFGrammarTextareaKeyUp(handler) { extendedBNFGrammarTextarea.onKeyUp(handler); }

  static onContentTextareaKeyUp(handler) { contentTextarea.onKeyUp(handler); }

  static updateParseTreeTextarea(production) {
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

  static updateLexer(Lexer) {
    const lexicalGrammarTextareaValue = Example.getLexicalGrammarTextareaValue();

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
    const bnfGrammarTextareaValue = Example.getExtendedBNFGrammarTextareaValue(),
          grammar = bnfGrammarTextareaValue; ///

    parser = callback(grammar);
  }

  static updateParseTree(productionName) {
    if ((lexer !== null) && (parser !== null)) {
      const production = parser.findProduction(productionName);

      Example.updateParseTreeTextarea(production);
    } else {
      Example.clearParseTreeTextarea();
    }
  }
}

module.exports = Example;
