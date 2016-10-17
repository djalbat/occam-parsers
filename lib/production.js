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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJzYXZlSW5kZXgiLCJydWxlTm9kZXMiLCJ1bmRlZmluZWQiLCJwYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwiYmFja3RyYWNrIiwicHJvZHVjdGlvbk5hbWUiLCJub2RlcyIsImZyb21Ob2RlcyIsImxpbmUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJ0ZXJtaW5hbFR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsVyxFQUFhO0FBQzFCRCxjQUFRRSxTQUFSOztBQUVBLFVBQUlDLFlBQVlDLFNBQWhCO0FBQUEsVUFDSUMsU0FBUyxLQUFLUCxLQUFMLENBQVdRLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQ3RDSixvQkFBWUksS0FBS0MsS0FBTCxDQUFXUixPQUFYLEVBQW9CQyxXQUFwQixDQUFaOztBQUVBLFlBQUlJLFNBQVVGLGNBQWMsSUFBNUI7O0FBRUEsWUFBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWEwsa0JBQVFTLFNBQVI7QUFDRDs7QUFFRCxlQUFPSixNQUFQO0FBQ0QsT0FWUSxDQURiOztBQWFBLFVBQUlLLGlCQUFpQixLQUFLYixJQUExQjtBQUFBLFVBQWdDO0FBQzVCYyxjQUFRTixTQUNFLEtBQUtOLElBQUwsQ0FBVWEsU0FBVixDQUFvQlQsU0FBcEIsRUFBK0JPLGNBQS9CLENBREYsR0FDb0Q7QUFDaEQsVUFIaEI7O0FBS0EsYUFBT0MsS0FBUDtBQUNEOzs7NkJBRWVFLEksRUFBTUMscUIsRUFBdUJDLGEsRUFBZUMsUSxFQUFVO0FBQ3BFLFVBQUluQixPQUFPZ0IsS0FBS0ksT0FBTCxFQUFYO0FBQUEsVUFDSW5CLFFBQVFlLEtBQUtLLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVosT0FBT2QsS0FBSzJCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0wscUJBQXhDLEVBQStEQyxhQUEvRCxDQUFYOztBQUVBLGVBQU9SLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JUixPQUFPaUIsU0FBU25CLElBQVQsS0FBa0JGLGVBTjdCO0FBQUEsVUFNOEM7QUFDMUMwQixtQkFBYSxJQUFJekIsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBT3NCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIzQixVQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIGNvbnRleHQuc2F2ZUluZGV4KCk7XG4gICAgXG4gICAgdmFyIHJ1bGVOb2RlcyA9IHVuZGVmaW5lZCxcbiAgICAgICAgcGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgcGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gICAgXG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgIG5vZGVzID0gcGFyc2VkID9cbiAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgdGVybWluYWxUeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCB0ZXJtaW5hbFR5cGVzKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzW25hbWVdIHx8IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iXX0=