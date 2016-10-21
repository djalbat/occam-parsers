'use strict';

var easyui = require('easyui'),
    lexers = require('../../es6/occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var NonBasicExample = require('./nonBasicExample'),
    Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser'),
    grammar = require ('../../es6/grammar/gallina');

var preprocessor = undefined,
    lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

class GallinaExample extends NonBasicExample {
  static run() {
    lexer = GallinaLexer.fromNothing();

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

module.exports = GallinaExample;
