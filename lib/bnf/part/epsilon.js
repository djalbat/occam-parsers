'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EpsilonTerminalNode = require('../node/terminal/epsilon');

var EpsilonPart = function () {
  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var epsilonTerminalNode = new EpsilonTerminalNode(),
          nodes = [epsilonTerminalNode];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblBhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJlcHNpbG9uVGVybWluYWxOb2RlIiwibm9kZXMiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlcHNpbG9uUGFydCIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHNCQUFzQkMsUUFBUSwwQkFBUixDQUExQjs7SUFFTUMsVzs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxzQkFBc0IsSUFBSU4sbUJBQUosRUFBMUI7QUFBQSxVQUNJTyxRQUFRLENBQUNELG1CQUFELENBRFo7O0FBR0EsYUFBT0MsS0FBUDtBQUNEOzs7K0JBRWlCQyxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1QkwsWSxFQUFjO0FBQ3BGLFVBQUlNLGNBQWMsSUFBbEI7QUFBQSxVQUNJQyxRQUFTSixXQUFXLEdBRHhCOztBQUdBLFVBQUlJLEtBQUosRUFBVztBQUNURCxzQkFBYyxJQUFJVCxXQUFKLEVBQWQ7QUFDRDs7QUFFRCxhQUFPUyxXQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCWixXQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBFcHNpbG9uUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZXBzaWxvblRlcm1pbmFsTm9kZSA9IG5ldyBFcHNpbG9uVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVzID0gW2Vwc2lsb25UZXJtaW5hbE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIGVwc2lsb25QYXJ0ID0gbnVsbCxcbiAgICAgICAgZm91bmQgPSAoc3ltYm9sID09PSAnzrUnKTtcbiAgICBcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVwc2lsb25QYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblBhcnQ7Il19