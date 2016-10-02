'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = [];

      var parsed = this.parts.every(function (part) {
        var partNodes = part.parse(context, productions),
            parsed = partNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodes);
        }

        return parsed;
      });

      nodes = parsed ? nodes : null;

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp) {
      var parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromSymbol(symbol, terminalSymbolsRegExp);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ydWxlLmpzIl0sIm5hbWVzIjpbIlBhcnRzIiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vZGVzIiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJjb25jYXQiLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsIm1hcFN5bWJvbHMiLCJzeW1ib2wiLCJwYXJ0RnJvbVN5bWJvbCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwic29tZSIsIlBhcnQiLCJmcm9tU3ltYm9sIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxTQUFSLENBQVo7O0lBRU1DLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxFQUFaOztBQUVBLFVBQUlDLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUMzQyxZQUFJQyxZQUFZRCxLQUFLRSxLQUFMLENBQVdQLE9BQVgsRUFBb0JDLFdBQXBCLENBQWhCO0FBQUEsWUFDSUUsU0FBVUcsY0FBYyxJQUQ1Qjs7QUFHQSxZQUFJSCxNQUFKLEVBQVk7QUFDVkQsa0JBQVFBLE1BQU1NLE1BQU4sQ0FBYUYsU0FBYixDQUFSO0FBQ0Q7O0FBRUQsZUFBT0gsTUFBUDtBQUNELE9BVFksQ0FBYjs7QUFXQUQsY0FBUUMsU0FBU0QsS0FBVCxHQUFpQixJQUF6Qjs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozt1Q0FFeUJPLGMsRUFBZ0JDLHFCLEVBQXVCO0FBQy9ELFVBQUlYLFFBQVFVLGVBQWVFLFVBQWYsQ0FBMEIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRCxZQUFJUCxPQUFPUSxlQUFlRCxNQUFmLEVBQXVCRixxQkFBdkIsQ0FBWDs7QUFFQSxlQUFPTCxJQUFQO0FBQ0QsT0FKTyxDQUFaO0FBQUEsVUFLSVMsT0FBTyxJQUFJaEIsSUFBSixDQUFTQyxLQUFULENBTFg7O0FBT0EsYUFBT2UsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmxCLElBQWpCOztBQUVBLFNBQVNlLGNBQVQsQ0FBd0JELE1BQXhCLEVBQWdDRixxQkFBaEMsRUFBdUQ7QUFDckQsTUFBSUwsT0FBT1ksU0FBWCxDQURxRCxDQUMvQjs7QUFFdEJyQixRQUFNc0IsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QmQsV0FBT2MsS0FBS0MsVUFBTCxDQUFnQlIsTUFBaEIsRUFBd0JGLHFCQUF4QixDQUFQOztBQUVBLFFBQUlQLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJ0cyA9IHJlcXVpcmUoJy4vcGFydHMnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIFxuICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIHZhciBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcbiAgICAgIFxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZXMpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuICAgIFxuICAgIG5vZGVzID0gcGFyc2VkID8gbm9kZXMgOiBudWxsO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLm1hcFN5bWJvbHMoZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgIH0pLFxuICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iXX0=