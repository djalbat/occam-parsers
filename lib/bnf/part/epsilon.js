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
      var content = 'ε',
          significantToken = null,
          ///
      terminalNode = new TerminalNode(content, significantToken),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcHNpbG9uUGFydCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsImNvbnRlbnQiLCJzaWduaWZpY2FudFRva2VuIiwidGVybWluYWxOb2RlIiwibm9kZXMiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlcHNpbG9uUGFydCIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLFc7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsVUFBVSxHQUFkO0FBQUEsVUFDSUMsbUJBQW1CLElBRHZCO0FBQUEsVUFDNkI7QUFDekJDLHFCQUFlLElBQUlSLFlBQUosQ0FBaUJNLE9BQWpCLEVBQTBCQyxnQkFBMUIsQ0FGbkI7QUFBQSxVQUdJRSxRQUFRLENBQUNELFlBQUQsQ0FIWjs7QUFLQSxhQUFPQyxLQUFQO0FBQ0Q7OzsrQkFFaUJDLE0sRUFBUUMscUIsRUFBdUJDLHFCLEVBQXVCUCxZLEVBQWM7QUFDcEYsVUFBSVEsY0FBYyxJQUFsQjtBQUFBLFVBQ0lDLFFBQVNKLFdBQVcsR0FEeEI7O0FBR0EsVUFBSUksS0FBSixFQUFXO0FBQ1RELHNCQUFjLElBQUlYLFdBQUosRUFBZDtBQUNEOztBQUVELGFBQU9XLFdBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJkLFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVwc2lsb25QYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBjb250ZW50ID0gJ861JyxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKGNvbnRlbnQsIHNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIGVwc2lsb25QYXJ0ID0gbnVsbCxcbiAgICAgICAgZm91bmQgPSAoc3ltYm9sID09PSAnzrUnKTtcbiAgICBcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVwc2lsb25QYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblBhcnQ7Il19