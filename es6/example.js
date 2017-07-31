'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const parserUtil = require('./util/parser');

const { Textarea } = easy,
      { SizeableElement, VerticalSplitter } = easyLayout;

const contentTextareaSelector = 'textarea#content',
      parseTreeTextareaSelector = 'textarea#parseTree',
      lexicalEntriesTextareaSelector = 'textarea#lexicalEntries',
      bnfTextareaSelector = 'textarea#bnf',
      sizeableElementSelector = '#sizeableElement',
      verticalSplitterSelector = '#verticalSplitter',
      contentTextarea = new Textarea(contentTextareaSelector),
      parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
      lexicalEntriesTextarea =new Textarea(lexicalEntriesTextareaSelector),
      bnfTextarea = new Textarea(bnfTextareaSelector),
      sizeableElement = new SizeableElement(sizeableElementSelector),
      beforeSizeableElement = false,
      afterSizeableElement = true;

let lexer = null,
    parser = null;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

class Example {
  static run(content, lexicalEntries, bnf, updateHandler) {
    const contentTextareaValue = content, ///
          bnfTextareaValue = bnf,  ///
          lexicalEntriesTextareaValue = JSON.stringify(lexicalEntries, null, '  ');

    contentTextarea.setValue(contentTextareaValue);

    lexicalEntriesTextarea.setValue(lexicalEntriesTextareaValue);

    bnfTextarea.setValue(bnfTextareaValue);

    contentTextarea.onKeyUp(updateHandler);

    lexicalEntriesTextarea.onKeyUp(updateHandler);

    bnfTextarea.onKeyUp(updateHandler);
  }

  static updateLexer(Lexer) {
    const lexicalEntriesTextareaValue = lexicalEntriesTextarea.getValue();

    let lexicalEntries = null;

    try {
      lexicalEntries = JSON.parse(lexicalEntriesTextareaValue);
    } catch (error) {}

    const lexicalEntriesValid = (lexicalEntries !== null);

    if (lexicalEntriesValid) {
      lexer = Lexer.fromEntries(lexicalEntries);

      lexicalEntriesTextarea.removeClass('error');
    } else {
      lexer = null;

      lexicalEntriesTextarea.addClass('error');
    }
  }

  static updateParser(callback) {
    const bnfTextareaValue = bnfTextarea.getValue(),
          bnf = bnfTextareaValue; ///

    parser = callback(bnf);
  }

  static updateParseTree(ruleName) {
    let node = null,
        parseTreeTextareaHTML = '';

    if ((lexer !== null) && (parser !== null)) {
      try {
        const contentTextareaValue = contentTextarea.getValue(),
              content = contentTextareaValue, ///
              rules = parser.getRules(),
              rule = parserUtil.findRule(ruleName, rules),
              lines = lexer.linesFromContent(content);

        node = parser.nodeFromLines(lines, rule);

        if (node === null) {
          throw new Error('The document cannot be parsed for some reason.');  ///
        }

        const parseTree = node.generateParseTree(lines);

        parseTree.shiftLine();  //

        const parseTreeString = parseTree.toString();

        parseTreeTextareaHTML = parseTreeString;  ///

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');
      }
    }

    parseTreeTextarea.html(parseTreeTextareaHTML);

    return node;
  }
}

module.exports = Example;
