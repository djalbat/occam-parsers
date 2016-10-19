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
    value: function fromLine(line, terminalSymbolsRegExp, terminalTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, terminalTypes);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJydWxlTm9kZXMiLCJ1bmRlZmluZWQiLCJwYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlcyIsImZyb21Ob2RlcyIsImxpbmUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsWUFBWUMsU0FBaEI7QUFBQSxVQUNJQyxTQUFTLEtBQUtQLEtBQUwsQ0FBV1EsSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDdENKLG9CQUFZSSxLQUFLQyxLQUFMLENBQVdSLE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFaOztBQUVBLFlBQUlHLFNBQVVGLGNBQWMsSUFBNUI7O0FBRUEsZUFBT0UsTUFBUDtBQUNELE9BTlEsQ0FEYjs7QUFTQSxVQUFJSSxpQkFBaUIsS0FBS1osSUFBMUI7QUFBQSxVQUFnQztBQUM1QmEsY0FBUUwsU0FDRSxLQUFLTixJQUFMLENBQVVZLFNBQVYsQ0FBb0JSLFNBQXBCLEVBQStCTSxjQUEvQixDQURGLEdBQ29EO0FBQ2hELFVBSGhCOztBQUtBLGFBQU9DLEtBQVA7QUFDRDs7OzZCQUVlRSxJLEVBQU1DLHFCLEVBQXVCQyxhLEVBQWVDLFEsRUFBVTtBQUNwRSxVQUFJbEIsT0FBT2UsS0FBS0ksT0FBTCxFQUFYO0FBQUEsVUFDSWxCLFFBQVFjLEtBQUtLLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVgsT0FBT2QsS0FBSzBCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0wscUJBQXhDLEVBQStEQyxhQUEvRCxDQUFYOztBQUVBLGVBQU9QLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JUixPQUFPZ0IsU0FBU2xCLElBQVQsS0FBa0JGLGVBTjdCO0FBQUEsVUFNOEM7QUFDMUN5QixtQkFBYSxJQUFJeEIsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBT3FCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIxQixVQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdmFyIHJ1bGVOb2RlcyA9IHVuZGVmaW5lZCxcbiAgICAgICAgcGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIHZhciBwYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgICBcbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcbiAgICBcbiAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICBub2RlcyA9IHBhcnNlZCA/XG4gICAgICAgICAgICAgICAgICB0aGlzLk5vZGUuZnJvbU5vZGVzKHJ1bGVOb2RlcywgcHJvZHVjdGlvbk5hbWUpIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHRlcm1pbmFsVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgdmFyIG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgIHZhciBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5nc1tuYW1lXSB8fCBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19