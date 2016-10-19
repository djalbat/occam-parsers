'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    symbolTypes = lexers.symbolTypes;

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = [],
          savedIndex = context.savedIndex();

      var parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions, noWhitespace),
            parsed = partNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodes);

          noWhitespace = false;
        }

        return parsed;
      });

      if (!parsed) {
        nodes = null;

        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, terminalTypes) {
      var noWhitespace = false,
          parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === symbolTypes.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace);

          parts.push(part);

          noWhitespace = false;
        }

        return parts;
      }, []),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, terminalTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJzeW1ib2xUeXBlcyIsIlBhcnRzIiwiUnVsZSIsInBhcnRzIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInRlcm1pbmFsVHlwZXMiLCJyZWR1Y2VTeW1ib2xzIiwic3ltYm9sIiwiTk9fV0hJVEVTUEFDRSIsInBhcnRGcm9tU3ltYm9sIiwicHVzaCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwic29tZSIsIlBhcnQiLCJmcm9tU3ltYm9sIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxjQUFjRixPQUFPRSxXQUR6Qjs7QUFHQSxJQUFJQyxRQUFRRixRQUFRLFNBQVIsQ0FBWjs7SUFFTUcsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFFBQVEsRUFBWjtBQUFBLFVBQ0lDLGFBQWFKLFFBQVFJLFVBQVIsRUFEakI7O0FBR0EsVUFBSUMsU0FBUyxLQUFLTixLQUFMLENBQVdPLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzNDLFlBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV1QsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQWhCO0FBQUEsWUFDSUcsU0FBVUcsY0FBYyxJQUQ1Qjs7QUFHQSxZQUFJSCxNQUFKLEVBQVk7QUFDVkYsa0JBQVFBLE1BQU1PLE1BQU4sQ0FBYUYsU0FBYixDQUFSOztBQUVBTix5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0csTUFBUDtBQUNELE9BWFksQ0FBYjs7QUFhQSxVQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYRixnQkFBUSxJQUFSOztBQUVBSCxnQkFBUVcsU0FBUixDQUFrQlAsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRCxLQUFQO0FBQ0Q7Ozt1Q0FFeUJTLGMsRUFBZ0JDLHFCLEVBQXVCQyxhLEVBQWU7QUFDOUUsVUFBSVosZUFBZSxLQUFuQjtBQUFBLFVBQ0lILFFBQVFhLGVBQWVHLGFBQWYsQ0FBNkIsVUFBU2hCLEtBQVQsRUFBZ0JpQixNQUFoQixFQUF3QjtBQUMzRCxZQUFJQSxXQUFXcEIsWUFBWXFCLGFBQTNCLEVBQTBDO0FBQ3hDZix5QkFBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUssT0FBT1csZUFBZUYsTUFBZixFQUF1QkgscUJBQXZCLEVBQThDQyxhQUE5QyxFQUE2RFosWUFBN0QsQ0FBWDs7QUFFQUgsZ0JBQU1vQixJQUFOLENBQVdaLElBQVg7O0FBRUFMLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPSCxLQUFQO0FBQ0QsT0FaTyxFQVlMLEVBWkssQ0FEWjtBQUFBLFVBY0lxQixPQUFPLElBQUl0QixJQUFKLENBQVNDLEtBQVQsQ0FkWDs7QUFnQkEsYUFBT3FCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ4QixJQUFqQjs7QUFFQSxTQUFTb0IsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NILHFCQUFoQyxFQUF1REMsYUFBdkQsRUFBc0VaLFlBQXRFLEVBQW9GO0FBQ2xGLE1BQUlLLE9BQU9nQixTQUFYLENBRGtGLENBQzVEOztBQUV0QjFCLFFBQU0yQixJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCbEIsV0FBT2tCLEtBQUtDLFVBQUwsQ0FBZ0JWLE1BQWhCLEVBQXdCSCxxQkFBeEIsRUFBK0NDLGFBQS9DLEVBQThEWixZQUE5RCxDQUFQOztBQUVBLFFBQUlHLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBzeW1ib2xUeXBlcyA9IGxleGVycy5zeW1ib2xUeXBlcztcblxudmFyIFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBbXSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpO1xuICAgIFxuICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIHZhciBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuICAgICAgXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG5cbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICAgIFxuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKSB7XG4gICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IHN5bWJvbFR5cGVzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19