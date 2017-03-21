'use strict';

var easy = require('easy'),
    Textarea = easy.Textarea;

var lexers = require('occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var BasicParser = require('../basic/parser');

var Example = require('../example');

var terminalSymbolsRegExpPatternTextarea,
    terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`,
    grammar = `

      expression                 ::= term operatorThenTerm*
      
      operatorThenTerm           ::= operator term
      
      operator                   ::= '+' | '-' | '*' | '/'
      
      term                       ::= naturalNumber | parenthesizedExpression
      
      naturalNumber              ::= /^\\d+$/
      
      parenthesizedExpression    ::= '(' expression ')'
    
    `,
    basicLexer = null,
    basicParser = null;

class BasicExample {
  static run() {
    terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

    var grammarTextareaValue = grammar, ///
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
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,  ///
      terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
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
  var grammarTextareaValue = Example.getGrammarTextareaValue(),
      grammar = grammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  }
  catch (error) {
    valid = false;
  }

  return valid;
}
