'use strict';

var easyui = require('easyui'),
    lexers = require('../../es6/occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var NonBasicExample = require('./nonBasicExample'),
    Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser'),
    PreProcessor = require('../../es6/preprocessor'),
    grammar = require ('../../es6/grammar/florence');

var preprocessor = new PreProcessor(),
    lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

class FlorenceExample extends NonBasicExample {
  static run() {
    lexer = FlorenceLexer.fromNothing();

    var grammarTextAreaValue = grammar, ///
        lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = lexer.terminalSymbolsRegExpPattern(),
        significantTokenTypes = lexer.significantTokenTypes(),
        mappings = {},
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

    parser = new Parser(productions);

    NonBasicExample.grammarTextArea.setValue(grammarTextAreaValue);

    NonBasicExample.contentTextArea.onChange(function() {
      NonBasicExample.updateParseTree(preprocessor, lexer, parser);
    });

    containerDiv.removeClass('hidden');
  }
}

module.exports = FlorenceExample;
