'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    ErrorNode = require('./node/error'),
    NonTerminalNode = require('./node/nonTerminal');

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
    value: function parse(context, productions, noWhitespace) {
      var nodes = null;

      this.rules.some(function (rule) {
        nodes = rule.parse(context, productions, noWhitespace);

        var parsed = nodes !== null;

        return parsed;
      });

      var parsed = nodes !== null;

      if (parsed) {
        var firstNode = first(nodes);

        if (firstNode instanceof ErrorNode) {} else {
          var productionName = this.name; ///

          nodes = this.Node.fromNodes(nodes, productionName);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, terminalSymbolsRegExp, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes);

        return rule;
      }),
          Node = mappings[name] || NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzIiwibGluZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsWUFBWUQsUUFBUSxjQUFSLENBRGhCO0FBQUEsSUFFSUUsa0JBQWtCRixRQUFRLG9CQUFSLENBRnRCOztJQUlNRyxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFdBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0JGLGdCQUFRRSxLQUFLQyxLQUFMLENBQVdOLE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFSOztBQUVBLFlBQUlLLFNBQVVKLFVBQVUsSUFBeEI7O0FBRUEsZUFBT0ksTUFBUDtBQUNELE9BTkQ7O0FBUUEsVUFBSUEsU0FBVUosVUFBVSxJQUF4Qjs7QUFFQSxVQUFJSSxNQUFKLEVBQVk7QUFDVixZQUFJQyxZQUFZQyxNQUFNTixLQUFOLENBQWhCOztBQUVBLFlBQUlLLHFCQUFxQmQsU0FBekIsRUFBb0MsQ0FFbkMsQ0FGRCxNQUVPO0FBQ0wsY0FBSWdCLGlCQUFpQixLQUFLYixJQUExQixDQURLLENBQzJCOztBQUVoQ00sa0JBQVEsS0FBS0osSUFBTCxDQUFVWSxTQUFWLENBQW9CUixLQUFwQixFQUEyQk8sY0FBM0IsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1AsS0FBUDtBQUNEOzs7NkJBRWVTLEksRUFBTUMscUIsRUFBdUJDLHFCLEVBQXVCQyxRLEVBQVU7QUFDNUUsVUFBSWxCLE9BQU9lLEtBQUtJLE9BQUwsRUFBWDtBQUFBLFVBQ0lsQixRQUFRYyxLQUFLSyxrQkFBTCxDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQ3ZELFlBQUliLE9BQU9iLEtBQUsyQixrQkFBTCxDQUF3QkQsY0FBeEIsRUFBd0NMLHFCQUF4QyxFQUErREMscUJBQS9ELENBQVg7O0FBRUEsZUFBT1QsSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlOLE9BQU9nQixTQUFTbEIsSUFBVCxLQUFrQkYsZUFON0I7QUFBQSxVQU04QztBQUMxQ3lCLG1CQUFhLElBQUl4QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPcUIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFCLFVBQWpCOztBQUVBLFNBQVNhLEtBQVQsQ0FBZWMsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2Vycm9yJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIG5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgdmFyIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgcGFyc2VkID0gKG5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHZhciBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICAgIGlmIChmaXJzdE5vZGUgaW5zdGFuY2VvZiBFcnJvck5vZGUpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lOyAvLy9cblxuICAgICAgICBub2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgdmFyIG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzW25hbWVdIHx8IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19