'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = require('./productionName'),
    TerminalSymbolPart = require('./terminalSymbol'),
    SignificantTokenTypePart = require('./significantTokenType');

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
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class) {
      var part = null,
          matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = SignificantTokenTypePart.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) || TerminalSymbolPart.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uTmFtZVBhcnQiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInRlcm1pbmFsUGFydCIsInByb2R1Y3Rpb25OYW1lIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbnMiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwicGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiZnJvbVN5bWJvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHFCQUFxQkMsUUFBUSxrQkFBUixDQUF6QjtBQUFBLElBQ0lDLHFCQUFxQkQsUUFBUSxrQkFBUixDQUR6QjtBQUFBLElBRUlFLDJCQUEyQkYsUUFBUSx3QkFBUixDQUYvQjs7SUFJTUcsbUI7QUFDSiwrQkFBWUMsWUFBWixFQUEwQkMsY0FBMUIsRUFBMENDLFlBQTFDLEVBQXdEO0FBQUE7O0FBQ3RELFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtBLFlBQVo7QUFDRDs7OzZDQUV3QkMsVyxFQUFhO0FBQ3BDLFVBQUlDLDJCQUE0QixLQUFLSixZQUFMLEtBQXNCLElBQXZCLEdBQ0csS0FBS0EsWUFEUixHQUVLTCxtQkFBbUJVLGNBQW5CLENBQWtDLEtBQUtKLGNBQXZDLEVBQXVERSxXQUF2RCxDQUZwQzs7QUFJQSxhQUFPQyx3QkFBUDtBQUNEOzs7K0JBRWlCRSxNLEVBQVFDLHFCLEVBQXVCQyxxQixFQUF1Qk4sWSxFQUFjTyxNLEVBQVFDLEssRUFBTztBQUNuRyxVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxVQUFVTixPQUFPTyxLQUFQLENBQWFKLE1BQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7O0FBRUFOLGlCQUFTUSxXQUFULENBSG9CLENBR0U7O0FBRXRCLFlBQUlkLGVBQWVGLHlCQUF5QmtCLFVBQXpCLENBQW9DVixNQUFwQyxFQUE0Q0MscUJBQTVDLEVBQW1FQyxxQkFBbkUsRUFBMEZOLFlBQTFGLEtBQ0NMLG1CQUFtQm1CLFVBQW5CLENBQThCVixNQUE5QixFQUFzQ0MscUJBQXRDLEVBQTZEQyxxQkFBN0QsRUFBb0ZOLFlBQXBGLENBRHBCO0FBQUEsWUFFSUQsaUJBQWlCSyxNQUZyQjs7QUFJQUssZUFBTyxJQUFJRCxLQUFKLENBQVVWLFlBQVYsRUFBd0JDLGNBQXhCLEVBQXdDQyxZQUF4QyxDQUFQO0FBQ0Q7O0FBRUQsYUFBT1MsSUFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQm5CLG1CQUFqQjs7QUFFQSxTQUFTZ0IsTUFBVCxDQUFnQkksS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzZXF1ZW5jZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudGVybWluYWxQYXJ0ID0gdGVybWluYWxQYXJ0O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgZ2V0Tm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucykge1xuICAgIHZhciB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSAodGhpcy50ZXJtaW5hbFBhcnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hbFBhcnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKSB7XG4gICAgdmFyIHBhcnQgPSBudWxsLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==