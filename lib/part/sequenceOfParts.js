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
    value: function terminalPartOrProduction() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFR5cGVQYXJ0IiwicmVxdWlyZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ0ZXJtaW5hbFBhcnQiLCJwcm9kdWN0aW9uTmFtZSIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwicHJvZHVjdGlvbnMiLCJzeW1ib2wiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwicmVnRXhwIiwiQ2xhc3MiLCJwYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJmcm9tU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsbUJBQW1CQyxRQUFRLGdCQUFSLENBQXZCO0FBQUEsSUFDSUMscUJBQXFCRCxRQUFRLGtCQUFSLENBRHpCO0FBQUEsSUFFSUUscUJBQXFCRixRQUFRLGtCQUFSLENBRnpCOztJQUlNRyxtQjtBQUNKLCtCQUFZQyxZQUFaLEVBQTBCQyxjQUExQixFQUEwQztBQUFBOztBQUN4QyxTQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7K0NBRTBCO0FBQ3pCLFVBQUlDLDJCQUE0QixLQUFLRixZQUFMLEtBQXNCLElBQXZCLEdBQ0csS0FBS0EsWUFEUixHQUVLRixtQkFBbUJLLGNBQW5CLENBQWtDLEtBQUtGLGNBQXZDLEVBQXVERyxXQUF2RCxDQUZwQzs7QUFJQSxhQUFPRix3QkFBUDtBQUNEOzs7K0JBRWlCRyxNLEVBQVFDLHFCLEVBQXVCQyxhLEVBQWVDLE0sRUFBUUMsSyxFQUFPO0FBQzdFLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lDLFVBQVVOLE9BQU9PLEtBQVAsQ0FBYUosTUFBYixDQURkOztBQUdBLFVBQUlHLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFsQjs7QUFFQU4saUJBQVNRLFdBQVQsQ0FIb0IsQ0FHRTs7QUFFdEIsWUFBSWIsZUFBZUwsaUJBQWlCb0IsVUFBakIsQ0FBNEJWLE1BQTVCLEVBQW9DQyxxQkFBcEMsRUFBMkRDLGFBQTNELEtBQ0NWLG1CQUFtQmtCLFVBQW5CLENBQThCVixNQUE5QixFQUFzQ0MscUJBQXRDLEVBQTZEQyxhQUE3RCxDQURwQjtBQUFBLFlBRUlOLGlCQUFpQkksTUFGckI7O0FBSUFLLGVBQU8sSUFBSUQsS0FBSixDQUFVVCxZQUFWLEVBQXdCQyxjQUF4QixDQUFQO0FBQ0Q7O0FBRUQsYUFBT1MsSUFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQmxCLG1CQUFqQjs7QUFFQSxTQUFTZSxNQUFULENBQWdCSSxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNlcXVlbmNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsVHlwZVBhcnQgPSByZXF1aXJlKCcuL3Rlcm1pbmFsVHlwZScpLFxuICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxTeW1ib2wnKSxcbiAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdGhpcy50ZXJtaW5hbFBhcnQgPSB0ZXJtaW5hbFBhcnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKCkge1xuICAgIHZhciB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSAodGhpcy50ZXJtaW5hbFBhcnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hbFBhcnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3Rpb25OYW1lUGFydC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIHJlZ0V4cCwgQ2xhc3MpIHtcbiAgICB2YXIgcGFydCA9IG51bGwsXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgdmFyIHRlcm1pbmFsUGFydCA9IFRlcm1pbmFsVHlwZVBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluYWxTeW1ib2xQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc3ltYm9sO1xuXG4gICAgICBwYXJ0ID0gbmV3IENsYXNzKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19