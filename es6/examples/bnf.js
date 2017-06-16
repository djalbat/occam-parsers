'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../bnf/grammar'),
      BNFParser = require('../bnf/parser');

const { Textarea } = easy,
      { BNFLexer } = lexers;

const lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      adjustedBNFGrammarTextareaSelector = 'textarea#adjustedBNFGrammar',
      lexicalGrammar = BNFLexer.grammar;

let lexicalGrammarTextarea,
    adjustedBNFGrammarTextarea,
    bnfLexer = null,
    bnfParser = null;

class BNFExample {
  static run() {
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);
    adjustedBNFGrammarTextarea = new Textarea(adjustedBNFGrammarTextareaSelector);

    const lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '), ///
          bnfGrammarTextareaValue = grammar, ///
          contentTextareaValue = grammar; ///

    lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

    Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    Example.setContentTextareaValue(contentTextareaValue);

    Example.onBNFGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    lexicalGrammarTextarea.onKeyUp(update);

    update();
  }
}

function update() {
  updateBNFLexer();

  updateBNFParser();

  updateAdjustedBNFGrammar();

  if (bnfLexer !== null) {
    const production = null,
          node = Example.updateParseTreeTextarea(bnfLexer, bnfParser, production),
          productionsNode = node; ///

    BNFParser.generateProductions(productionsNode);
  } else {
    Example.clearParseTreeTextarea();
  }
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

function updateAdjustedBNFGrammar() {
  const productions = bnfParser.getProductions(),
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
