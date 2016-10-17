'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = [];

      var parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions),
            parsed = partNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodes);
        }

        return parsed;
      });

      nodes = parsed ? nodes : null;

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, terminalTypes) {
      var parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbIlBhcnRzIiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJjb25jYXQiLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJtYXBTeW1ib2xzIiwic3ltYm9sIiwicGFydEZyb21TeW1ib2wiLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFFBQVFDLFFBQVEsU0FBUixDQUFaOztJQUVNQyxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhO0FBQzFCLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFJQyxTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDM0MsWUFBSUMsWUFBWUQsS0FBS0UsS0FBTCxDQUFXUCxPQUFYLEVBQW9CQyxXQUFwQixDQUFoQjtBQUFBLFlBQ0lFLFNBQVVHLGNBQWMsSUFENUI7O0FBR0EsWUFBSUgsTUFBSixFQUFZO0FBQ1ZELGtCQUFRQSxNQUFNTSxNQUFOLENBQWFGLFNBQWIsQ0FBUjtBQUNEOztBQUVELGVBQU9ILE1BQVA7QUFDRCxPQVRZLENBQWI7O0FBV0FELGNBQVFDLFNBQVNELEtBQVQsR0FBaUIsSUFBekI7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7dUNBRXlCTyxjLEVBQWdCQyxxQixFQUF1QkMsYSxFQUFlO0FBQzlFLFVBQUlaLFFBQVFVLGVBQWVHLFVBQWYsQ0FBMEIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRCxZQUFJUixPQUFPUyxlQUFlRCxNQUFmLEVBQXVCSCxxQkFBdkIsRUFBOENDLGFBQTlDLENBQVg7O0FBRUEsZUFBT04sSUFBUDtBQUNELE9BSk8sQ0FBWjtBQUFBLFVBS0lVLE9BQU8sSUFBSWpCLElBQUosQ0FBU0MsS0FBVCxDQUxYOztBQU9BLGFBQU9nQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbkIsSUFBakI7O0FBRUEsU0FBU2dCLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDSCxxQkFBaEMsRUFBdURDLGFBQXZELEVBQXNFO0FBQ3BFLE1BQUlOLE9BQU9hLFNBQVgsQ0FEb0UsQ0FDOUM7O0FBRXRCdEIsUUFBTXVCLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJmLFdBQU9lLEtBQUtDLFVBQUwsQ0FBZ0JSLE1BQWhCLEVBQXdCSCxxQkFBeEIsRUFBK0NDLGFBQS9DLENBQVA7O0FBRUEsUUFBSVIsU0FBVUUsU0FBUyxJQUF2Qjs7QUFFQSxXQUFPRixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPRSxJQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgXG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuICAgICAgXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgbm9kZXMgPSBwYXJzZWQgPyBub2RlcyA6IG51bGw7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSB7XG4gICAgdmFyIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UubWFwU3ltYm9scyhmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==