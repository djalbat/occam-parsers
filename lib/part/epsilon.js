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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L2Vwc2lsb24uanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVwc2lsb25QYXJ0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwic3RyaW5nIiwidHlwZSIsInRlcm1pbmFsTm9kZSIsIm5vZGVzIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwiZXBzaWxvblBhcnQiLCJmb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxlQUFlQyxRQUFRLGtCQUFSLENBQW5COztJQUVNQyxXOzs7Ozs7OzBCQUNFQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFNBQVMsR0FBYjtBQUFBLFVBQ0lDLE9BQU8sSUFEWDtBQUFBLFVBRUlDLGVBQWUsSUFBSVIsWUFBSixDQUFpQk0sTUFBakIsRUFBeUJDLElBQXpCLENBRm5CO0FBQUEsVUFHSUUsUUFBUSxDQUFDRCxZQUFELENBSFo7O0FBS0EsYUFBT0MsS0FBUDtBQUNEOzs7K0JBRWlCQyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QlAsWSxFQUFjO0FBQ3BGLFVBQUlRLGNBQWMsSUFBbEI7QUFBQSxVQUNJQyxRQUFTSixXQUFXLEdBRHhCOztBQUdBLFVBQUlJLEtBQUosRUFBVztBQUNURCxzQkFBYyxJQUFJWCxXQUFKLEVBQWQ7QUFDRDs7QUFFRCxhQUFPVyxXQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCZCxXQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBFcHNpbG9uUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgc3RyaW5nID0gJ861JyxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBUZXJtaW5hbE5vZGUoc3RyaW5nLCB0eXBlKSxcbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBlcHNpbG9uUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0OyJdfQ==