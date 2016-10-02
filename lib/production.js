'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
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
    value: function parse(context, productions) {
      context.saveIndex();

      var ruleNodes = undefined,
          parsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, productions);

        var parsed = ruleNodes !== null;

        if (!parsed) {
          context.backtrack();
        }

        return parsed;
      });

      var productionName = this.name,
          ///
      nodes = parsed ? this.Node.fromNodes(ruleNodes, productionName) : ///
      null;

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, terminalSymbolsRegExp, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJzYXZlSW5kZXgiLCJydWxlTm9kZXMiLCJ1bmRlZmluZWQiLCJwYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwiYmFja3RyYWNrIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlcyIsImZyb21Ob2RlcyIsImxpbmUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsb0JBQVIsQ0FEdEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxXLEVBQWE7QUFDMUJELGNBQVFFLFNBQVI7O0FBRUEsVUFBSUMsWUFBWUMsU0FBaEI7QUFBQSxVQUNJQyxTQUFTLEtBQUtQLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDdENKLG9CQUFZSSxLQUFLQyxLQUFMLENBQVdSLE9BQVgsRUFBb0JDLFdBQXBCLENBQVo7O0FBRUEsWUFBSUksU0FBVUYsY0FBYyxJQUE1Qjs7QUFFQSxZQUFJLENBQUNFLE1BQUwsRUFBYTtBQUNYTCxrQkFBUVMsU0FBUjtBQUNEOztBQUVELGVBQU9KLE1BQVA7QUFDRCxPQVZRLENBRGI7O0FBYUEsVUFBSUssaUJBQWlCLEtBQUtiLElBQTFCO0FBQUEsVUFBZ0M7QUFDNUJjLGNBQVFOLFNBQ0UsS0FBS04sSUFBTCxDQUFVYSxTQUFWLENBQW9CVCxTQUFwQixFQUErQk8sY0FBL0IsQ0FERixHQUNvRDtBQUNoRCxVQUhoQjs7QUFLQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs2QkFFZUUsSSxFQUFNQyxxQixFQUF1QkMsUSxFQUFVO0FBQ3JELFVBQUlsQixPQUFPZ0IsS0FBS0csT0FBTCxFQUFYO0FBQUEsVUFDSWxCLFFBQVFlLEtBQUtJLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVgsT0FBT2QsS0FBSzBCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQVg7O0FBRUEsZUFBT1AsSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlSLE9BQU9nQixTQUFTbEIsSUFBVCxLQUFrQkYsZUFON0I7QUFBQSxVQU04QztBQUMxQ3lCLG1CQUFhLElBQUl4QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPcUIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgY29udGV4dC5zYXZlSW5kZXgoKTtcbiAgICBcbiAgICB2YXIgcnVsZU5vZGVzID0gdW5kZWZpbmVkLFxuICAgICAgICBwYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHZhciBwYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgICBcbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgY29udGV4dC5iYWNrdHJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgbm9kZXMgPSBwYXJzZWQgP1xuICAgICAgICAgICAgICAgICAgdGhpcy5Ob2RlLmZyb21Ob2RlcyhydWxlTm9kZXMsIHByb2R1Y3Rpb25OYW1lKSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHApO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3NbbmFtZV0gfHwgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiJdfQ==