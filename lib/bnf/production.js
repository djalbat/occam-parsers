'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('../common/node/nonTerminal');

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
      var nodes = null,
          tooDeep = context.isTooDeep();

      if (!tooDeep) {
        context.increaseDepth();

        var ruleNodes = null,
            ruleParsed = this.rules.some(function (rule) {
          ruleNodes = rule.parse(context, productions, noWhitespace);

          var ruleParsed = ruleNodes !== null;

          return ruleParsed;
        });

        if (ruleParsed) {
          var ruleNodesLength = ruleNodes.length,
              productionName = this.name; ///

          if (ruleNodesLength > 0) {
            nodes = this.Node.fromNodes(ruleNodes, productionName);
          }
        }

        tooDeep = context.isTooDeep();

        if (!tooDeep) {
          context.decreaseDepth();
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, significantTokenTypes);

        return rule;
      }),
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiaW5jcmVhc2VEZXB0aCIsInJ1bGVOb2RlcyIsInJ1bGVQYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwicnVsZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsVUFBVUosUUFBUUssU0FBUixFQURkOztBQUdBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1pKLGdCQUFRTSxhQUFSOztBQUVBLFlBQUlDLFlBQVksSUFBaEI7QUFBQSxZQUNJQyxhQUFhLEtBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDMUNILHNCQUFZRyxLQUFLQyxLQUFMLENBQVdYLE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFaOztBQUVBLGNBQUlNLGFBQWNELGNBQWMsSUFBaEM7O0FBRUEsaUJBQU9DLFVBQVA7QUFDRCxTQU5ZLENBRGpCOztBQVNBLFlBQUlBLFVBQUosRUFBZ0I7QUFDZCxjQUFJSSxrQkFBa0JMLFVBQVVNLE1BQWhDO0FBQUEsY0FDSUMsaUJBQWlCLEtBQUtqQixJQUQxQixDQURjLENBRWtCOztBQUVoQyxjQUFJZSxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkJULG9CQUFRLEtBQUtKLElBQUwsQ0FBVWdCLFNBQVYsQ0FBb0JSLFNBQXBCLEVBQStCTyxjQUEvQixDQUFSO0FBQ0Q7QUFDRjs7QUFFRFYsa0JBQVVKLFFBQVFLLFNBQVIsRUFBVjs7QUFFQSxZQUFJLENBQUNELE9BQUwsRUFBYztBQUNaSixrQkFBUWdCLGFBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9iLEtBQVA7QUFDRDs7OzZCQUVlYyxJLEVBQU1DLHFCLEVBQXVCQyxRLEVBQVU7QUFDckQsVUFBSXRCLE9BQU9vQixLQUFLRyxPQUFMLEVBQVg7QUFBQSxVQUNJdEIsUUFBUW1CLEtBQUtJLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSVosT0FBT2pCLEtBQUs4QixrQkFBTCxDQUF3QkQsY0FBeEIsRUFBd0NKLHFCQUF4QyxDQUFYOztBQUVBLGVBQU9SLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JWCxPQUFPb0IsU0FBU0ssY0FBVCxDQUF3QjNCLElBQXhCLElBQWdDc0IsU0FBU3RCLElBQVQsQ0FBaEMsR0FBaURGLGVBTjVEO0FBQUEsVUFNNkU7QUFDekU4QixtQkFBYSxJQUFJN0IsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBTzBCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIvQixVQUFqQiIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICghdG9vRGVlcCkge1xuICAgICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICAgIHZhciBydWxlTm9kZXMgPSBudWxsLFxuICAgICAgICAgIHJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgdmFyIHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChydWxlUGFyc2VkKSB7XG4gICAgICAgIHZhciBydWxlTm9kZXNMZW5ndGggPSBydWxlTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIGlmIChydWxlTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgbm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzKHJ1bGVOb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgICBpZiAoIXRvb0RlZXApIHtcbiAgICAgICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID8gbWFwcGluZ3NbbmFtZV0gOiBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19