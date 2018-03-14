'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart() {
    _classCallCheck(this, TerminalPart);
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse(noWhitespace) {
      this.noWhitespace = noWhitespace;
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
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace; ///
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJub1doaXRlc3BhY2UiLCJ0ZXJtaW5hbFBhcnQiLCJlcHNpbG9uUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsWTs7Ozs7OzswQkFDRUMsWSxFQUFjO0FBQ2xCLFdBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxlQUFlLElBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFwQjs7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRixZQUFaLENBRGdCLENBQ1U7QUFDM0I7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCTCxZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2Uobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIGlzVGVybWluYWxQYXJ0KCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydDtcbiAgfVxuICBcbiAgaXNFcHNpbG9uUGFydCgpIHtcbiAgICBjb25zdCBlcHNpbG9uUGFydCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxuXG4gIGdldE5vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0O1xuIl19