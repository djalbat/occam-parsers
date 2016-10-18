'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalTypePart = require('./terminalType'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFR5cGVQYXJ0IiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsIm5vV2hpdGVzcGFjZSIsInByb2R1Y3Rpb25zIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJwYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJmcm9tU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGdCQUFSLENBQXZCO0FBQUEsSUFDSUMscUJBQXFCRCxRQUFRLGtCQUFSLENBRHpCO0FBQUEsSUFFSUUscUJBQXFCRixRQUFRLGtCQUFSLENBRnpCOztJQUlNRyxtQjtBQUNKLCtCQUFZQyxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsWUFBMUMsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0EsWUFBWjtBQUNEOzs7NkNBRXdCQyxXLEVBQWE7QUFDcEMsVUFBSUMsMkJBQTRCLEtBQUtKLFlBQUwsS0FBc0IsSUFBdkIsR0FDRyxLQUFLQSxZQURSLEdBRUtGLG1CQUFtQk8sY0FBbkIsQ0FBa0MsS0FBS0osY0FBdkMsRUFBdURFLFdBQXZELENBRnBDOztBQUlBLGFBQU9DLHdCQUFQO0FBQ0Q7OzsrQkFFaUJFLE0sRUFBUUMscUIsRUFBdUJDLGEsRUFBZU4sWSxFQUFjTyxNLEVBQVFDLEssRUFBTztBQUMzRixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxVQUFVTixPQUFPTyxLQUFQLENBQWFKLE1BQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7O0FBRUFOLGlCQUFTUSxXQUFULENBSG9CLENBR0U7O0FBRXRCLFlBQUlkLGVBQWVMLGlCQUFpQnFCLFVBQWpCLENBQTRCVixNQUE1QixFQUFvQ0MscUJBQXBDLEVBQTJEQyxhQUEzRCxFQUEwRU4sWUFBMUUsS0FDQ0wsbUJBQW1CbUIsVUFBbkIsQ0FBOEJWLE1BQTlCLEVBQXNDQyxxQkFBdEMsRUFBNkRDLGFBQTdELEVBQTRFTixZQUE1RSxDQURwQjtBQUFBLFlBRUlELGlCQUFpQkssTUFGckI7O0FBSUFLLGVBQU8sSUFBSUQsS0FBSixDQUFVVixZQUFWLEVBQXdCQyxjQUF4QixFQUF3Q0MsWUFBeEMsQ0FBUDtBQUNEOztBQUVELGFBQU9TLElBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJuQixtQkFBakI7O0FBRUEsU0FBU2dCLE1BQVQsQ0FBZ0JJLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxUeXBlUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxUeXBlJyksXG4gICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudGVybWluYWxQYXJ0ID0gdGVybWluYWxQYXJ0O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgZ2V0Tm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucykge1xuICAgIHZhciB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSAodGhpcy50ZXJtaW5hbFBhcnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hbFBhcnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcykge1xuICAgIHZhciBwYXJ0ID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgc3ltYm9sID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICB2YXIgdGVybWluYWxQYXJ0ID0gVGVybWluYWxUeXBlUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc3ltYm9sO1xuXG4gICAgICBwYXJ0ID0gbmV3IENsYXNzKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=