'use strict';

var easyui = require('easyui'),
    lexers = require('occam-lexers'),
    Input = easyui.Input,
    BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var Example = require('./example'),
    Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser');

var lexer = undefined,
    parser = undefined,
    terminalSymbolsRegExpPatternInputSelector = 'input#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPatternInput = new Input(terminalSymbolsRegExpPatternInputSelector);

class BasicExample extends Example {
  static run() {
    updateLexer();
    updateParser();

    terminalSymbolsRegExpPatternInput.onChange(function() {
      updateLexer();
      updateParser();

      Example.updateParseTree(lexer, parser);
    });

    Example.grammarTextArea.onChange(function() {
      updateParser();

      Example.updateParseTree(lexer, parser);
    });

    Example.contentTextArea.onChange(function() {
      Example.updateParseTree(lexer, parser);
    });
  }
}

module.exports = BasicExample;

function updateLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue; ///

      try {
        new RegExp('^(' + terminalSymbolsRegExpPattern + ')');
      }
      catch(error) {
        terminalSymbolsRegExpPattern = '.';
      }

  var terminalSymbolsRegExp = new RegExp('^(' + terminalSymbolsRegExpPattern + ')'),
      grammar = [
        { terminal : terminalSymbolsRegExp }
      ];

  lexer = BasicLexer.fromGrammar(grammar);
}

function updateParser() {
  var grammarTextAreaValue = Example.grammarTextArea.getValue(),
      terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternInput.getValue(),
      grammar = grammarTextAreaValue, ///
      lines = BNFLexer.linesFromGrammar(grammar),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue, ///
      mappings = {},
      productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, mappings);

  parser = new Parser(productions);
}

