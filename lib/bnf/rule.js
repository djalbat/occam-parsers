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
          everyPartParsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions, noWhitespace),
            partParsed = partNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodes);

          noWhitespace = false;
        }

        return partParsed;
      });

      if (!everyPartParsed) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImV2ZXJ5UGFydFBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsImNvbmNhdCIsImJhY2t0cmFjayIsInN5bWJvbFNlcXVlbmNlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwicmVkdWNlU3ltYm9scyIsInN5bWJvbCIsIk5PX1dISVRFU1BBQ0UiLCJwYXJ0RnJvbVN5bWJvbCIsInB1c2giLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCIsInBhcnNlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDSUMsaUJBQWlCRixPQUFPRSxjQUQ1Qjs7QUFHQSxJQUFJQyxRQUFRRixRQUFRLFNBQVIsQ0FBWjs7SUFFTUcsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxPLEVBQVNDLFcsRUFBYUMsWSxFQUFjO0FBQ3hDLFVBQUlDLFFBQVEsSUFBWjs7QUFFQUEsY0FBUSxFQUFSOztBQUVBLFVBQUlDLGFBQWFKLFFBQVFJLFVBQVIsRUFBakI7QUFBQSxVQUNJQyxrQkFBa0IsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUNoRCxZQUFJQyxZQUFZRCxLQUFLRSxLQUFMLENBQVdULE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFoQjtBQUFBLFlBQ0lRLGFBQWNGLGNBQWMsSUFEaEM7O0FBR0EsWUFBSUUsVUFBSixFQUFnQjtBQUNkUCxrQkFBUUEsTUFBTVEsTUFBTixDQUFhSCxTQUFiLENBQVI7O0FBRUFOLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPUSxVQUFQO0FBQ0QsT0FYaUIsQ0FEdEI7O0FBY0EsVUFBSSxDQUFDTCxlQUFMLEVBQXNCO0FBQ3BCTCxnQkFBUVksU0FBUixDQUFrQlIsVUFBbEI7O0FBRUFELGdCQUFRLElBQVI7QUFDRDs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7Ozt1Q0FFeUJVLGMsRUFBZ0JDLHFCLEVBQXVCO0FBQy9ELFVBQUlaLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRYyxlQUFlRSxhQUFmLENBQTZCLFVBQVNoQixLQUFULEVBQWdCaUIsTUFBaEIsRUFBd0I7QUFDM0QsWUFBSUEsV0FBV3BCLGVBQWVxQixhQUE5QixFQUE2QztBQUMzQ2YseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlLLE9BQU9XLGVBQWVGLE1BQWYsRUFBdUJGLHFCQUF2QixFQUE4Q1osWUFBOUMsQ0FBWDs7QUFFQUgsZ0JBQU1vQixJQUFOLENBQVdaLElBQVg7O0FBRUFMLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPSCxLQUFQO0FBQ0QsT0FaTyxFQVlMLEVBWkssQ0FEWjtBQUFBLFVBY0lxQixPQUFPLElBQUl0QixJQUFKLENBQVNDLEtBQVQsQ0FkWDs7QUFnQkEsYUFBT3FCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ4QixJQUFqQjs7QUFFQSxTQUFTb0IsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NGLHFCQUFoQyxFQUF1RFosWUFBdkQsRUFBcUU7QUFDbkUsTUFBSUssT0FBT2dCLFNBQVgsQ0FEbUUsQ0FDN0M7O0FBRXRCMUIsUUFBTTJCLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJsQixXQUFPa0IsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JGLHFCQUF4QixFQUErQ1osWUFBL0MsQ0FBUDs7QUFFQSxRQUFJeUIsU0FBVXBCLFNBQVMsSUFBdkI7O0FBRUEsV0FBT29CLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9wQixJQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIHNwZWNpYWxTeW1ib2xzID0gbGV4ZXJzLnNwZWNpYWxTeW1ib2xzO1xuXG52YXIgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGw7XG5cbiAgICBub2RlcyA9IFtdO1xuXG4gICAgdmFyIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZXMpO1xuXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICB2YXIgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcblxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgdmFyIHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXX0=