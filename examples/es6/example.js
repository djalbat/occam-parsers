'use strict';

var easyui = require('easyui'),
    TextArea = easyui.TextArea,
    easyuilayout = require('easyui-layout'),
    SizeableElement = easyuilayout.SizeableElement,
    VerticalSplitter = easyuilayout.VerticalSplitter;

var lexers = require('../../es6/occam-lexers'),
    BNFLexer = lexers.BNFLexer;

var Parser = require ('../../es6/parser'),
    BNFParser = require ('../../es6/bnfParser');

var leftColumnSelector = '#leftColumn',
    contentTextAreaSelector = 'textarea#content',
    grammarTextAreaSelector = 'textarea#grammar',
    parseTreeTextAreaSelector = 'textarea#parseTree',
    terminalSymbolsRegExpPatternTextAreaSelector = 'textarea#terminalSymbolsRegExpPattern',
    contentTextArea = new TextArea(contentTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    parseTreeTextArea = new TextArea(parseTreeTextAreaSelector),
    terminalSymbolsRegExpPatternTextArea = new TextArea(terminalSymbolsRegExpPatternTextAreaSelector),
    leftColumn = new SizeableElement(leftColumnSelector),
    TO_THE_RIGHT_OF = VerticalSplitter.situated.TO_THE_RIGHT_OF;

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var parser = undefined;

class Example {
  constructor(Lexer, preprocessor) {
    this.Lexer = Lexer;
    this.preprocessor = preprocessor;
    
    this.lexer = null;
  }

  setGrammar(grammar) {
    var grammarTextAreaValue = grammar; ///

    grammarTextArea.setValue(grammarTextAreaValue);
  }

  setTerminalSymbolsRegExpPattern(terminalSymbolsRegExpPattern) {
    var terminalSymbolsRegExpPatternTextAreaValue = terminalSymbolsRegExpPattern; ///
    
    terminalSymbolsRegExpPatternTextArea.setValue(terminalSymbolsRegExpPatternTextAreaValue) 
  }

  run() {
    this.updateLexer();

    if (this.lexer !== null) {
      this.updateParser();
    }

    terminalSymbolsRegExpPatternTextArea.onChange(function() {
      this.updateLexer();

      if (this.lexer !== null) {
        this.updateParser();
        
        this.updateParseTree();
      }
    }.bind(this));

    grammarTextArea.onChange(function() {
      if (this.lexer !== null) {
        this.updateParser();

        this.updateParseTree();
      }
    }.bind(this));

    contentTextArea.onChange(function() {
      if (this.lexer !== null) {
        this.updateParseTree();
      }
    }.bind(this));
  }

  updateLexer() {
    var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
        terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,  ///
        terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

    if (terminalSymbolsRegExpPatternIsValid) {
      var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
          grammar = [
            { terminal : terminalSymbolsRegExp }
          ];

      this.lexer = this.Lexer.fromGrammar(grammar);

      terminalSymbolsRegExpPatternTextArea.removeClass('error');
    } else {
      terminalSymbolsRegExpPatternTextArea.addClass('error');

      this.clearParseTree();

      this.lexer = null;
    }
  }

  updateParser() {
    var grammarTextAreaValue = grammarTextArea.getValue(),
        terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextArea.getValue(),
        grammar = grammarTextAreaValue, ///
        lines = BNFLexer.linesFromGrammar(grammar),
        terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue, ///
        significantTokenTypes = this.Lexer.significantTokenTypes(),
        mappings = {},
        productions = BNFParser.parse(lines, terminalSymbolsRegExpPattern, significantTokenTypes, mappings);

    parser = new Parser(productions);
  }

  updateParseTree(preprocessor) {
    var contentTextAreaValue = contentTextArea.getValue(),
        content = contentTextAreaValue,  ///
        tokens = this.lexer.tokensFromContent(content);

    if (this.preprocessor !== null) {
      var preprocessedTokens = this.preprocessor.parse(tokens);

      tokens = preprocessedTokens;  ///
    }

    var documentNode = parser.parse(tokens),
        parseTree = documentNode.getParseTree(),
        parseTreeStr = parseTree.toString(),
        parseTreeTextAreaHTML = parseTreeStr;  ///

    parseTreeTextArea.html(parseTreeTextAreaHTML);
  }

  clearParseTree() {
    var parseTreeTextAreaHTML = '';

    parseTreeTextArea.html(parseTreeTextAreaHTML);
  }
}

module.exports = Example;

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
