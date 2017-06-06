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
    key: 'getTerminalPartOrProduction',
    value: function getTerminalPartOrProduction(productions) {
      var production = ProductionNamePart.findProduction(this.productionName, productions),
          terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : production;

      return terminalPartOrProduction;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var string = void 0;

      var productionName = this.getProductionName();

      if (productionName !== null) {
        string = '' + productionName + operatorString;
      } else {
        var terminalPart = this.getTerminalPart(),
            terminalPartString = terminalPart.toString();

        string = '' + terminalPartString + operatorString;
      }

      return string;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwidGVybWluYWxQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9ucyIsInByb2R1Y3Rpb24iLCJmaW5kUHJvZHVjdGlvbiIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiZ2V0UHJvZHVjdGlvbk5hbWUiLCJnZXRUZXJtaW5hbFBhcnQiLCJ0ZXJtaW5hbFBhcnRTdHJpbmciLCJ0b1N0cmluZyIsInN5bWJvbCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwicGFydCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiZnJvbVN5bWJvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxhQUFSLENBQXRCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLGtCQUFSLENBRDNCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGtCQUFSLENBRjNCO0FBQUEsSUFHTUcsMkJBQTJCSCxRQUFRLHdCQUFSLENBSGpDOztJQUtNSSxtQjtBQUNKLCtCQUFZQyxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsWUFBMUMsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0YsWUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0MsY0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0MsWUFBWjtBQUNEOzs7Z0RBRTJCQyxXLEVBQWE7QUFDdkMsVUFBTUMsYUFBYVIsbUJBQW1CUyxjQUFuQixDQUFrQyxLQUFLSixjQUF2QyxFQUF1REUsV0FBdkQsQ0FBbkI7QUFBQSxVQUNNRywyQkFBNEIsS0FBS04sWUFBTCxLQUFzQixJQUF2QixHQUNHLEtBQUtBLFlBRFIsR0FFS0ksVUFIdEM7O0FBS0EsYUFBT0Usd0JBQVA7QUFDRDs7OzZCQUVRQyxjLEVBQWdCO0FBQ3ZCLFVBQUlDLGVBQUo7O0FBRUEsVUFBTVAsaUJBQWlCLEtBQUtRLGlCQUFMLEVBQXZCOztBQUVBLFVBQUlSLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQk8sc0JBQVlQLGNBQVosR0FBNkJNLGNBQTdCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTVAsZUFBZSxLQUFLVSxlQUFMLEVBQXJCO0FBQUEsWUFDSUMscUJBQXFCWCxhQUFhWSxRQUFiLEVBRHpCOztBQUdBSixzQkFBWUcsa0JBQVosR0FBaUNKLGNBQWpDO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7K0JBRWlCSyxNLEVBQVFDLHFCLEVBQXVCWixZLEVBQWNhLE0sRUFBUUMsSyxFQUFPO0FBQzVFLFVBQUlDLE9BQU8sSUFBWDs7QUFFQSxVQUFNQyxVQUFVTCxPQUFPTSxLQUFQLENBQWFKLE1BQWIsQ0FBaEI7O0FBRUEsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFNRSxjQUFjQyxPQUFPSCxPQUFQLENBQXBCOztBQUVBTCxpQkFBU08sV0FBVCxDQUhvQixDQUdFOztBQUV0QixZQUFNcEIsZUFBZUYseUJBQXlCd0IsVUFBekIsQ0FBb0NULE1BQXBDLEVBQTRDQyxxQkFBNUMsRUFBbUVaLFlBQW5FLEtBQ0VMLG1CQUFtQnlCLFVBQW5CLENBQThCVCxNQUE5QixFQUFzQ0MscUJBQXRDLEVBQTZEWixZQUE3RCxDQURGLElBRUlSLGNBQWM0QixVQUFkLENBQXlCVCxNQUF6QixFQUFpQ0MscUJBQWpDLEVBQXdEWixZQUF4RCxDQUZ6QjtBQUFBLFlBR01ELGlCQUFpQlksTUFIdkI7O0FBS0FJLGVBQU8sSUFBSUQsS0FBSixDQUFVaEIsWUFBVixFQUF3QkMsY0FBeEIsRUFBd0NDLFlBQXhDLENBQVA7QUFDRDs7QUFFRCxhQUFPZSxJQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCekIsbUJBQWpCOztBQUVBLFNBQVNzQixNQUFULENBQWdCSSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNlcXVlbmNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4vZW5kT2ZMaW5lJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnRlcm1pbmFsUGFydCA9IHRlcm1pbmFsUGFydDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybWluYWxQYXJ0O1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldE5vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSAodGhpcy50ZXJtaW5hbFBhcnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsUGFydCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbjtcbiAgfVxuXG4gIHRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25OYW1lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHtwcm9kdWN0aW9uTmFtZX0ke29wZXJhdG9yU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHRoaXMuZ2V0VGVybWluYWxQYXJ0KCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0U3RyaW5nID0gdGVybWluYWxQYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1pbmFsUGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpIHtcbiAgICBsZXQgcGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZMaW5lUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==