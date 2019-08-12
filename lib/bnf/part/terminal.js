'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(noWhitespace) {
    _classCallCheck(this, TerminalPart);

    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalPart, [{
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'isNonTerminalPart',
    value: function isNonTerminalPart() {
      var nonTerminalPart = false;

      return nonTerminalPart;
    }
  }, {
    key: 'isTerminalPart',
    value: function isTerminalPart() {
      var terminalPart = true;

      return terminalPart;
    }
  }, {
    key: 'isEpsilonPart',
    value: function isEpsilonPart() {
      var epsilonPart = false;

      return epsilonPart;
    }
  }, {
    key: 'setNoWhitespace',
    value: function setNoWhitespace(noWhitespace) {
      this.noWhitespace = noWhitespace;
    }
  }, {
    key: 'clone',
    value: function clone(Part) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Part, [null].concat([this.noWhitespace], remainingArguments)))();
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJub25UZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJlcHNpbG9uUGFydCIsIlBhcnQiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QixTQUFLQSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtBLFlBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxrQkFBa0IsS0FBeEI7O0FBRUEsYUFBT0EsZUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUMsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGNBQWMsS0FBcEI7O0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7b0NBRWVILFksRUFBYztBQUM1QixXQUFLQSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7MEJBRUtJLEksRUFBNkI7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQUUsZ0RBQVdELElBQVgsaUJBQWdCLEtBQUtKLFlBQXJCLEdBQXNDSyxrQkFBdEM7QUFBNEQ7Ozs7OztBQUduR0MsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgaGFzTm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsUGFydCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGlzRXBzaWxvblBhcnQoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cblxuICBzZXROb1doaXRlc3BhY2Uobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBjbG9uZShQYXJ0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIG5ldyBQYXJ0KHRoaXMubm9XaGl0ZXNwYWNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0O1xuIl19