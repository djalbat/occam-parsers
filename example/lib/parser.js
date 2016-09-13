'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element,
    TextArea = easyui.TextArea;

var BNFLexer = require('../../es6/bnfLexer'),
    BNFParser = require('../../es6/bnfParser'),
    Parser = require('../../es6/parser');

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var specialSymbols = '',
    Parts = [],
    mappings = {};

var ParserExample = function () {
    function ParserExample() {
        _classCallCheck(this, ParserExample);
    }

    _createClass(ParserExample, null, [{
        key: 'run',
        value: function run() {
            updateGrammar();

            grammarTextArea.onChange(function () {
                updateGrammar();
                updateInput();
            });

            inputTextArea.onChange(function () {
                updateInput();
            });
        }
    }]);

    return ParserExample;
}();

module.exports = ParserExample;

var parser;

function updateGrammar() {
    var grammarTextAreaValue = grammarTextArea.getValue(),
        grammar = grammarTextAreaValue,
        ///
    lines = BNFLexer.linesFromGrammar(grammar, specialSymbols),
        productions = BNFParser.parse(lines, Parts, mappings);

    parser = new Parser(productions);
}

function updateInput() {
    var inputTextAreaValue = inputTextArea.getValue(),
        input = inputTextAreaValue,
        ///
    parsedInput = parser.parse(input),
        paragraphElementHTML = parsedInput; ///

    paragraphElement.html(paragraphElementHTML);
}