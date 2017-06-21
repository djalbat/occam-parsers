'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../extendedBNF/grammar'),
      ExtendedBNFParser = require('../extendedBNF/parser');

const { Textarea } = easy,
      { BNFLexer } = lexers;

const lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      lexicalGrammar = BNFLexer.grammar;

let lexicalGrammarTextarea,
    bnfLexer = null,
    extendedBNFParser = null;

class ExtendedBNFExample {
  static run() {
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);

    const lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '), ///
          bnfGrammarTextareaValue = grammar,  ///
          contentTextareaValue = grammar; ///

    lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

    Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    Example.setContentTextareaValue(contentTextareaValue);

    Example.onContentTextareaKeyUp(update);

    Example.onExtendedBNFGrammarTextareaKeyUp(update);

    lexicalGrammarTextarea.onKeyUp(update);

    update();
  }
}

function update() {
  updateBNFLexer();

  updateExtendedBNFParser();

  if (bnfLexer !== null) {
    const production = null,
          node = Example.updateParseTreeTextarea(bnfLexer, extendedBNFParser, production),
          productionsNode = node; ///

    ExtendedBNFParser.generateProductions(productionsNode);
  } else {
    Example.clearParseTreeTextarea();
  }
}

module.exports = ExtendedBNFExample;

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

function updateExtendedBNFParser() {
  extendedBNFParser = ExtendedBNFParser.fromNothing();
}
