'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(string) {
    _classCallCheck(this, TerminalPart);

    this.string = string;
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.index,
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            string = this.string,
            stringIndex = inputSubstring.indexOf(string);

        if (stringIndex === 0) {
          var stringLength = string.length;

          context.index += stringLength;

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol) {
      var terminalPart = null,
          terminalRegExp = /'([^']+)'/,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var string = matches[1];

        terminalPart = new TerminalPart(string);
      }

      return terminalPart;
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;