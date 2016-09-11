'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;

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
      return this.term() && this.parseZeroOrMoreTimes(this.signedTerm.bind(this));
    }
  }, {
    key: 'signedTerm',
    value: function signedTerm() {
      return this.sign() && this.term();
    }
  }, {
    key: 'sign',
    value: function sign() {
      return this.parseFirstOf(this.plus.bind(this), this.minus.bind(this));
    }
  }, {
    key: 'term',
    value: function term() {
      return this.parseFirstOf(this.naturalNumber.bind(this), this.parenthesizedExpr.bind(this));
    }
  }, {
    key: 'naturalNumber',
    value: function naturalNumber() {
      return this.parseRegularExpression(/\d+/);
    }
  }, {
    key: 'parenthesizedExpr',
    value: function parenthesizedExpr() {
      return this.parseCharacter('(') && this.expr() && this.parseCharacter(')');
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
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25QYXJzZXIuanMiXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJpbnB1dCIsInVuZGVmaW5lZCIsImluZGV4IiwicGFyc2VkIiwiZXhwciIsInBhcnNlZElucHV0Iiwic2xpY2UiLCJjaGFyYWN0ZXIiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsImlucHV0Q2hhcmFjdGVyIiwiY2hhckF0IiwicmVndWxhckV4cHJlc3Npb24iLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZmlyc3RNYXRjaExlbmd0aCIsInJ1bGVzIiwic29tZSIsInJ1bGUiLCJiaW5kIiwidGVybSIsInBhcnNlWmVyb09yTW9yZVRpbWVzIiwic2lnbmVkVGVybSIsInNpZ24iLCJwYXJzZUZpcnN0T2YiLCJwbHVzIiwibWludXMiLCJuYXR1cmFsTnVtYmVyIiwicGFyZW50aGVzaXplZEV4cHIiLCJwYXJzZVJlZ3VsYXJFeHByZXNzaW9uIiwicGFyc2VDaGFyYWN0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsWTtBQUNKLHdCQUFZQyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFNBQUtDLEtBQUwsR0FBYUMsU0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUQsU0FBYjtBQUNEOzs7OzBCQUVLRCxLLEVBQU87QUFDWCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLRSxLQUFMLEdBQWEsQ0FBYjs7QUFFQSxVQUFJQyxTQUFTLEtBQUtDLElBQUwsRUFBYjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixZQUFJRSxjQUFjTCxNQUFNTSxLQUFOLENBQVksQ0FBWixFQUFlLEtBQUtKLEtBQXBCLENBQWxCOztBQUVBLGVBQU9HLFdBQVA7QUFDRCxPQUpELE1BSU87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Q0FBUDtBQUNEOzs7NEJBRU87QUFDTixhQUFPLEtBQUtBLHNCQUFMLENBQTRCLEtBQTVCLENBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJ0QyxZQUFqQjs7QUFFQSxTQUFTb0IsS0FBVCxDQUFlbUIsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImNvbW1vblBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG5cbiAgICB0aGlzLmlucHV0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaW5kZXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0KSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuaW5kZXggPSAwO1xuXG4gICAgdmFyIHBhcnNlZCA9IHRoaXMuZXhwcigpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgdmFyIHBhcnNlZElucHV0ID0gaW5wdXQuc2xpY2UoMCwgdGhpcy5pbmRleCk7XG5cbiAgICAgIHJldHVybiBwYXJzZWRJbnB1dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gICAgdmFyIHBhcnNlZCA9IGZhbHNlLFxuICAgICAgICBpbnB1dExlbmd0aCA9IHRoaXMuaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCBpbnB1dExlbmd0aCkge1xuICAgICAgdmFyIGlucHV0Q2hhcmFjdGVyID0gdGhpcy5pbnB1dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgIGlmIChpbnB1dENoYXJhY3RlciA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gMTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZVJlZ3VsYXJFeHByZXNzaW9uKHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdmFyIHBhcnNlZCA9IGZhbHNlLFxuICAgICAgICBpbnB1dExlbmd0aCA9IHRoaXMuaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPCBpbnB1dExlbmd0aCkge1xuICAgICAgdmFyIGlucHV0U3Vic3RyaW5nID0gdGhpcy5pbnB1dC5zdWJzdHIodGhpcy5pbmRleCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHJlZ3VsYXJFeHByZXNzaW9uLmV4ZWMoaW5wdXRTdWJzdHJpbmcpO1xuXG4gICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmluZGV4ID09PSAwKSB7XG4gICAgICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBmaXJzdE1hdGNoTGVuZ3RoID0gZmlyc3RNYXRjaC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5pbmRleCArPSBmaXJzdE1hdGNoTGVuZ3RoO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlRmlyc3RPZiguLi5ydWxlcykge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgsXG4gICAgICAgIHBhcnNlZCA9IHJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuXG4gICAgICBpZiAocnVsZSgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgfVxuXG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZVplcm9Pck1vcmVUaW1lcyhydWxlKSB7XG4gICAgZm9yKDs7KSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4O1xuXG4gICAgICBpZiAoIXJ1bGUoKSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtKCkgJiYgdGhpcy5wYXJzZVplcm9Pck1vcmVUaW1lcyh0aGlzLnNpZ25lZFRlcm0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzaWduZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ24oKSAmJiB0aGlzLnRlcm0oKTtcbiAgfVxuXG4gIHNpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VGaXJzdE9mKHRoaXMucGx1cy5iaW5kKHRoaXMpLCB0aGlzLm1pbnVzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUZpcnN0T2YodGhpcy5uYXR1cmFsTnVtYmVyLmJpbmQodGhpcyksIHRoaXMucGFyZW50aGVzaXplZEV4cHIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuYXR1cmFsTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmVndWxhckV4cHJlc3Npb24oL1xcZCsvKTtcbiAgfVxuXG4gIHBhcmVudGhlc2l6ZWRFeHByKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlQ2hhcmFjdGVyKCcoJykgJiYgdGhpcy5leHByKCkgJiYgdGhpcy5wYXJzZUNoYXJhY3RlcignKScpO1xuICB9O1xuXG4gIHBsdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSZWd1bGFyRXhwcmVzc2lvbigvWytdLyk7XG4gIH1cblxuICBtaW51cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJlZ3VsYXJFeHByZXNzaW9uKC9bLV0vKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=