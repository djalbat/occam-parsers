'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const BasicParser = require('../basic/parser'),
      Example = require('../example');

const { Textarea } = easy,
      { BasicLexer } = lexers;

let terminalSymbolsRegExpPatternTextarea;

const terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
      terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`,
      grammar = `
  
        expression                 ::= term operatorThenTerm*
        
        operatorThenTerm           ::= operator term
        
        operator                   ::= '+' | '-' | '*' | '/'
        
        term                       ::= naturalNumber | parenthesizedExpression
        
        naturalNumber              ::= /^\\d+$/
        
        parenthesizedExpression    ::= '(' expression ')'
      
      `;

let basicLexer = null,
    basicParser = null;

class BasicExample {
  static run() {
    terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

    const grammarTextareaValue = grammar, ///
        terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

    Example.setGrammarTextareaValue(grammarTextareaValue);

    terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

    update();

    terminalSymbolsRegExpPatternTextarea.onChange(function() {
      update();
    });

    Example.onGrammarTextareaChange(function() {
      update();
    });

    Example.onContentTextareaKeyUp(function() {
      update();
    });
  }
}

function update() {
  updateBasicLexer();
  updateBasicParser();

  if (basicLexer !== null) {
    Example.updateParseTree(basicLexer, basicParser);
  } else {
    Example.clearParseTree();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  const terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,  ///
      terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    const terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [
          { terminal : terminalSymbolsRegExp }
        ];

    basicLexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextarea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextarea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  const grammarTextareaValue = Example.getGrammarTextareaValue(),
        grammar = grammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
}

function regExpPatternIsValid(regExpPattern) {
  let valid = true;

  try {
    new RegExp(regExpPattern);
  }
  catch (error) {
    valid = false;
  }

  return valid;
}
