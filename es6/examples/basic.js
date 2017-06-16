'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../basic/grammar'),
      BasicParser = require('../basic/parser');

const { Textarea } = easy,
      { BasicLexer } = lexers;

const lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      adjustedBNFGrammarTextareaSelector = 'textarea#adjustedBNFGrammar',
      lexicalGrammar = BasicLexer.grammar;

let lexicalGrammarTextarea,
    adjustedBNFGrammarTextarea,
    basicLexer = null,
    basicParser = null;

class BasicExample {
  static run() {
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);
    adjustedBNFGrammarTextarea = new Textarea(adjustedBNFGrammarTextareaSelector);

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
  updateBasicLexer();

  updateBasicParser();

  if ((basicLexer !== null) && (basicParser !== null)) {
    updateAdjustedBNFGrammar();

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
  const bnfGrammarTextareaValue = Example.getBNFGrammarTextareaValue(),
        grammar = bnfGrammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
}

function updateAdjustedBNFGrammar() {
  const productions = basicParser.getProductions(),
        maximumProductionNameLength = productions.reduce(function(maximumProductionNameLength, production) {
          const productionName = production.getName(),
                productionNameLength = productionName.length;

          maximumProductionNameLength = Math.max(maximumProductionNameLength, productionNameLength);

          return maximumProductionNameLength;
        }, 0),
        adjustedBNFGrammarTextareaValue = productions.reduce(function(adjustedBNFGrammarTextarea, production) {
          const productionString = production.toString(maximumProductionNameLength);
          
          adjustedBNFGrammarTextarea += productionString;

          return adjustedBNFGrammarTextarea;
        }, []);

  adjustedBNFGrammarTextarea.setValue(adjustedBNFGrammarTextareaValue);
}
