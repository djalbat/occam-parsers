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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25QYXJzZXIuanMiXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwiaW5wdXQiLCJ1bmRlZmluZWQiLCJpbmRleCIsInBhcnNlZCIsImV4cHIiLCJwYXJzZWRJbnB1dCIsInNsaWNlIiwiY2hhcmFjdGVyIiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dENoYXJhY3RlciIsImNoYXJBdCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiaW5wdXRTdWJzdHJpbmciLCJzdWJzdHIiLCJtYXRjaGVzIiwiZXhlYyIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImZpcnN0TWF0Y2hMZW5ndGgiLCJydWxlcyIsInNvbWUiLCJydWxlIiwiYmluZCIsInRlcm0iLCJwYXJzZVplcm9Pck1vcmVUaW1lcyIsInBsdXNPck1pbnVzVGVybSIsImZhY3RvciIsIm11bHRpcGx5T3JEaXZpZGVUZXJtIiwicGFyc2VGaXJzdE9mIiwibmF0dXJhbE51bWJlciIsInBhcmVudGhlc2l6ZWRFeHByIiwicGFyc2VDaGFyYWN0ZXIiLCJwYXJzZVJlZ3VsYXJFeHByZXNzaW9uIiwicGx1c09yTWludXMiLCJtdWx0aXBseU9yRGl2aWRlIiwicGx1cyIsIm1pbnVzIiwibXVsdGlwbHkiLCJkaXZpZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsWTtBQUNKLDBCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhQyxTQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRCxTQUFiO0FBQ0Q7Ozs7MEJBRUtELEssRUFBTztBQUNYLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtFLEtBQUwsR0FBYSxDQUFiOztBQUVBLFVBQUlDLFNBQVMsS0FBS0MsSUFBTCxFQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLFlBQUlFLGNBQWNMLE1BQU1NLEtBQU4sQ0FBWSxDQUFaLEVBQWUsS0FBS0osS0FBcEIsQ0FBbEI7O0FBRUEs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Q0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLHNCQUFMLENBQTRCLEtBQTVCLENBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLQSxzQkFBTCxDQUE0QixLQUE1QixDQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxXQUFMLE1BQXNCLEtBQUtWLElBQUwsRUFBN0I7QUFDRDs7OzJDQUVzQjtBQUNyQixhQUFPLEtBQUtXLGdCQUFMLE1BQTJCLEtBQUtYLElBQUwsRUFBbEM7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLSyxZQUFMLENBQWtCLEtBQUtPLElBQUwsQ0FBVWIsSUFBVixDQUFlLElBQWYsQ0FBbEIsRUFBd0MsS0FBS2MsS0FBTCxDQUFXZCxJQUFYLENBQWdCLElBQWhCLENBQXhDLENBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtNLFlBQUwsQ0FBa0IsS0FBS1MsUUFBTCxDQUFjZixJQUFkLENBQW1CLElBQW5CLENBQWxCLEVBQTRDLEtBQUtnQixNQUFMLENBQVloQixJQUFaLENBQWlCLElBQWpCLENBQTVDLENBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCMUMsWUFBakI7O0FBRUEsU0FBU21CLEtBQVQsQ0FBZXdCLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJjb21tb25QYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbmRleCA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5pbmRleCA9IDA7XG5cbiAgICB2YXIgcGFyc2VkID0gdGhpcy5leHByKCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICB2YXIgcGFyc2VkSW5wdXQgPSBpbnB1dC5zbGljZSgwLCB0aGlzLmluZGV4KTtcblxuICAgICAgcmV0dXJuIHBhcnNlZElucHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwYXJzZUNoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGlucHV0TGVuZ3RoID0gdGhpcy5pbnB1dC5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRDaGFyYWN0ZXIgPSB0aGlzLmlucHV0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgaWYgKGlucHV0Q2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5pbmRleCArPSAxO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlUmVndWxhckV4cHJlc3Npb24ocmVndWxhckV4cHJlc3Npb24pIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGlucHV0TGVuZ3RoID0gdGhpcy5pbnB1dC5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5pbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJzdHJpbmcgPSB0aGlzLmlucHV0LnN1YnN0cih0aGlzLmluZGV4KSxcbiAgICAgICAgICBtYXRjaGVzID0gcmVndWxhckV4cHJlc3Npb24uZXhlYyhpbnB1dFN1YnN0cmluZyk7XG5cbiAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMuaW5kZXggPT09IDApIHtcbiAgICAgICAgdmFyIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIGZpcnN0TWF0Y2hMZW5ndGggPSBmaXJzdE1hdGNoLmxlbmd0aDtcblxuICAgICAgICB0aGlzLmluZGV4ICs9IGZpcnN0TWF0Y2hMZW5ndGg7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgcGFyc2VGaXJzdE9mKC4uLnJ1bGVzKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCxcbiAgICAgICAgcGFyc2VkID0gcnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG5cbiAgICAgIGlmIChydWxlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICB9XG5cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlWmVyb09yTW9yZVRpbWVzKHJ1bGUpIHtcbiAgICBmb3IoOzspIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICAgIGlmICghcnVsZSgpKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHByKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm0oKSAmJiB0aGlzLnBhcnNlWmVyb09yTW9yZVRpbWVzKHRoaXMucGx1c09yTWludXNUZXJtLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5mYWN0b3IoKSAmJiB0aGlzLnBhcnNlWmVyb09yTW9yZVRpbWVzKHRoaXMubXVsdGlwbHlPckRpdmlkZVRlcm0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBmYWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VGaXJzdE9mKHRoaXMubmF0dXJhbE51bWJlci5iaW5kKHRoaXMpLCB0aGlzLnBhcmVudGhlc2l6ZWRFeHByLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcGFyZW50aGVzaXplZEV4cHIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VDaGFyYWN0ZXIoJygnKSAmJiB0aGlzLmV4cHIoKSAmJiB0aGlzLnBhcnNlQ2hhcmFjdGVyKCcpJyk7XG4gIH07XG5cbiAgbmF0dXJhbE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJlZ3VsYXJFeHByZXNzaW9uKC9cXGQrKD86XFwuXFxkKyk/Lyk7XG4gIH1cblxuICBwbHVzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmVndWxhckV4cHJlc3Npb24oL1srXS8pO1xuICB9XG5cbiAgbWludXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VSZWd1bGFyRXhwcmVzc2lvbigvWy1dLyk7XG4gIH1cblxuICBtdWx0aXBseSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJlZ3VsYXJFeHByZXNzaW9uKC9bKl0vKTtcbiAgfVxuXG4gIGRpdmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJlZ3VsYXJFeHByZXNzaW9uKC9bL10vKTtcbiAgfVxuXG4gIHBsdXNPck1pbnVzVGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVzT3JNaW51cygpICYmIHRoaXMudGVybSgpO1xuICB9XG5cbiAgbXVsdGlwbHlPckRpdmlkZVRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHlPckRpdmlkZSgpICYmIHRoaXMudGVybSgpO1xuICB9XG5cbiAgcGx1c09yTWludXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VGaXJzdE9mKHRoaXMucGx1cy5iaW5kKHRoaXMpLCB0aGlzLm1pbnVzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbXVsdGlwbHlPckRpdmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUZpcnN0T2YodGhpcy5tdWx0aXBseS5iaW5kKHRoaXMpLCB0aGlzLmRpdmlkZS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=