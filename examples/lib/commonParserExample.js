'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    parsers = require('../../index'),
    Element = easyui.Element,
    TextArea = easyui.TextArea,
    CommonParser = parsers.CommonParser;

var inputTextAreaSelector = 'textArea#input',
    grammarTextAreaSelector = 'textArea#grammar',
    paragraphElementSelector = 'p',
    inputTextArea = new TextArea(inputTextAreaSelector),
    grammarTextArea = new TextArea(grammarTextAreaSelector),
    paragraphElement = new Element(paragraphElementSelector);

var CommonParserExample = function () {
    function CommonParserExample() {
        _classCallCheck(this, CommonParserExample);
    }

    _createClass(CommonParserExample, null, [{
        key: 'run',
        value: function run() {
            var commonParser = new CommonParser();

            inputTextArea.onChange(function (value) {
                var input = value,
                    ///
                parsedInput = commonParser.parse(input),
                    paragraphElementHTML = parsedInput; ///

                paragraphElement.html(paragraphElementHTML);
            });
        }
    }]);

    return CommonParserExample;
}();

module.exports = CommonParserExample;