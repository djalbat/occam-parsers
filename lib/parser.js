'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
  function Parser(productions) {
    _classCallCheck(this, Parser);

    this.productions = productions;
  }

  _createClass(Parser, [{
    key: 'parse',
    value: function parse(input) {
      var index = 0,
          context = {
        index: index
      };

      var productions = this.productions,
          firstProduction = first(productions),
          parsed = firstProduction.parse(input, context, productions);

      if (parsed) {
        var parsedInput = input.slice(0, context.index);

        return parsedInput;
      } else {
        return null;
      }
    }
  }]);

  return Parser;
}();

module.exports = Parser;

function first(array) {
  return array[0];
}