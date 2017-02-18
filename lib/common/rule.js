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
    value: function parse(context, noWhitespace) {
      var nodes = null;

      nodes = [];

      var savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, noWhitespace),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJldmVyeVBhcnRQYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiLCJwYXJzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7O0FBR0EsSUFBSUMsUUFBUUYsUUFBUSxTQUFSLENBQVo7O0lBRU1HLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxZLEVBQWM7QUFDM0IsVUFBSUMsUUFBUSxJQUFaOztBQUVBQSxjQUFRLEVBQVI7O0FBRUEsVUFBSUMsYUFBYUgsUUFBUUcsVUFBUixFQUFqQjtBQUFBLFVBQ0lDLGtCQUFrQixLQUFLTCxLQUFMLENBQVdNLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ2hELFlBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV1IsT0FBWCxFQUFvQkMsWUFBcEIsQ0FBaEI7QUFBQSxZQUNJUSxhQUFjRixjQUFjLElBRGhDOztBQUdBLFlBQUlFLFVBQUosRUFBZ0I7QUFDZFAsa0JBQVFBLE1BQU1RLE1BQU4sQ0FBYUgsU0FBYixDQUFSOztBQUVBTix5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT1EsVUFBUDtBQUNELE9BWGlCLENBRHRCOztBQWNBLFVBQUksQ0FBQ0wsZUFBTCxFQUFzQjtBQUNwQkosZ0JBQVFXLFNBQVIsQ0FBa0JSLFVBQWxCOztBQUVBRCxnQkFBUSxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7dUNBRXlCVSxjLEVBQWdCQyxxQixFQUF1QjtBQUMvRCxVQUFJWixlQUFlLEtBQW5CO0FBQUEsVUFDSUYsUUFBUWEsZUFBZUUsYUFBZixDQUE2QixVQUFTZixLQUFULEVBQWdCZ0IsTUFBaEIsRUFBd0I7QUFDM0QsWUFBSUEsV0FBV25CLGVBQWVvQixhQUE5QixFQUE2QztBQUMzQ2YseUJBQWUsSUFBZjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlLLE9BQU9XLGVBQWVGLE1BQWYsRUFBdUJGLHFCQUF2QixFQUE4Q1osWUFBOUMsQ0FBWDs7QUFFQUYsZ0JBQU1tQixJQUFOLENBQVdaLElBQVg7O0FBRUFMLHlCQUFlLEtBQWY7QUFDRDs7QUFFRCxlQUFPRixLQUFQO0FBQ0QsT0FaTyxFQVlMLEVBWkssQ0FEWjtBQUFBLFVBY0lvQixPQUFPLElBQUlyQixJQUFKLENBQVNDLEtBQVQsQ0FkWDs7QUFnQkEsYUFBT29CLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ2QixJQUFqQjs7QUFFQSxTQUFTbUIsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NGLHFCQUFoQyxFQUF1RFosWUFBdkQsRUFBcUU7QUFDbkUsTUFBSUssT0FBT2dCLFNBQVgsQ0FEbUUsQ0FDN0M7O0FBRXRCekIsUUFBTTBCLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJsQixXQUFPa0IsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JGLHFCQUF4QixFQUErQ1osWUFBL0MsQ0FBUDs7QUFFQSxRQUFJeUIsU0FBVXBCLFNBQVMsSUFBdkI7O0FBRUEsV0FBT29CLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9wQixJQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIHNwZWNpYWxTeW1ib2xzID0gbGV4ZXJzLnNwZWNpYWxTeW1ib2xzO1xuXG52YXIgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIG5vZGVzID0gbnVsbDtcblxuICAgIG5vZGVzID0gW107XG5cbiAgICB2YXIgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICB2YXIgcGFydE5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVzKTtcblxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG5cbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIHZhciBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19