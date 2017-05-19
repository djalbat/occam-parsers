'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const BasicParser = require('../basic/parser'),
      Example = require('../example');

const { Textarea } = easy,
      { BasicLexer } = lexers;

const terminalSymbolsRegExpPatternTextareaSelector = '#terminalSymbolsRegExpPattern',
      terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`,
      grammar = `
  
    expression                 ::= term operatorThenTerm*
    
    operatorThenTerm           ::= operator term
    
    operator                   ::= '+' | '-' | '*' | '/'
    
    term                       ::= naturalNumber | parenthesizedExpression
    
    naturalNumber              ::= /^\\d+$/
    
    parenthesizedExpression    ::= '(' expression ')'
          
      `;

let terminalSymbolsRegExpPatternTextarea,
    basicLexer = null,
    basicParser = null;

class BasicExample {
  static run() {
    terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

    const grammarTextareaValue = grammar, ///
          terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

    Example.setGrammarTextareaValue(grammarTextareaValue);

    terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

    terminalSymbolsRegExpPatternTextarea.onKeyUp(update);

    Example.onGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    update();
  }
}

function update() {
  updateBasicLexer();
  updateBasicParser();

  if (basicLexer !== null) {
    const production = null;  ///

    Example.updateParseTree(basicLexer, basicParser, production);
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
          terminal = terminalSymbolsRegExp, ///
          grammar = [{
            terminal : terminal
          }];

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
