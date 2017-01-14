'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts'),
    FatalErrorNode = require('./node/fatalError');

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

            if (firstPartNode instanceof FatalErrorNode) {
              var fatalErrorNode = firstPartNode;

              nodes = [fatalErrorNode];

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

        if (firstNode instanceof FatalErrorNode) {} else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIkZhdGFsRXJyb3JOb2RlIiwiUnVsZSIsInBhcnRzIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJmaXJzdFBhcnROb2RlIiwiZmlyc3QiLCJmYXRhbEVycm9yTm9kZSIsImNvbmNhdCIsImZpcnN0Tm9kZSIsImJhY2t0cmFjayIsInN5bWJvbFNlcXVlbmNlIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVkdWNlU3ltYm9scyIsInN5bWJvbCIsIk5PX1dISVRFU1BBQ0UiLCJwYXJ0RnJvbVN5bWJvbCIsInB1c2giLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNJQyxpQkFBaUJGLE9BQU9FLGNBRDVCOztBQUdBLElBQUlDLFFBQVFGLFFBQVEsU0FBUixDQUFaO0FBQUEsSUFDSUcsaUJBQWlCSCxRQUFRLG1CQUFSLENBRHJCOztJQUdNSSxJO0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUtDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxFQUFaO0FBQUEsVUFDSUMsYUFBYUosUUFBUUksVUFBUixFQURqQjtBQUFBLFVBRUlDLFNBQVMsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUN2QyxZQUFJQyxZQUFZRCxLQUFLRSxLQUFMLENBQVdULE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFoQjtBQUFBLFlBQ0lHLFNBQVVHLGNBQWMsSUFENUI7O0FBR0EsWUFBSUgsTUFBSixFQUFZO0FBQ1YsY0FBSUcsY0FBY0UsU0FBbEIsRUFBNkI7QUFDM0IsZ0JBQUlDLGdCQUFnQkMsTUFBTUosU0FBTixDQUFwQjs7QUFFQSxnQkFBSUcseUJBQXlCZCxjQUE3QixFQUE2QztBQUMzQyxrQkFBSWdCLGlCQUFpQkYsYUFBckI7O0FBRUFSLHNCQUFRLENBQUNVLGNBQUQsQ0FBUjs7QUFFQVIsdUJBQVMsS0FBVDtBQUNELGFBTkQsTUFNTztBQUNMRixzQkFBUUEsTUFBTVcsTUFBTixDQUFhTixTQUFiLENBQVI7QUFDRDtBQUNGOztBQUVETix5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0csTUFBUDtBQUNELE9BdkJRLENBRmI7O0FBMkJBLFVBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1gsWUFBSVUsWUFBWUgsTUFBTVQsS0FBTixDQUFoQjs7QUFFQSxZQUFJWSxxQkFBcUJsQixjQUF6QixFQUF5QyxDQUV4QyxDQUZELE1BRU87QUFDTE0sa0JBQVEsSUFBUjs7QUFFQUgsa0JBQVFnQixTQUFSLENBQWtCWixVQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7dUNBRXlCYyxjLEVBQWdCQyxxQixFQUF1QkMscUIsRUFBdUI7QUFDdEYsVUFBSWpCLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRa0IsZUFBZUcsYUFBZixDQUE2QixVQUFTckIsS0FBVCxFQUFnQnNCLE1BQWhCLEVBQXdCO0FBQzNELFlBQUlBLFdBQVcxQixlQUFlMkIsYUFBOUIsRUFBNkM7QUFDM0NwQix5QkFBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUssT0FBT2dCLGVBQWVGLE1BQWYsRUFBdUJILHFCQUF2QixFQUE4Q0MscUJBQTlDLEVBQXFFakIsWUFBckUsQ0FBWDs7QUFFQUgsZ0JBQU15QixJQUFOLENBQVdqQixJQUFYOztBQUVBTCx5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0gsS0FBUDtBQUNELE9BWk8sRUFZTCxFQVpLLENBRFo7QUFBQSxVQWNJMEIsT0FBTyxJQUFJM0IsSUFBSixDQUFTQyxLQUFULENBZFg7O0FBZ0JBLGFBQU8wQixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCN0IsSUFBakI7O0FBRUEsU0FBU3lCLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDSCxxQkFBaEMsRUFBdURDLHFCQUF2RCxFQUE4RWpCLFlBQTlFLEVBQTRGO0FBQzFGLE1BQUlLLE9BQU9HLFNBQVgsQ0FEMEYsQ0FDcEU7O0FBRXRCZCxRQUFNZ0MsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QnRCLFdBQU9zQixLQUFLQyxVQUFMLENBQWdCVCxNQUFoQixFQUF3QkgscUJBQXhCLEVBQStDQyxxQkFBL0MsRUFBc0VqQixZQUF0RSxDQUFQOztBQUVBLFFBQUlHLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEOztBQUVELFNBQVNLLEtBQVQsQ0FBZW1CLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHM7XG5cbnZhciBQYXJ0cyA9IHJlcXVpcmUoJy4vcGFydHMnKSxcbiAgICBGYXRhbEVycm9yTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9mYXRhbEVycm9yJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IFtdLFxuICAgICAgICBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgIHZhciBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0Tm9kZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YXIgZmlyc3RQYXJ0Tm9kZSA9IGZpcnN0KHBhcnROb2Rlcyk7XG5cbiAgICAgICAgICAgICAgaWYgKGZpcnN0UGFydE5vZGUgaW5zdGFuY2VvZiBGYXRhbEVycm9yTm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBmYXRhbEVycm9yTm9kZSA9IGZpcnN0UGFydE5vZGU7XG5cbiAgICAgICAgICAgICAgICBub2RlcyA9IFtmYXRhbEVycm9yTm9kZV07XG5cbiAgICAgICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgIGlmIChmaXJzdE5vZGUgaW5zdGFuY2VvZiBGYXRhbEVycm9yTm9kZSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlcyA9IG51bGw7XG5cbiAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19