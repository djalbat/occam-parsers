'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionPart = require('./production');

var ZeroOrMoreProductionsPart = function () {
  function ZeroOrMoreProductionsPart(name) {
    _classCallCheck(this, ZeroOrMoreProductionsPart);

    this.name = name;
  }

  _createClass(ZeroOrMoreProductionsPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var nodes = null,
          production = ProductionPart.findProduction(this.name, productions);

      if (production !== null) {
        nodes = [];

        for (;;) {
          var index = context.getIndex(),
              savedIndex = index,
              ///
          productionNodes = production.parse(input, context, productions),
              parsed = productionNodes !== null;

          if (parsed) {
            nodes = nodes.concat(productionNodes);
          } else {
            context.backtrack(savedIndex);

            return nodes;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var zeroOrMoreProductionsPart = null,
          zeroOrMoreProductionsRegExp = /([^*]+)\*$/,
          matches = symbol.match(zeroOrMoreProductionsRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            name = secondMatch; ///

        zeroOrMoreProductionsPart = new ZeroOrMoreProductionsPart(name);
      }

      return zeroOrMoreProductionsPart;
    }
  }]);

  return ZeroOrMoreProductionsPart;
}();

module.exports = ZeroOrMoreProductionsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uUGFydCIsInJlcXVpcmUiLCJaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwibmFtZSIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJpbmRleCIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInByb2R1Y3Rpb25Ob2RlcyIsInBhcnNlIiwicGFyc2VkIiwiY29uY2F0IiwiYmFja3RyYWNrIiwic3ltYm9sIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IiwiemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxpQkFBaUJDLFFBQVEsY0FBUixDQUFyQjs7SUFFTUMseUI7QUFDSixxQ0FBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxhQUFhUixlQUFlUyxjQUFmLENBQThCLEtBQUtOLElBQW5DLEVBQXlDRyxXQUF6QyxDQURqQjs7QUFHQSxVQUFJRSxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRCxnQkFBUSxFQUFSOztBQUVBLGlCQUFRO0FBQ04sY0FBSUcsUUFBUUwsUUFBUU0sUUFBUixFQUFaO0FBQUEsY0FDSUMsYUFBYUYsS0FEakI7QUFBQSxjQUN3QjtBQUNwQkcsNEJBQWtCTCxXQUFXTSxLQUFYLENBQWlCVixLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUNDLFdBQWpDLENBRnRCO0FBQUEsY0FHSVMsU0FBVUYsb0JBQW9CLElBSGxDOztBQUtBLGNBQUlFLE1BQUosRUFBWTtBQUNWUixvQkFBUUEsTUFBTVMsTUFBTixDQUFhSCxlQUFiLENBQVI7QUFDRCxXQUZELE1BRU87QUFDTFIsb0JBQVFZLFNBQVIsQ0FBa0JMLFVBQWxCOztBQUVBLG1CQUFPTCxLQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVpQlcsTSxFQUFRQyxvQixFQUFzQjtBQUM5QyxVQUFJQyw0QkFBNEIsSUFBaEM7QUFBQSxVQUNJQyw4QkFBOEIsWUFEbEM7QUFBQSxVQUVJQyxVQUFVSixPQUFPSyxLQUFQLENBQWFGLDJCQUFiLENBRmQ7O0FBSUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJRSxjQUFjQyxPQUFPSCxPQUFQLENBQWxCO0FBQUEsWUFDSW5CLE9BQU9xQixXQURYLENBRG9CLENBRUk7O0FBRXhCSixvQ0FBNEIsSUFBSWxCLHlCQUFKLENBQThCQyxJQUE5QixDQUE1QjtBQUNEOztBQUVELGFBQU9pQix5QkFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQnpCLHlCQUFqQjs7QUFFQSxTQUFTdUIsTUFBVCxDQUFnQkcsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ6ZXJvT3JNb3JlUHJvZHVjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9kdWN0aW9uUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvblBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5uYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvbnRleHQuZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIHNhdmVkSW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgICAgICBwcm9kdWN0aW9uTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyksXG4gICAgICAgICAgICBwYXJzZWQgPSAocHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocHJvZHVjdGlvbk5vZGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbnVsbCxcbiAgICAgICAgemVyb09yTW9yZVByb2R1Y3Rpb25zUmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh6ZXJvT3JNb3JlUHJvZHVjdGlvbnNSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICB6ZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=