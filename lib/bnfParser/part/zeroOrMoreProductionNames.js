'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = require('./productionName');

var ZeroOrMoreProductionNamesPart = function () {
  function ZeroOrMoreProductionNamesPart(productionName) {
    _classCallCheck(this, ZeroOrMoreProductionNamesPart);

    this.productionName = productionName;
  }

  _createClass(ZeroOrMoreProductionNamesPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var production = ProductionNamePart.findProduction(this.productionName, productions);

      for (;;) {
        var index = context.index;

        if (!production.parse(input, context, productions)) {
          context.index = index;

          return true;
        }
      }
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, Parts) {
      var zeroOrMoreProductionNamesPart = null,
          zeroOrMoreProductionNamesRegExp = /([^*]+)\*$/,
          matches = symbol.match(zeroOrMoreProductionNamesRegExp);

      if (matches !== null) {
        var productionName = matches[1];

        zeroOrMoreProductionNamesPart = new ZeroOrMoreProductionNamesPart(productionName);
      }

      return zeroOrMoreProductionNamesPart;
    }
  }]);

  return ZeroOrMoreProductionNamesPart;
}();

module.exports = ZeroOrMoreProductionNamesPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC96ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb25OYW1lUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCIsInByb2R1Y3Rpb25OYW1lIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJpbmRleCIsInBhcnNlIiwic3ltYm9sIiwiUGFydHMiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCIsInplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEscUJBQXFCQyxRQUFRLGtCQUFSLENBQXpCOztJQUVNQyw2QjtBQUNKLHlDQUFZQyxjQUFaLEVBQTRCO0FBQUE7O0FBQzFCLFNBQUtBLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7MEJBRUtDLEssRUFBT0MsTyxFQUFTQyxXLEVBQWE7QUFDakMsVUFBSUMsYUFBYVAsbUJBQW1CUSxjQUFuQixDQUFrQyxLQUFLTCxjQUF2QyxFQUF1REcsV0FBdkQsQ0FBakI7O0FBRUEsZUFBUTtBQUNOLFlBQUlHLFFBQVFKLFFBQVFJLEtBQXBCOztBQUVBLFlBQUksQ0FBQ0YsV0FBV0csS0FBWCxDQUFpQk4sS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxXQUFqQyxDQUFMLEVBQW9EO0FBQ2xERCxrQkFBUUksS0FBUixHQUFnQkEsS0FBaEI7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVpQkUsTSxFQUFRQyxLLEVBQU87QUFDL0IsVUFBSUMsZ0NBQWdDLElBQXBDO0FBQUEsVUFDSUMsa0NBQWtDLFlBRHRDO0FBQUEsVUFFSUMsVUFBVUosT0FBT0ssS0FBUCxDQUFhRiwrQkFBYixDQUZkOztBQUlBLFVBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSVosaUJBQWlCWSxRQUFRLENBQVIsQ0FBckI7O0FBRUFGLHdDQUFnQyxJQUFJWCw2QkFBSixDQUFrQ0MsY0FBbEMsQ0FBaEM7QUFDRDs7QUFFRCxhQUFPVSw2QkFBUDtBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQmhCLDZCQUFqQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICB2YXIgaW5kZXggPSBjb250ZXh0LmluZGV4O1xuXG4gICAgICBpZiAoIXByb2R1Y3Rpb24ucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSkge1xuICAgICAgICBjb250ZXh0LmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIFBhcnRzKSB7XG4gICAgdmFyIHplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0ID0gbnVsbCxcbiAgICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1JlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gbWF0Y2hlc1sxXTtcblxuICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQgPSBuZXcgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0O1xuIl19