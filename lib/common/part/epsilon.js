'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

var EpsilonPart = function () {
  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var epsilonTerminalNode = new EpsilonTerminalNode(),
          nodes = [epsilonTerminalNode];

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblBhcnQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwiZXBzaWxvblRlcm1pbmFsTm9kZSIsIm5vZGVzIiwic3ltYm9sIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZXBzaWxvblBhcnQiLCJmb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxzQkFBc0JDLFFBQVEsb0NBQVIsQ0FBMUI7O0lBRU1DLFc7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsWSxFQUFjO0FBQzNCLFVBQUlDLHNCQUFzQixJQUFJTCxtQkFBSixFQUExQjtBQUFBLFVBQ0lNLFFBQVEsQ0FBQ0QsbUJBQUQsQ0FEWjs7QUFHQSxhQUFPQyxLQUFQO0FBQ0Q7OzsrQkFFaUJDLE0sRUFBUUMscUIsRUFBdUJKLFksRUFBYztBQUM3RCxVQUFJSyxjQUFjLElBQWxCO0FBQUEsVUFDSUMsUUFBU0gsV0FBVyxHQUR4Qjs7QUFHQSxVQUFJRyxLQUFKLEVBQVc7QUFDVEQsc0JBQWMsSUFBSVAsV0FBSixFQUFkO0FBQ0Q7O0FBRUQsYUFBT08sV0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQlYsV0FBakIiLCJmaWxlIjoiZXBzaWxvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVwc2lsb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNsYXNzIEVwc2lsb25QYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIGVwc2lsb25UZXJtaW5hbE5vZGUgPSBuZXcgRXBzaWxvblRlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlcyA9IFtlcHNpbG9uVGVybWluYWxOb2RlXTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZXBzaWxvblBhcnQgPSBudWxsLFxuICAgICAgICBmb3VuZCA9IChzeW1ib2wgPT09ICfOtScpO1xuICAgIFxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUGFydDsiXX0=