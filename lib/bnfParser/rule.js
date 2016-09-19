'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    CommonParts = require('./commonParts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = this.parts.every(function (part) {
        var parsed = part.parse(input, context, productions);

        return parsed;
      });

      return parsed;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, Parts, terminalSymbolsRegExp) {
      var AllParts = spliceParts(CommonParts, Parts),
          parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromSymbol(symbol, terminalSymbolsRegExp, AllParts);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp, AllParts) {
  var part = null;

  AllParts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}

function spliceParts(CommonParts, Parts) {
  var AllParts = CommonParts.slice(),
      CommonPartsLength = CommonParts.length,
      start = CommonPartsLength,
      ///
  deleteCount = 0;

  util.spliceArray(AllParts, start, deleteCount, Parts);

  return AllParts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkNvbW1vblBhcnRzIiwiUnVsZSIsInBhcnRzIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJzZSIsInN5bWJvbFNlcXVlbmNlIiwiUGFydHMiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJBbGxQYXJ0cyIsInNwbGljZVBhcnRzIiwibWFwU3ltYm9scyIsInN5bWJvbCIsInBhcnRGcm9tU3ltYm9sIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiLCJzbGljZSIsIkNvbW1vblBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZUFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxjQUFjRCxRQUFRLGVBQVIsQ0FEbEI7O0lBR01FLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDM0MsWUFBSUYsU0FBU0UsS0FBS0MsS0FBTCxDQUFXTixLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsV0FBM0IsQ0FBYjs7QUFFQSxlQUFPQyxNQUFQO0FBQ0QsT0FKWSxDQUFiOztBQU1BLGFBQU9BLE1BQVA7QUFDRDs7O3VDQUV5QkksYyxFQUFnQkMsSyxFQUFPQyxxQixFQUF1QjtBQUN0RSxVQUFJQyxXQUFXQyxZQUFZZCxXQUFaLEVBQXlCVyxLQUF6QixDQUFmO0FBQUEsVUFDSVQsUUFBUVEsZUFBZUssVUFBZixDQUEwQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pELFlBQUlSLE9BQU9TLGVBQWVELE1BQWYsRUFBdUJKLHFCQUF2QixFQUE4Q0MsUUFBOUMsQ0FBWDs7QUFFQSxlQUFPTCxJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVUsT0FBTyxJQUFJakIsSUFBSixDQUFTQyxLQUFULENBTlg7O0FBUUEsYUFBT2dCLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuQixJQUFqQjs7QUFFQSxTQUFTZ0IsY0FBVCxDQUF3QkQsTUFBeEIsRUFBZ0NKLHFCQUFoQyxFQUF1REMsUUFBdkQsRUFBaUU7QUFDL0QsTUFBSUwsT0FBTyxJQUFYOztBQUVBSyxXQUFTUSxJQUFULENBQWMsVUFBU0MsSUFBVCxFQUFlO0FBQzNCZCxXQUFPYyxLQUFLQyxVQUFMLENBQWdCUCxNQUFoQixFQUF3QkoscUJBQXhCLENBQVA7O0FBRUEsUUFBSU4sU0FBVUUsU0FBUyxJQUF2Qjs7QUFFQSxXQUFPRixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPRSxJQUFQO0FBQ0Q7O0FBRUQsU0FBU00sV0FBVCxDQUFxQmQsV0FBckIsRUFBa0NXLEtBQWxDLEVBQXlDO0FBQ3ZDLE1BQUlFLFdBQVdiLFlBQVl3QixLQUFaLEVBQWY7QUFBQSxNQUNJQyxvQkFBb0J6QixZQUFZMEIsTUFEcEM7QUFBQSxNQUVJQyxRQUFRRixpQkFGWjtBQUFBLE1BRStCO0FBQzNCRyxnQkFBYyxDQUhsQjs7QUFLQTlCLE9BQUsrQixXQUFMLENBQWlCaEIsUUFBakIsRUFBMkJjLEtBQTNCLEVBQWtDQyxXQUFsQyxFQUErQ2pCLEtBQS9DOztBQUVBLFNBQU9FLFFBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcbiAgICBDb21tb25QYXJ0cyA9IHJlcXVpcmUoJy4vY29tbW9uUGFydHMnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICB2YXIgcGFyc2VkID0gcGFydC5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBQYXJ0cywgdGVybWluYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIEFsbFBhcnRzID0gc3BsaWNlUGFydHMoQ29tbW9uUGFydHMsIFBhcnRzKSxcbiAgICAgICAgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5tYXBTeW1ib2xzKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIEFsbFBhcnRzKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBBbGxQYXJ0cykge1xuICB2YXIgcGFydCA9IG51bGw7XG5cbiAgQWxsUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHNwbGljZVBhcnRzKENvbW1vblBhcnRzLCBQYXJ0cykge1xuICB2YXIgQWxsUGFydHMgPSBDb21tb25QYXJ0cy5zbGljZSgpLFxuICAgICAgQ29tbW9uUGFydHNMZW5ndGggPSBDb21tb25QYXJ0cy5sZW5ndGgsXG4gICAgICBzdGFydCA9IENvbW1vblBhcnRzTGVuZ3RoLCAvLy9cbiAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB1dGlsLnNwbGljZUFycmF5KEFsbFBhcnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIFBhcnRzKTtcblxuICByZXR1cm4gQWxsUGFydHM7XG59XG4iXX0=