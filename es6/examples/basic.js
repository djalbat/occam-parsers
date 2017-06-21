'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../basic/grammar'),
      BasicParser = require('../basic/parser');

const { Textarea } = easy,
      { BasicLexer } = lexers;

const lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      lexicalGrammar = BasicLexer.grammar;

let lexicalGrammarTextarea,
    basicLexer = null,
    basicParser = null;

class BasicExample {
  static run() {
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);

    const bnfGrammarTextareaValue = grammar, ///
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '); ///

    lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

    Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    Example.onExtendedBNFGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    lexicalGrammarTextarea.onKeyUp(update);

    update();
  }
}

function update() {
  updateBasicLexer();

  updateBasicParser();

  if ((basicLexer !== null) && (basicParser !== null)) {
    const production = null;  ///

    Example.updateParseTreeTextarea(basicLexer, basicParser, production);
  } else {
    Example.clearParseTreeTextarea();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  const lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  let lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  const lexicalGrammarValid = (lexicalGrammar !== null);

  if (lexicalGrammarValid) {
    basicLexer = BasicLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  const bnfGrammarTextareaValue = Example.getExtendedBNFGrammarTextareaValue(),
        grammar = bnfGrammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
}
