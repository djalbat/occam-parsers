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
      var nodes = null,
          tooDeep = context.isTooDeep();

      if (!tooDeep) {
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
          tooDeep = context.isTooDeep();

          if (!tooDeep) {
            context.backtrack(savedIndex);
          }

          nodes = null;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsInNhdmVkSW5kZXgiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7O0FBR0EsSUFBSUMsUUFBUUYsUUFBUSxTQUFSLENBQVo7O0lBRU1HLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxVQUFVSixRQUFRSyxTQUFSLEVBRGQ7O0FBR0EsVUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWkQsZ0JBQVEsRUFBUjs7QUFFQSxZQUFJRyxhQUFhTixRQUFRTSxVQUFSLEVBQWpCO0FBQUEsWUFDSUMsU0FBUyxLQUFLUixLQUFMLENBQVdTLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDLGNBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV1gsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQWhCO0FBQUEsY0FDSVUsYUFBY0YsY0FBYyxJQURoQzs7QUFHQSxjQUFJRSxVQUFKLEVBQWdCO0FBQ2RULG9CQUFRQSxNQUFNVSxNQUFOLENBQWFILFNBQWIsQ0FBUjs7QUFFQVIsMkJBQWUsS0FBZjtBQUNEOztBQUVELGlCQUFPVSxVQUFQO0FBQ0QsU0FYUSxDQURiOztBQWNBLFlBQUksQ0FBQ0wsTUFBTCxFQUFhO0FBQ1hILG9CQUFVSixRQUFRSyxTQUFSLEVBQVY7O0FBRUEsY0FBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWkosb0JBQVFjLFNBQVIsQ0FBa0JSLFVBQWxCO0FBQ0Q7O0FBRURILGtCQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7O3VDQUV5QlksYyxFQUFnQkMscUIsRUFBdUI7QUFDL0QsVUFBSWQsZUFBZSxLQUFuQjtBQUFBLFVBQ0lILFFBQVFnQixlQUFlRSxhQUFmLENBQTZCLFVBQVNsQixLQUFULEVBQWdCbUIsTUFBaEIsRUFBd0I7QUFDM0QsWUFBSUEsV0FBV3RCLGVBQWV1QixhQUE5QixFQUE2QztBQUMzQ2pCLHlCQUFlLElBQWY7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJTyxPQUFPVyxlQUFlRixNQUFmLEVBQXVCRixxQkFBdkIsRUFBOENkLFlBQTlDLENBQVg7O0FBRUFILGdCQUFNc0IsSUFBTixDQUFXWixJQUFYOztBQUVBUCx5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0gsS0FBUDtBQUNELE9BWk8sRUFZTCxFQVpLLENBRFo7QUFBQSxVQWNJdUIsT0FBTyxJQUFJeEIsSUFBSixDQUFTQyxLQUFULENBZFg7O0FBZ0JBLGFBQU91QixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCMUIsSUFBakI7O0FBRUEsU0FBU3NCLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDRixxQkFBaEMsRUFBdURkLFlBQXZELEVBQXFFO0FBQ25FLE1BQUlPLE9BQU9nQixTQUFYLENBRG1FLENBQzdDOztBQUV0QjVCLFFBQU02QixJQUFOLENBQVcsVUFBU0MsSUFBVCxFQUFlO0FBQ3hCbEIsV0FBT2tCLEtBQUtDLFVBQUwsQ0FBZ0JWLE1BQWhCLEVBQXdCRixxQkFBeEIsRUFBK0NkLFlBQS9DLENBQVA7O0FBRUEsUUFBSUssU0FBVUUsU0FBUyxJQUF2Qjs7QUFFQSxXQUFPRixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPRSxJQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIHNwZWNpYWxTeW1ib2xzID0gbGV4ZXJzLnNwZWNpYWxTeW1ib2xzO1xuXG52YXIgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKCF0b29EZWVwKSB7XG4gICAgICBub2RlcyA9IFtdO1xuXG4gICAgICB2YXIgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgdmFyIHBhcnROb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZXMpO1xuXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICAgICAgaWYgKCF0b29EZWVwKSB7XG4gICAgICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19