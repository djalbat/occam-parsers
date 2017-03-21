'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfLinePart = require('./endOfLine'),
    ProductionNamePart = require('./productionName'),
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
    key: 'getTerminalPart',
    value: function getTerminalPart() {
      return this.terminalPart;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'terminalPartOrProduction',
    value: function terminalPartOrProduction(productions) {
      var production = ProductionNamePart.findProduction(this.productionName, productions),
          terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : production;

      return terminalPartOrProduction;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class) {
      var part = null;

      var matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = SignificantTokenTypePart.fromSymbol(symbol, significantTokenTypes, noWhitespace) || TerminalSymbolPart.fromSymbol(symbol, significantTokenTypes, noWhitespace) || EndOfLinePart.fromSymbol(symbol, significantTokenTypes, noWhitespace),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwidGVybWluYWxQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9ucyIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsInN5bWJvbCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwicGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiZnJvbVN5bWJvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxhQUFSLENBQXRCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtCQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtCQUFSLENBRjNCO0FBQUEsSUFHTUcsMkJBQTJCSCxRQUFRLHdCQUFSLENBSGpDOztJQUtNSSxtQjtBQUNKLCtCQUFZQyxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsWUFBMUMsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0YsWUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0MsY0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0MsWUFBWjtBQUNEOzs7NkNBRXdCQyxXLEVBQWE7QUFDcEMsVUFBTUMsYUFBYVIsbUJBQW1CUyxjQUFuQixDQUFrQyxLQUFLSixjQUF2QyxFQUF1REUsV0FBdkQsQ0FBbkI7QUFBQSxVQUNNRywyQkFBNEIsS0FBS04sWUFBTCxLQUFzQixJQUF2QixHQUNHLEtBQUtBLFlBRFIsR0FFS0ksVUFIdEM7O0FBS0EsYUFBT0Usd0JBQVA7QUFDRDs7OytCQUVpQkMsTSxFQUFRQyxxQixFQUF1Qk4sWSxFQUFjTyxNLEVBQVFDLEssRUFBTztBQUM1RSxVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBTUMsVUFBVUwsT0FBT00sS0FBUCxDQUFhSixNQUFiLENBQWhCOztBQUVBLFVBQUlHLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBTUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFwQjs7QUFFQUwsaUJBQVNPLFdBQVQsQ0FIb0IsQ0FHRTs7QUFFdEIsWUFBTWQsZUFBZUYseUJBQXlCa0IsVUFBekIsQ0FBb0NULE1BQXBDLEVBQTRDQyxxQkFBNUMsRUFBbUVOLFlBQW5FLEtBQ0VMLG1CQUFtQm1CLFVBQW5CLENBQThCVCxNQUE5QixFQUFzQ0MscUJBQXRDLEVBQTZETixZQUE3RCxDQURGLElBRUlSLGNBQWNzQixVQUFkLENBQXlCVCxNQUF6QixFQUFpQ0MscUJBQWpDLEVBQXdETixZQUF4RCxDQUZ6QjtBQUFBLFlBR01ELGlCQUFpQk0sTUFIdkI7O0FBS0FJLGVBQU8sSUFBSUQsS0FBSixDQUFVVixZQUFWLEVBQXdCQyxjQUF4QixFQUF3Q0MsWUFBeEMsQ0FBUDtBQUNEOztBQUVELGFBQU9TLElBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJuQixtQkFBakI7O0FBRUEsU0FBU2dCLE1BQVQsQ0FBZ0JJLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi9lbmRPZkxpbmUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudGVybWluYWxQYXJ0ID0gdGVybWluYWxQYXJ0O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldFRlcm1pbmFsUGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0Tm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9ICh0aGlzLnRlcm1pbmFsUGFydCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybWluYWxQYXJ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcykge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgY29uc3QgdGVybWluYWxQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluYWxTeW1ib2xQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZkxpbmVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbDtcblxuICAgICAgcGFydCA9IG5ldyBDbGFzcyh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19