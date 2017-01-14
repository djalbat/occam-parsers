'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts'),
    ErrorNode = require('./node/error');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = [],
          savedIndex = context.savedIndex(),
          parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions, noWhitespace),
            parsed = partNodes !== null;

        if (parsed) {
          if (partNodes !== undefined) {
            var firstPartNode = first(partNodes);

            if (firstPartNode instanceof ErrorNode) {
              var errorNode = firstPartNode;

              nodes = [errorNode];

              parsed = false;
            } else {
              nodes = nodes.concat(partNodes);
            }
          }

          noWhitespace = false;
        }

        return parsed;
      });

      if (!parsed) {
        var firstNode = first(nodes);

        if (firstNode instanceof ErrorNode) {} else {
          nodes = null;

          context.backtrack(savedIndex);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes) {
      var noWhitespace = false,
          parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

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

function partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIkVycm9yTm9kZSIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwidW5kZWZpbmVkIiwiZmlyc3RQYXJ0Tm9kZSIsImZpcnN0IiwiZXJyb3JOb2RlIiwiY29uY2F0IiwiZmlyc3ROb2RlIiwiYmFja3RyYWNrIiwic3ltYm9sU2VxdWVuY2UiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWR1Y2VTeW1ib2xzIiwic3ltYm9sIiwiTk9fV0hJVEVTUEFDRSIsInBhcnRGcm9tU3ltYm9sIiwicHVzaCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwic29tZSIsIlBhcnQiLCJmcm9tU3ltYm9sIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7O0FBR0EsSUFBSUMsUUFBUUYsUUFBUSxTQUFSLENBQVo7QUFBQSxJQUNJRyxZQUFZSCxRQUFRLGNBQVIsQ0FEaEI7O0lBR01JLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxhQUFhSixRQUFRSSxVQUFSLEVBRGpCO0FBQUEsVUFFSUMsU0FBUyxLQUFLTixLQUFMLENBQVdPLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDLFlBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV1QsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQWhCO0FBQUEsWUFDSUcsU0FBVUcsY0FBYyxJQUQ1Qjs7QUFHQSxZQUFJSCxNQUFKLEVBQVk7QUFDVixjQUFJRyxjQUFjRSxTQUFsQixFQUE2QjtBQUMzQixnQkFBSUMsZ0JBQWdCQyxNQUFNSixTQUFOLENBQXBCOztBQUVBLGdCQUFJRyx5QkFBeUJkLFNBQTdCLEVBQXdDO0FBQ3RDLGtCQUFJZ0IsWUFBWUYsYUFBaEI7O0FBRUFSLHNCQUFRLENBQUNVLFNBQUQsQ0FBUjs7QUFFQVIsdUJBQVMsS0FBVDtBQUNELGFBTkQsTUFNTztBQUNMRixzQkFBUUEsTUFBTVcsTUFBTixDQUFhTixTQUFiLENBQVI7QUFDRDtBQUNGOztBQUVETix5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0csTUFBUDtBQUNELE9BdkJRLENBRmI7O0FBMkJBLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsWUFBSVUsWUFBWUgsTUFBTVQsS0FBTixDQUFoQjs7QUFFQSxZQUFJWSxxQkFBcUJsQixTQUF6QixFQUFvQyxDQUVuQyxDQUZELE1BRU87QUFDTE0sa0JBQVEsSUFBUjs7QUFFQUgsa0JBQVFnQixTQUFSLENBQWtCWixVQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7dUNBRXlCYyxjLEVBQWdCQyxxQixFQUF1QkMscUIsRUFBdUI7QUFDdEYsVUFBSWpCLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRa0IsZUFBZUcsYUFBZixDQUE2QixVQUFTckIsS0FBVCxFQUFnQnNCLE1BQWhCLEVBQXdCO0FBQzNELFlBQUlBLFdBQVcxQixlQUFlMkIsYUFBOUIsRUFBNkM7QUFDM0NwQix5QkFBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUssT0FBT2dCLGVBQWVGLE1BQWYsRUFBdUJILHFCQUF2QixFQUE4Q0MscUJBQTlDLEVBQXFFakIsWUFBckUsQ0FBWDs7QUFFQUgsZ0JBQU15QixJQUFOLENBQVdqQixJQUFYOztBQUVBTCx5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0gsS0FBUDtBQUNELE9BWk8sRUFZTCxFQVpLLENBRFo7QUFBQSxVQWNJMEIsT0FBTyxJQUFJM0IsSUFBSixDQUFTQyxLQUFULENBZFg7O0FBZ0JBLGFBQU8wQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCN0IsSUFBakI7O0FBRUEsU0FBU3lCLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDSCxxQkFBaEMsRUFBdURDLHFCQUF2RCxFQUE4RWpCLFlBQTlFLEVBQTRGO0FBQzFGLE1BQUlLLE9BQU9HLFNBQVgsQ0FEMEYsQ0FDcEU7O0FBRXRCZCxRQUFNZ0MsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QnRCLFdBQU9zQixLQUFLQyxVQUFMLENBQWdCVCxNQUFoQixFQUF3QkgscUJBQXhCLEVBQStDQyxxQkFBL0MsRUFBc0VqQixZQUF0RSxDQUFQOztBQUVBLFFBQUlHLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEOztBQUVELFNBQVNLLEtBQVQsQ0FBZW1CLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHM7XG5cbnZhciBQYXJ0cyA9IHJlcXVpcmUoJy4vcGFydHMnKSxcbiAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuL25vZGUvZXJyb3InKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5vZGVzID0gW10sXG4gICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciBmaXJzdFBhcnROb2RlID0gZmlyc3QocGFydE5vZGVzKTtcblxuICAgICAgICAgICAgICBpZiAoZmlyc3RQYXJ0Tm9kZSBpbnN0YW5jZW9mIEVycm9yTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvck5vZGUgPSBmaXJzdFBhcnROb2RlO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBbZXJyb3JOb2RlXTtcblxuICAgICAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgaWYgKGZpcnN0Tm9kZSBpbnN0YW5jZW9mIEVycm9yTm9kZSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlcyA9IG51bGw7XG5cbiAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19