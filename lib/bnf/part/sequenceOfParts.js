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
      var terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : ProductionNamePart.findProduction(this.productionName, productions);

      return terminalPartOrProduction;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class) {
      var part = null,
          matches = symbol.match(regExp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwidGVybWluYWxQYXJ0IiwicHJvZHVjdGlvbk5hbWUiLCJub1doaXRlc3BhY2UiLCJwcm9kdWN0aW9ucyIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwic3ltYm9sIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJwYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJmcm9tU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZ0JBQWdCQyxRQUFRLGFBQVIsQ0FBcEI7QUFBQSxJQUNJQyxxQkFBcUJELFFBQVEsa0JBQVIsQ0FEekI7QUFBQSxJQUVJRSxxQkFBcUJGLFFBQVEsa0JBQVIsQ0FGekI7QUFBQSxJQUdJRywyQkFBMkJILFFBQVEsd0JBQVIsQ0FIL0I7O0lBS01JLG1CO0FBQ0osK0JBQVlDLFlBQVosRUFBMEJDLGNBQTFCLEVBQTBDQyxZQUExQyxFQUF3RDtBQUFBOztBQUN0RCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRixZQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7Ozs2Q0FFd0JDLFcsRUFBYTtBQUNwQyxVQUFJQywyQkFBNEIsS0FBS0osWUFBTCxLQUFzQixJQUF2QixHQUNHLEtBQUtBLFlBRFIsR0FFS0osbUJBQW1CUyxjQUFuQixDQUFrQyxLQUFLSixjQUF2QyxFQUF1REUsV0FBdkQsQ0FGcEM7O0FBSUEsYUFBT0Msd0JBQVA7QUFDRDs7OytCQUVpQkUsTSxFQUFRQyxxQixFQUF1QkwsWSxFQUFjTSxNLEVBQVFDLEssRUFBTztBQUM1RSxVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxVQUFVTCxPQUFPTSxLQUFQLENBQWFKLE1BQWIsQ0FEZDs7QUFHQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQUlFLGNBQWNDLE9BQU9ILE9BQVAsQ0FBbEI7O0FBRUFMLGlCQUFTTyxXQUFULENBSG9CLENBR0U7O0FBRXRCLFlBQUliLGVBQWVGLHlCQUF5QmlCLFVBQXpCLENBQW9DVCxNQUFwQyxFQUE0Q0MscUJBQTVDLEVBQW1FTCxZQUFuRSxLQUNFTCxtQkFBbUJrQixVQUFuQixDQUE4QlQsTUFBOUIsRUFBc0NDLHFCQUF0QyxFQUE2REwsWUFBN0QsQ0FERixJQUVJUixjQUFjcUIsVUFBZCxDQUF5QlQsTUFBekIsRUFBaUNDLHFCQUFqQyxFQUF3REwsWUFBeEQsQ0FGdkI7QUFBQSxZQUdJRCxpQkFBaUJLLE1BSHJCOztBQUtBSSxlQUFPLElBQUlELEtBQUosQ0FBVVQsWUFBVixFQUF3QkMsY0FBeEIsRUFBd0NDLFlBQXhDLENBQVA7QUFDRDs7QUFFRCxhQUFPUSxJQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCbEIsbUJBQWpCOztBQUVBLFNBQVNlLE1BQVQsQ0FBZ0JJLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4vZW5kT2ZMaW5lJyksXG4gICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uTmFtZScpLFxuICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxTeW1ib2wnKSxcbiAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnRlcm1pbmFsUGFydCA9IHRlcm1pbmFsUGFydDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybWluYWxQYXJ0O1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldE5vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cblxuICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gKHRoaXMudGVybWluYWxQYXJ0ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybWluYWxQYXJ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpIHtcbiAgICB2YXIgcGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgdmFyIHRlcm1pbmFsUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZkxpbmVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==