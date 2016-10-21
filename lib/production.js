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
    value: function parse(context, productions, noWhitespace) {
      var ruleNodes = undefined,
          parsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, productions, noWhitespace);

        var parsed = ruleNodes !== null;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJydWxlTm9kZXMiLCJ1bmRlZmluZWQiLCJwYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlcyIsImZyb21Ob2RlcyIsImxpbmUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsb0JBQVIsQ0FEdEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxZQUFZQyxTQUFoQjtBQUFBLFVBQ0lDLFNBQVMsS0FBS1AsS0FBTCxDQUFXUSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUN0Q0osb0JBQVlJLEtBQUtDLEtBQUwsQ0FBV1IsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQVo7O0FBRUEsWUFBSUcsU0FBVUYsY0FBYyxJQUE1Qjs7QUFFQSxlQUFPRSxNQUFQO0FBQ0QsT0FOUSxDQURiOztBQVNBLFVBQUlJLGlCQUFpQixLQUFLWixJQUExQjtBQUFBLFVBQWdDO0FBQzVCYSxjQUFRTCxTQUNFLEtBQUtOLElBQUwsQ0FBVVksU0FBVixDQUFvQlIsU0FBcEIsRUFBK0JNLGNBQS9CLENBREYsR0FDb0Q7QUFDaEQsVUFIaEI7O0FBS0EsYUFBT0MsS0FBUDtBQUNEOzs7NkJBRWVFLEksRUFBTUMscUIsRUFBdUJDLHFCLEVBQXVCQyxRLEVBQVU7QUFDNUUsVUFBSWxCLE9BQU9lLEtBQUtJLE9BQUwsRUFBWDtBQUFBLFVBQ0lsQixRQUFRYyxLQUFLSyxrQkFBTCxDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQ3ZELFlBQUlYLE9BQU9kLEtBQUswQixrQkFBTCxDQUF3QkQsY0FBeEIsRUFBd0NMLHFCQUF4QyxFQUErREMscUJBQS9ELENBQVg7O0FBRUEsZUFBT1AsSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlSLE9BQU9nQixTQUFTbEIsSUFBVCxLQUFrQkYsZUFON0I7QUFBQSxVQU04QztBQUMxQ3lCLG1CQUFhLElBQUl4QixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPcUIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgcnVsZU5vZGVzID0gdW5kZWZpbmVkLFxuICAgICAgICBwYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIHBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICAgIFxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgIG5vZGVzID0gcGFyc2VkID9cbiAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5nc1tuYW1lXSB8fCBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19