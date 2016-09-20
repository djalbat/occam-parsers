'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'parse',
    value: function parse(input, context, productions) {
      var index = context.getIndex(),
          savedIndex = index,
          ///
      parsed = this.rules.some(function (rule) {
        var parsed = rule.parse(input, context, productions);

        if (!parsed) {
          context.backtrack(savedIndex);

          return false;
        } else {
          return true;
        }
      });

      return parsed;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, specialSymbolsRegExp, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, specialSymbolsRegExp);

        return rule;
      }),
          Node = mappings[name],
          production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiaW5wdXQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJpbmRleCIsImdldEluZGV4Iiwic2F2ZWRJbmRleCIsInBhcnNlZCIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJiYWNrdHJhY2siLCJsaW5lIiwic3BlY2lhbFN5bWJvbHNSZWdFeHAiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7O0lBRU1DLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxRQUFRRixRQUFRRyxRQUFSLEVBQVo7QUFBQSxVQUNJQyxhQUFhRixLQURqQjtBQUFBLFVBQ3dCO0FBQ3BCRyxlQUFTLEtBQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDMUMsWUFBSUYsU0FBU0UsS0FBS0MsS0FBTCxDQUFXVCxLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsV0FBM0IsQ0FBYjs7QUFFQSxZQUFJLENBQUNJLE1BQUwsRUFBYTtBQUNYTCxrQkFBUVMsU0FBUixDQUFrQkwsVUFBbEI7O0FBRUEsaUJBQU8sS0FBUDtBQUNELFNBSkQsTUFJTztBQUNMLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BVlksQ0FGYjs7QUFjQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs2QkFFZUssSSxFQUFNQyxvQixFQUFzQkMsUSxFQUFVO0FBQ3BELFVBQUloQixPQUFPYyxLQUFLRyxPQUFMLEVBQVg7QUFBQSxVQUNJaEIsUUFBUWEsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJUixPQUFPZCxLQUFLdUIsa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDSixvQkFBeEMsQ0FBWDs7QUFFQSxlQUFPSixJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVQsT0FBT2MsU0FBU2hCLElBQVQsQ0FOWDtBQUFBLFVBT0lxQixhQUFhLElBQUl0QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPbUIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnhCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBpbmRleCA9IGNvbnRleHQuZ2V0SW5kZXgoKSxcbiAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgcGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBydWxlLnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICBcbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCwgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0sXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iXX0=