'use strict';

var easyui = require('easyui'),
    lexers = require('occam-lexers'),
    Div = easyui.Div,
    BNFLexer = lexers.BNFLexer,
    GallinaLexer = lexers.GallinaLexer;

var Example = require('./example'),
    Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser'),
    grammar = require ('../../es6/gallina/grammar');

var lexer = undefined,
    parser = undefined,
    containerDivSelector = 'div.container',
    containerDiv = new Div(containerDivSelector);

class GallinaExample extends Example {
  static run() {
    lexer = GallinaLexer.fromNothing();

    var grammarTextAreaValue = grammar, ///
        lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = lexer.terminalSymbolsRegExpPattern(),
        terminalTypes = lexer.terminalTypes(),
        mappings = {},
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, terminalTypes, mappings);

    parser = new Parser(productions);

    Example.grammarTextArea.setValue(grammarTextAreaValue);

    Example.contentTextArea.onChange(function() {
      Example.updateParseTree(lexer, parser);
    });

    containerDiv.removeClass('hidden');
  }
}

module.exports = GallinaExample;
