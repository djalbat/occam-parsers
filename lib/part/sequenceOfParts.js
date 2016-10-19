'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalTypePart = require('./significantTokenType'),
    TerminalSymbolPart = require('./terminalSymbol'),
    ProductionNamePart = require('./productionName');

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(terminalPart, productionName, noWhitespace) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.terminalPart = terminalPart;
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'terminalPartOrProduction',
    value: function terminalPartOrProduction(productions) {
      var terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : ProductionNamePart.findProduction(this.productionName, productions);

      return terminalPartOrProduction;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace, regExp, Class) {
      var part = null,
          matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = TerminalTypePart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) || TerminalSymbolPart.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace),
            productionName = symbol;

        part = new Class(terminalPart, productionName, noWhitespace);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFR5cGVQYXJ0IiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsInByb2R1Y3Rpb25zIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJwYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJmcm9tU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLHdCQUFSLENBQXZCO0FBQUEsSUFDSUMscUJBQXFCRCxRQUFRLGtCQUFSLENBRHpCO0FBQUEsSUFFSUUscUJBQXFCRixRQUFRLGtCQUFSLENBRnpCOztJQUlNRyxtQjtBQUNKLCtCQUFZQyxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsWUFBMUMsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7NkNBRXdCQyxXLEVBQWE7QUFDcEMsVUFBSUMsMkJBQTRCLEtBQUtKLFlBQUwsS0FBc0IsSUFBdkIsR0FDRyxLQUFLQSxZQURSLEdBRUtGLG1CQUFtQk8sY0FBbkIsQ0FBa0MsS0FBS0osY0FBdkMsRUFBdURFLFdBQXZELENBRnBDOztBQUlBLGFBQU9DLHdCQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZU4sWSxFQUFjTyxNLEVBQVFDLEssRUFBTztBQUMzRixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxVQUFVTixPQUFPTyxLQUFQLENBQWFKLE1BQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7O0FBRUFOLGlCQUFTUSxXQUFULENBSG9CLENBR0U7O0FBRXRCLFlBQUlkLGVBQWVMLGlCQUFpQnFCLFVBQWpCLENBQTRCVixNQUE1QixFQUFvQ0MscUJBQXBDLEVBQTJEQyxhQUEzRCxFQUEwRU4sWUFBMUUsS0FDQ0wsbUJBQW1CbUIsVUFBbkIsQ0FBOEJWLE1BQTlCLEVBQXNDQyxxQkFBdEMsRUFBNkRDLGFBQTdELEVBQTRFTixZQUE1RSxDQURwQjtBQUFBLFlBRUlELGlCQUFpQkssTUFGckI7O0FBSUFLLGVBQU8sSUFBSUQsS0FBSixDQUFVVixZQUFWLEVBQXdCQyxjQUF4QixFQUF3Q0MsWUFBeEMsQ0FBUDtBQUNEOztBQUVELGFBQU9TLElBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJuQixtQkFBakI7O0FBRUEsU0FBU2dCLE1BQVQsQ0FBZ0JJLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxUeXBlUGFydCA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlblR5cGUnKSxcbiAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy50ZXJtaW5hbFBhcnQgPSB0ZXJtaW5hbFBhcnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXROb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9ICh0aGlzLnRlcm1pbmFsUGFydCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsUGFydCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKSB7XG4gICAgdmFyIHBhcnQgPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBUZXJtaW5hbFR5cGVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluYWxTeW1ib2xQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==