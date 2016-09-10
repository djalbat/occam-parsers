'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonParser = function () {
  function CommonParser() {
    _classCallCheck(this, CommonParser);

    this.input = undefined;
    this.index = undefined;
  }

  _createClass(CommonParser, [{
    key: 'parse',
    value: function parse(input) {
      this.input = input;
      this.index = 0;

      var parsed = this.expr();

      if (parsed) {
        var parsedInput = input.slice(0, this.index);

        return parsedInput;
      } else {
        return null;
      }
    }
  }, {
    key: 'parseCharacter',
    value: function parseCharacter(character) {
      var parsed = false,
          inputLength = this.input.length;

      if (this.index < inputLength) {
        var inputCharacter = this.input.charAt(this.index);

        if (inputCharacter === character) {
          this.index += 1;

          parsed = true;
        }
      }

      return parsed;
    }
  }, {
    key: 'parseRegularExpression',
    value: function parseRegularExpression(regularExpression) {
      var parsed = false,
          inputLength = this.input.length;

      if (this.index < inputLength) {
        var inputSubstring = this.input.substr(this.index),
            matches = regularExpression.exec(inputSubstring);

        if (matches && matches.index === 0) {
          var firstMatch = first(matches),
              firstMatchLength = firstMatch.length;

          this.index += firstMatchLength;

          parsed = true;
        }
      }

      return parsed;
    }
  }, {
    key: 'parseFirstOf',
    value: function parseFirstOf() {
      for (var _len = arguments.length, rules = Array(_len), _key = 0; _key < _len; _key++) {
        rules[_key] = arguments[_key];
      }

      var index = this.index,
          parsed = rules.some(function (rule) {

        if (rule()) {
          return true;
        } else {
          this.index = index;
        }
      }.bind(this));

      return parsed;
    }
  }, {
    key: 'parseZeroOrMoreTimes',
    value: function parseZeroOrMoreTimes(rule) {
      for (;;) {
        var index = this.index;

        if (!rule()) {
          this.index = index;

          return true;
        }
      }
    }
  }, {
    key: 'expr',
    value: function expr() {
      return this.term() && this.parseZeroOrMoreTimes(this.plusOrMinusTerm.bind(this));
    }
  }, {
    key: 'term',
    value: function term() {
      return this.factor() && this.parseZeroOrMoreTimes(this.multiplyOrDivideTerm.bind(this));
    }
  }, {
    key: 'factor',
    value: function factor() {
      return this.parseFirstOf(this.naturalNumber.bind(this), this.parenthesizedExpr.bind(this));
    }
  }, {
    key: 'parenthesizedExpr',
    value: function parenthesizedExpr() {
      return this.parseCharacter('(') && this.expr() && this.parseCharacter(')');
    }
  }, {
    key: 'naturalNumber',
    value: function naturalNumber() {
      return this.parseRegularExpression(/\d+(?:\.\d+)?/);
    }
  }, {
    key: 'plus',
    value: function plus() {
      return this.parseRegularExpression(/[+]/);
    }
  }, {
    key: 'minus',
    value: function minus() {
      return this.parseRegularExpression(/[-]/);
    }
  }, {
    key: 'multiply',
    value: function multiply() {
      return this.parseRegularExpression(/[*]/);
    }
  }, {
    key: 'divide',
    value: function divide() {
      return this.parseRegularExpression(/[/]/);
    }
  }, {
    key: 'plusOrMinusTerm',
    value: function plusOrMinusTerm() {
      return this.plusOrMinus() && this.term();
    }
  }, {
    key: 'multiplyOrDivideTerm',
    value: function multiplyOrDivideTerm() {
      return this.multiplyOrDivide() && this.term();
    }
  }, {
    key: 'plusOrMinus',
    value: function plusOrMinus() {
      return this.parseFirstOf(this.plus.bind(this), this.minus.bind(this));
    }
  }, {
    key: 'multiplyOrDivide',
    value: function multiplyOrDivide() {
      return this.parseFirstOf(this.multiply.bind(this), this.divide.bind(this));
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}