'use strict';

var easyui = require('easyui'),
    TextArea = easyui.TextArea;

var lexers = require('../../es6/occam-lexers'),
    BasicLexer = lexers.BasicLexer;

var Example = require('./example');

var terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector);

var grammar = `
    
      expr                       ::= term operatorThenTerm*
      
      operatorThenTerm           ::= operator term
      
      operator                   ::= + | - | * | /
      
      term                       ::= naturalNumber
      
                                   | parenthesizedExpr
      
      naturalNumber              ::= /\\d+/
      
      parenthesizedExpr          ::= ( expr )
    
    `,
    terminalSymbolsRegExpPattern = `\\+|\\-|\\*|\\/|\\(|\\)|\\d+`;

var lexer = null;

class BasicExample {
  static run() {
    var grammarTextAreaValue = grammar, ///
        terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPattern; ///

    Example.setGrammarTextAreaValue(grammarTextAreaValue);

    terminalSymbolsRegExpPatternTextArea.setValue(terminalSymbolsRegExpPatternTextAreaValue);

    update();

    terminalSymbolsRegExpPatternTextArea.onChange(function() {
      update();
    });

    Example.onGrammarTextAreaChange(function() {
      update();
    });

    Example.onContentTextAreaChange(function() {
      update();
    });
  }
}

function update() {
  updateLexer();
  updateParser();

  if (lexer !== null) {
    Example.updateParseTree(lexer);
  }
}

module.exports = BasicExample;

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,  ///
      terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        grammar = [
          { terminal : terminalSymbolsRegExp }
        ];

    lexer = BasicLexer.fromGrammar(grammar);

    terminalSymbolsRegExpPatternTextArea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextArea.addClass('error');

    Example.clearParseTree();

    lexer = null;
  }
}

function updateParser() {
  var grammarTextAreaValue = Example.getGrammarTextAreaValue(),
      terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
      grammar = grammarTextAreaValue, ///
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue, ///
      significantTokenTypes = BasicLexer.significantTokenTypes();

  Example.updateParser(grammar, terminalSymbolsRegExpPattern, significantTokenTypes);
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
