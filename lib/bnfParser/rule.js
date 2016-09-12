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
    value: function fromSymbolSequence(symbolSequence, Parts) {
      var AllParts = spliceParts(CommonParts, Parts),
          parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromAllParts(AllParts, symbol);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromAllParts(AllParts, symbol) {
  var part = null;

  AllParts.some(function (Part) {
    part = Part.fromSymbol(symbol);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkNvbW1vblBhcnRzIiwiUnVsZSIsInBhcnRzIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJzZSIsInN5bWJvbFNlcXVlbmNlIiwiUGFydHMiLCJBbGxQYXJ0cyIsInNwbGljZVBhcnRzIiwibWFwU3ltYm9scyIsInN5bWJvbCIsInBhcnRGcm9tQWxsUGFydHMiLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCIsInNsaWNlIiwiQ29tbW9uUGFydHNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLGNBQWNELFFBQVEsZUFBUixDQURsQjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxZQUFJRixTQUFTRSxLQUFLQyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFiOztBQUVBLGVBQU9DLE1BQVA7QUFDRCxPQUpZLENBQWI7O0FBTUEsYUFBT0EsTUFBUDtBQUNEOzs7dUNBRXlCSSxjLEVBQWdCQyxLLEVBQU87QUFDL0MsVUFBSUMsV0FBV0MsWUFBWWIsV0FBWixFQUF5QlcsS0FBekIsQ0FBZjtBQUFBLFVBQ0lULFFBQVFRLGVBQWVJLFVBQWYsQ0FBMEIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRCxZQUFJUCxPQUFPUSxpQkFBaUJKLFFBQWpCLEVBQTJCRyxNQUEzQixDQUFYOztBQUVBLGVBQU9QLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JUyxPQUFPLElBQUloQixJQUFKLENBQVNDLEtBQVQsQ0FOWDs7QUFRQSxhQUFPZSxJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEIsSUFBakI7O0FBRUEsU0FBU2UsZ0JBQVQsQ0FBMEJKLFFBQTFCLEVBQW9DRyxNQUFwQyxFQUE0QztBQUMxQyxNQUFJUCxPQUFPLElBQVg7O0FBRUFJLFdBQVNRLElBQVQsQ0FBYyxVQUFTQyxJQUFULEVBQWU7QUFDM0JiLFdBQU9hLEtBQUtDLFVBQUwsQ0FBZ0JQLE1BQWhCLENBQVA7O0FBRUEsUUFBSVQsU0FBVUUsU0FBUyxJQUF2Qjs7QUFFQSxXQUFPRixNQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPRSxJQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssV0FBVCxDQUFxQmIsV0FBckIsRUFBa0NXLEtBQWxDLEVBQXlDO0FBQ3ZDLE1BQUlDLFdBQVdaLFlBQVl1QixLQUFaLEVBQWY7QUFBQSxNQUNJQyxvQkFBb0J4QixZQUFZeUIsTUFEcEM7QUFBQSxNQUVJQyxRQUFRRixpQkFGWjtBQUFBLE1BRStCO0FBQzNCRyxnQkFBYyxDQUhsQjs7QUFLQTdCLE9BQUs4QixXQUFMLENBQWlCaEIsUUFBakIsRUFBMkJjLEtBQTNCLEVBQWtDQyxXQUFsQyxFQUErQ2hCLEtBQS9DOztBQUVBLFNBQU9DLFFBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcbiAgICBDb21tb25QYXJ0cyA9IHJlcXVpcmUoJy4vY29tbW9uUGFydHMnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICB2YXIgcGFyc2VkID0gcGFydC5wYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBQYXJ0cykge1xuICAgIHZhciBBbGxQYXJ0cyA9IHNwbGljZVBhcnRzKENvbW1vblBhcnRzLCBQYXJ0cyksXG4gICAgICAgIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UubWFwU3ltYm9scyhmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tQWxsUGFydHMoQWxsUGFydHMsIHN5bWJvbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbUFsbFBhcnRzKEFsbFBhcnRzLCBzeW1ib2wpIHtcbiAgdmFyIHBhcnQgPSBudWxsO1xuXG4gIEFsbFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gc3BsaWNlUGFydHMoQ29tbW9uUGFydHMsIFBhcnRzKSB7XG4gIHZhciBBbGxQYXJ0cyA9IENvbW1vblBhcnRzLnNsaWNlKCksXG4gICAgICBDb21tb25QYXJ0c0xlbmd0aCA9IENvbW1vblBhcnRzLmxlbmd0aCxcbiAgICAgIHN0YXJ0ID0gQ29tbW9uUGFydHNMZW5ndGgsIC8vL1xuICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHV0aWwuc3BsaWNlQXJyYXkoQWxsUGFydHMsIHN0YXJ0LCBkZWxldGVDb3VudCwgUGFydHMpO1xuXG4gIHJldHVybiBBbGxQYXJ0cztcbn1cbiJdfQ==