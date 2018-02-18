'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const ruleUtilities = require('./utilities/rule'),
      tokensUtilities = require('./utilities/tokens');

const { Textarea } = easy,
      { findRuleByName } = ruleUtilities,
      { significantTokensFromLines } = tokensUtilities,
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
              name = ruleName,  ///
              rules = parser.getRules(),
              rule = findRuleByName(name, rules),
              lines = lexer.linesFromContent(content),
              significantTokens = significantTokensFromLines(lines);

        node = parser.nodeFromSignificantTokens(significantTokens, rule);

        if (node !== null) {
          const parseTree = node.asParseTree(lines);

          parseTree.shiftLine();  //

          const parseTreeString = parseTree.asString();

          parseTreeTextareaHTML = parseTreeString;  ///
        } else {
          parseTreeTextareaHTML = '';
        }

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
