'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../bnf/grammar'),
      BNFParser = require('../bnf/parser');

const { Textarea } = easy,
      { BNFLexer } = lexers;

const lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      lexicalGrammar = BNFLexer.grammar;

let lexicalGrammarTextarea,
    bnfLexer = null,
    bnfParser = null;

class BNFExample {
  static run() {
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);

    const bnfGrammarTextareaValue = grammar, ///
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '); ///

    lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

    Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    Example.onBNFGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    lexicalGrammarTextarea.onKeyUp(update);

    update();
  }
}

function update() {
  updateBNFLexer();

  updateBNFParser();

  // if (bnfLexer !== null) {
  //   const production = null;  ///
  //
  //   Example.updateParseTreeTextarea(bnfLexer, bnfParser, production);
  // } else {
  //   Example.clearParseTreeTextarea();
  // }
}

module.exports = BNFExample;

function updateBNFLexer() {
  const lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  let lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  const lexicalGrammarValid = (lexicalGrammar !== null);

  if (lexicalGrammarValid) {
    bnfLexer = BNFLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    bnfLexer = null;
  }
}

function updateBNFParser() {
  bnfParser = BNFParser.fromNothing();
}
