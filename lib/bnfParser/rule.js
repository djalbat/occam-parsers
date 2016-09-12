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
    key: 'fromSequenceOfSymbols',
    value: function fromSequenceOfSymbols(sequenceOfSymbols, Parts) {
      var AllParts = spliceParts(CommonParts, Parts),
          parts = sequenceOfSymbols.mapSymbols(function (symbol) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIkNvbW1vblBhcnRzIiwiUnVsZSIsInBhcnRzIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJzZSIsInNlcXVlbmNlT2ZTeW1ib2xzIiwiUGFydHMiLCJBbGxQYXJ0cyIsInNwbGljZVBhcnRzIiwibWFwU3ltYm9scyIsInN5bWJvbCIsInBhcnRGcm9tQWxsUGFydHMiLCJydWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNvbWUiLCJQYXJ0IiwiZnJvbVN5bWJvbCIsInNsaWNlIiwiQ29tbW9uUGFydHNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLGNBQWNELFFBQVEsZUFBUixDQURsQjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxZQUFJRixTQUFTRSxLQUFLQyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixDQUFiOztBQUVBLGVBQU9DLE1BQVA7QUFDRCxPQUpZLENBQWI7O0FBTUEsYUFBT0EsTUFBUDtBQUNEOzs7MENBRTRCSSxpQixFQUFtQkMsSyxFQUFPO0FBQ3JELFVBQUlDLFdBQVdDLFlBQVliLFdBQVosRUFBeUJXLEtBQXpCLENBQWY7QUFBQSxVQUNJVCxRQUFRUSxrQkFBa0JJLFVBQWxCLENBQTZCLFVBQVNDLE1BQVQsRUFBaUI7QUFDcEQsWUFBSVAsT0FBT1EsaUJBQWlCSixRQUFqQixFQUEyQkcsTUFBM0IsQ0FBWDs7QUFFQSxlQUFPUCxJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVMsT0FBTyxJQUFJaEIsSUFBSixDQUFTQyxLQUFULENBTlg7O0FBUUEsYUFBT2UsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLElBQWpCOztBQUVBLFNBQVNlLGdCQUFULENBQTBCSixRQUExQixFQUFvQ0csTUFBcEMsRUFBNEM7QUFDMUMsTUFBSVAsT0FBTyxJQUFYOztBQUVBSSxXQUFTUSxJQUFULENBQWMsVUFBU0MsSUFBVCxFQUFlO0FBQzNCYixXQUFPYSxLQUFLQyxVQUFMLENBQWdCUCxNQUFoQixDQUFQOztBQUVBLFFBQUlULFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEOztBQUVELFNBQVNLLFdBQVQsQ0FBcUJiLFdBQXJCLEVBQWtDVyxLQUFsQyxFQUF5QztBQUN2QyxNQUFJQyxXQUFXWixZQUFZdUIsS0FBWixFQUFmO0FBQUEsTUFDSUMsb0JBQW9CeEIsWUFBWXlCLE1BRHBDO0FBQUEsTUFFSUMsUUFBUUYsaUJBRlo7QUFBQSxNQUUrQjtBQUMzQkcsZ0JBQWMsQ0FIbEI7O0FBS0E3QixPQUFLOEIsV0FBTCxDQUFpQmhCLFFBQWpCLEVBQTJCYyxLQUEzQixFQUFrQ0MsV0FBbEMsRUFBK0NoQixLQUEvQzs7QUFFQSxTQUFPQyxRQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXG4gICAgQ29tbW9uUGFydHMgPSByZXF1aXJlKCcuL2NvbW1vblBhcnRzJyk7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnQucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZXF1ZW5jZU9mU3ltYm9scyhzZXF1ZW5jZU9mU3ltYm9scywgUGFydHMpIHtcbiAgICB2YXIgQWxsUGFydHMgPSBzcGxpY2VQYXJ0cyhDb21tb25QYXJ0cywgUGFydHMpLFxuICAgICAgICBwYXJ0cyA9IHNlcXVlbmNlT2ZTeW1ib2xzLm1hcFN5bWJvbHMoZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbUFsbFBhcnRzKEFsbFBhcnRzLCBzeW1ib2wpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21BbGxQYXJ0cyhBbGxQYXJ0cywgc3ltYm9sKSB7XG4gIHZhciBwYXJ0ID0gbnVsbDtcblxuICBBbGxQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHNwbGljZVBhcnRzKENvbW1vblBhcnRzLCBQYXJ0cykge1xuICB2YXIgQWxsUGFydHMgPSBDb21tb25QYXJ0cy5zbGljZSgpLFxuICAgICAgQ29tbW9uUGFydHNMZW5ndGggPSBDb21tb25QYXJ0cy5sZW5ndGgsXG4gICAgICBzdGFydCA9IENvbW1vblBhcnRzTGVuZ3RoLCAvLy9cbiAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICB1dGlsLnNwbGljZUFycmF5KEFsbFBhcnRzLCBzdGFydCwgZGVsZXRlQ291bnQsIFBhcnRzKTtcblxuICByZXR1cm4gQWxsUGFydHM7XG59XG4iXX0=