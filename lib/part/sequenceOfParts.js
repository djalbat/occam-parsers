'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalTypePart = require('./terminalType'),
    TerminalSymbolPart = require('./terminalSymbol'),
    ProductionNamePart = require('./productionName');

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(terminalPart, productionName) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.terminalPart = terminalPart;
    this.productionName = productionName;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'terminalPartOrProduction',
    value: function terminalPartOrProduction(productions) {
      var terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : ProductionNamePart.findProduction(this.productionName, productions);

      return terminalPartOrProduction;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, regExp, Class) {
      var part = null,
          matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = TerminalTypePart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) || TerminalSymbolPart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes),
            productionName = symbol;

        part = new Class(terminalPart, productionName);
      }

      return part;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFR5cGVQYXJ0IiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsInByb2R1Y3Rpb25zIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJwYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJmcm9tU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGdCQUFSLENBQXZCO0FBQUEsSUFDSUMscUJBQXFCRCxRQUFRLGtCQUFSLENBRHpCO0FBQUEsSUFFSUUscUJBQXFCRixRQUFRLGtCQUFSLENBRnpCOztJQUlNRyxtQjtBQUNKLCtCQUFZQyxZQUFaLEVBQTBCQyxjQUExQixFQUEwQztBQUFBOztBQUN4QyxTQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7NkNBRXdCQyxXLEVBQWE7QUFDcEMsVUFBSUMsMkJBQTRCLEtBQUtILFlBQUwsS0FBc0IsSUFBdkIsR0FDRyxLQUFLQSxZQURSLEdBRUtGLG1CQUFtQk0sY0FBbkIsQ0FBa0MsS0FBS0gsY0FBdkMsRUFBdURDLFdBQXZELENBRnBDOztBQUlBLGFBQU9DLHdCQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZUMsTSxFQUFRQyxLLEVBQU87QUFDN0UsVUFBSUMsT0FBTyxJQUFYO0FBQUEsVUFDSUMsVUFBVU4sT0FBT08sS0FBUCxDQUFhSixNQUFiLENBRGQ7O0FBR0EsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCOztBQUVBTixpQkFBU1EsV0FBVCxDQUhvQixDQUdFOztBQUV0QixZQUFJYixlQUFlTCxpQkFBaUJvQixVQUFqQixDQUE0QlYsTUFBNUIsRUFBb0NDLHFCQUFwQyxFQUEyREMsYUFBM0QsS0FDQ1YsbUJBQW1Ca0IsVUFBbkIsQ0FBOEJWLE1BQTlCLEVBQXNDQyxxQkFBdEMsRUFBNkRDLGFBQTdELENBRHBCO0FBQUEsWUFFSU4saUJBQWlCSSxNQUZyQjs7QUFJQUssZUFBTyxJQUFJRCxLQUFKLENBQVVULFlBQVYsRUFBd0JDLGNBQXhCLENBQVA7QUFDRDs7QUFFRCxhQUFPUyxJQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCbEIsbUJBQWpCOztBQUVBLFNBQVNlLE1BQVQsQ0FBZ0JJLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxUeXBlUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxUeXBlJyksXG4gICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB0aGlzLnRlcm1pbmFsUGFydCA9IHRlcm1pbmFsUGFydDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gKHRoaXMudGVybWluYWxQYXJ0ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybWluYWxQYXJ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCByZWdFeHAsIENsYXNzKSB7XG4gICAgdmFyIHBhcnQgPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBUZXJtaW5hbFR5cGVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbDtcblxuICAgICAgcGFydCA9IG5ldyBDbGFzcyh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==