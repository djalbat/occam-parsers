'use strict';

var easyUI = require('easyui'),
    easyUILayout = require('easyui-layout'),
    occamLexers = require('occam-lexers'),
    BNFLexer = occamLexers.BNFLexer,
    Input = easyUI.Input,
    TextArea = easyUI.TextArea,
    SizeableElement = easyUILayout.SizeableElement,
    VerticalSplitter = easyUILayout.VerticalSplitter;

var leftColumnSelector = '#leftColumn',
    inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    parseTreeTextAreaSelector = 'textArea#parseTree',
    specialSymbolsRegExpInputSelector = 'input#specialSymbolsRegExp',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    specialSymbolsRegExpInput = new Input(specialSymbolsRegExpInputSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser');

var mappings = {};

class ParserExample {
  static run() {
    updateParser();

    specialSymbolsRegExpInput.onChange(function() {
      updateParser();
      updateParseTree();
    });

    grammarTextArea.onChange(function() {
      updateParser();
      updateParseTree();
    });

    inputTextArea.onChange(function() {
      updateParseTree();
    });
  }
}

module.exports = ParserExample;

var parser;

function updateParser() {
  var grammarTextAreaValue = grammarTextArea.getValue(),
      specialSymbolsRegExpInputValue = specialSymbolsRegExpInput.getValue(),
      grammar = grammarTextAreaValue, ///
      specialSymbolsRegExp = specialSymbolsRegExpInputValue, ///
      lines = BNFLexer.linesFromGrammar(grammar),
      productions = BNFParser.parse(lines, specialSymbolsRegExp, mappings);

  parser = new Parser(productions);
}

function updateParseTree() {
  var inputTextAreaValue = inputTextArea.getValue(),
      input = inputTextAreaValue,  ///
      documentNode = parser.parse(input),
      parseTree = documentNode.getParseTree(),
      parseTreeStr = parseTree.toString(),
      parseTreeTextAreaHTML = parseTreeStr;  ///

  parseTreeTextArea.html(parseTreeTextAreaHTML);
}
