'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = null;

      nodes = [];

      var savedIndex = context.savedIndex(),
          parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions, noWhitespace),
            partParsed = partNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodes);

          noWhitespace = false;
        }

        return partParsed;
      });

      if (!parsed) {
        context.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, significantTokenTypes) {
      var noWhitespace = false,
          parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);

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

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbFNlcXVlbmNlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVkdWNlU3ltYm9scyIsInN5bWJvbCIsIk5PX1dISVRFU1BBQ0UiLCJwYXJ0RnJvbVN5bWJvbCIsInB1c2giLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsaUJBQWlCRixPQUFPRSxjQUQ1Qjs7QUFHQSxJQUFJQyxRQUFRRixRQUFRLFNBQVIsQ0FBWjs7SUFFTUcsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFFBQVEsSUFBWjs7QUFFQUEsY0FBUSxFQUFSOztBQUVBLFVBQUlDLGFBQWFKLFFBQVFJLFVBQVIsRUFBakI7QUFBQSxVQUNJQyxTQUFTLEtBQUtOLEtBQUwsQ0FBV08sS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDdkMsWUFBSUMsWUFBWUQsS0FBS0UsS0FBTCxDQUFXVCxPQUFYLEVBQW9CQyxXQUFwQixFQUFpQ0MsWUFBakMsQ0FBaEI7QUFBQSxZQUNJUSxhQUFjRixjQUFjLElBRGhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZFAsa0JBQVFBLE1BQU1RLE1BQU4sQ0FBYUgsU0FBYixDQUFSOztBQUVBTix5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT1EsVUFBUDtBQUNELE9BWFEsQ0FEYjs7QUFjQSxVQUFJLENBQUNMLE1BQUwsRUFBYTtBQUNYTCxnQkFBUVksU0FBUixDQUFrQlIsVUFBbEI7O0FBRUFELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7Ozt1Q0FFeUJVLGMsRUFBZ0JDLHFCLEVBQXVCO0FBQy9ELFVBQUlaLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRYyxlQUFlRSxhQUFmLENBQTZCLFVBQVNoQixLQUFULEVBQWdCaUIsTUFBaEIsRUFBd0I7QUFDM0QsWUFBSUEsV0FBV3BCLGVBQWVxQixhQUE5QixFQUE2QztBQUMzQ2YseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlLLE9BQU9XLGVBQWVGLE1BQWYsRUFBdUJGLHFCQUF2QixFQUE4Q1osWUFBOUMsQ0FBWDs7QUFFQUgsZ0JBQU1vQixJQUFOLENBQVdaLElBQVg7O0FBRUFMLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPSCxLQUFQO0FBQ0QsT0FaTyxFQVlMLEVBWkssQ0FEWjtBQUFBLFVBY0lxQixPQUFPLElBQUl0QixJQUFKLENBQVNDLEtBQVQsQ0FkWDs7QUFnQkEsYUFBT3FCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ4QixJQUFqQjs7QUFFQSxTQUFTb0IsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NGLHFCQUFoQyxFQUF1RFosWUFBdkQsRUFBcUU7QUFDbkUsTUFBSUssT0FBT2dCLFNBQVgsQ0FEbUUsQ0FDN0M7O0FBRXRCMUIsUUFBTTJCLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJsQixXQUFPa0IsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JGLHFCQUF4QixFQUErQ1osWUFBL0MsQ0FBUDs7QUFFQSxRQUFJRyxTQUFVRSxTQUFTLElBQXZCOztBQUVBLFdBQU9GLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9FLElBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksXG4gICAgc3BlY2lhbFN5bWJvbHMgPSBsZXhlcnMuc3BlY2lhbFN5bWJvbHM7XG5cbnZhciBQYXJ0cyA9IHJlcXVpcmUoJy4vcGFydHMnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbDtcblxuICAgIG5vZGVzID0gW107XG5cbiAgICB2YXIgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICB2YXIgcGFydE5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2Rlcyk7XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICB9KTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIHZhciBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICBpZiAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFKSB7XG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==