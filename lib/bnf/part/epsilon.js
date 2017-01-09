'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var EpsilonPart = function () {
  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var string = 'ε',
          type = null,
          terminalNode = new TerminalNode(string, type),
          nodes = [terminalNode];

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var epsilonPart = null,
          found = symbol === 'ε';

      if (found) {
        epsilonPart = new EpsilonPart();
      }

      return epsilonPart;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcHNpbG9uUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsInN0cmluZyIsInR5cGUiLCJ0ZXJtaW5hbE5vZGUiLCJub2RlcyIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVwc2lsb25QYXJ0IiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxrQkFBUixDQUFuQjs7SUFFTUMsVzs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxTQUFTLEdBQWI7QUFBQSxVQUNJQyxPQUFPLElBRFg7QUFBQSxVQUVJQyxlQUFlLElBQUlSLFlBQUosQ0FBaUJNLE1BQWpCLEVBQXlCQyxJQUF6QixDQUZuQjtBQUFBLFVBR0lFLFFBQVEsQ0FBQ0QsWUFBRCxDQUhaOztBQUtBLGFBQU9DLEtBQVA7QUFDRDs7OytCQUVpQkMsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJQLFksRUFBYztBQUNwRixVQUFJUSxjQUFjLElBQWxCO0FBQUEsVUFDSUMsUUFBU0osV0FBVyxHQUR4Qjs7QUFHQSxVQUFJSSxLQUFKLEVBQVc7QUFDVEQsc0JBQWMsSUFBSVgsV0FBSixFQUFkO0FBQ0Q7O0FBRUQsYUFBT1csV0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQmQsV0FBakIiLCJmaWxlIjoiZXBzaWxvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgRXBzaWxvblBhcnQge1xuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHN0cmluZyA9ICfOtScsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cmluZywgdHlwZSksXG4gICAgICAgIG5vZGVzID0gW3Rlcm1pbmFsTm9kZV07XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZXBzaWxvblBhcnQgPSBudWxsLFxuICAgICAgICBmb3VuZCA9IChzeW1ib2wgPT09ICfOtScpO1xuICAgIFxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUGFydDsiXX0=