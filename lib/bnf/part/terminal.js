'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(nonWhitespace) {
    _classCallCheck(this, TerminalPart);

    this.nonWhitespace = nonWhitespace;
  }

  _createClass(TerminalPart, [{
    key: 'hasNonWhitespace',
    value: function hasNonWhitespace() {
      return this.nonWhitespace;
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
    key: 'setNonWhitespace',
    value: function setNonWhitespace(nonWhitespace) {
      this.nonWhitespace = nonWhitespace;
    }
  }, {
    key: 'clone',
    value: function clone(Part) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Part, [null].concat(remainingArguments, [this.nonWhitespace])))();
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJub25XaGl0ZXNwYWNlIiwibm9uVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwiZXBzaWxvblBhcnQiLCJQYXJ0IiwicmVtYWluaW5nQXJndW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxZO0FBQ0osd0JBQVlDLGFBQVosRUFBMkI7QUFBQTs7QUFDekIsU0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQSxhQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsa0JBQWtCLEtBQXhCOztBQUVBLGFBQU9BLGVBQVA7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1DLGVBQWUsSUFBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLEtBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O3FDQUVnQkgsYSxFQUFlO0FBQzlCLFdBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7OzswQkFFS0ksSSxFQUE2QjtBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBRSxnREFBV0QsSUFBWCxnQkFBbUJDLGtCQUFuQixHQUF1QyxLQUFLTCxhQUE1QztBQUE2RDs7Ozs7O0FBR3BHTSxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Iobm9uV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9uV2hpdGVzcGFjZSA9IG5vbldoaXRlc3BhY2U7XG4gIH1cblxuICBoYXNOb25XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vbldoaXRlc3BhY2U7XG4gIH1cblxuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc0Vwc2lsb25QYXJ0KCkge1xuICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gZmFsc2U7XG4gICAgXG4gICAgcmV0dXJuIGVwc2lsb25QYXJ0O1xuICB9XG5cbiAgc2V0Tm9uV2hpdGVzcGFjZShub25XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub25XaGl0ZXNwYWNlID0gbm9uV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGNsb25lKFBhcnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gbmV3IFBhcnQoLi4ucmVtYWluaW5nQXJndW1lbnRzLCB0aGlzLm5vbldoaXRlc3BhY2UpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0O1xuIl19