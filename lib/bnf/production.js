'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    ErrorNode = require('./node/error'),
    NonTerminalNode = require('./node/nonTerminal'),
    TooDeepErrorNode = require('./node/error/tooDeep');

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
      context.increaseDepth();

      var nodes = null,
          tooDeep = context.isTooDeep();

      if (tooDeep) {
        var tooDeepErrorNode = new TooDeepErrorNode();

        nodes = [tooDeepErrorNode];
      } else {
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
      }

      context.decreaseDepth();

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
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIkVycm9yTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsIlRvb0RlZXBFcnJvck5vZGUiLCJQcm9kdWN0aW9uIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsImluY3JlYXNlRGVwdGgiLCJub2RlcyIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJ0b29EZWVwRXJyb3JOb2RlIiwic29tZSIsInJ1bGUiLCJwYXJzZSIsInBhcnNlZCIsImZpcnN0Tm9kZSIsImZpcnN0IiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxZQUFZRCxRQUFRLGNBQVIsQ0FEaEI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FGdEI7QUFBQSxJQUdJRyxtQkFBbUJILFFBQVEsc0JBQVIsQ0FIdkI7O0lBS01JLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0YsY0FBUUcsYUFBUjs7QUFFQSxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxVQUFVTCxRQUFRTSxTQUFSLEVBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsbUJBQW1CLElBQUlaLGdCQUFKLEVBQXZCOztBQUVBUyxnQkFBUSxDQUFDRyxnQkFBRCxDQUFSO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsYUFBS1QsS0FBTCxDQUFXVSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3Qkwsa0JBQVFLLEtBQUtDLEtBQUwsQ0FBV1YsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQVI7O0FBRUEsY0FBSVMsU0FBVVAsVUFBVSxJQUF4Qjs7QUFFQSxpQkFBT08sTUFBUDtBQUNELFNBTkQ7O0FBUUEsWUFBSUEsU0FBVVAsVUFBVSxJQUF4Qjs7QUFFQSxZQUFJTyxNQUFKLEVBQVk7QUFDVixjQUFJQyxZQUFZQyxNQUFNVCxLQUFOLENBQWhCOztBQUVBLGNBQUlRLHFCQUFxQm5CLFNBQXpCLEVBQW9DLENBRW5DLENBRkQsTUFFTztBQUNMLGdCQUFJcUIsaUJBQWlCLEtBQUtqQixJQUExQixDQURLLENBQzJCOztBQUVoQ08sb0JBQVEsS0FBS0wsSUFBTCxDQUFVZ0IsU0FBVixDQUFvQlgsS0FBcEIsRUFBMkJVLGNBQTNCLENBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRURkLGNBQVFnQixhQUFSOztBQUVBLGFBQU9aLEtBQVA7QUFDRDs7OzZCQUVlYSxJLEVBQU1DLHFCLEVBQXVCQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVFLFVBQUl2QixPQUFPb0IsS0FBS0ksT0FBTCxFQUFYO0FBQUEsVUFDSXZCLFFBQVFtQixLQUFLSyxrQkFBTCxDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQ3ZELFlBQUlkLE9BQU9sQixLQUFLaUMsa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDTCxxQkFBeEMsRUFBK0RDLHFCQUEvRCxDQUFYOztBQUVBLGVBQU9WLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JVixPQUFPcUIsU0FBU0ssY0FBVCxDQUF3QjVCLElBQXhCLElBQWdDdUIsU0FBU3ZCLElBQVQsQ0FBaEMsR0FBaURILGVBTjVEO0FBQUEsVUFNNkU7QUFDekVnQyxtQkFBYSxJQUFJOUIsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBTzJCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQyxVQUFqQjs7QUFFQSxTQUFTaUIsS0FBVCxDQUFlZ0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi9ub2RlL2Vycm9yJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgVG9vRGVlcEVycm9yTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9lcnJvci90b29EZWVwJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHZhciB0b29EZWVwRXJyb3JOb2RlID0gbmV3IFRvb0RlZXBFcnJvck5vZGUoKTtcblxuICAgICAgbm9kZXMgPSBbdG9vRGVlcEVycm9yTm9kZV1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgbm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgIHZhciBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgICBpZiAoZmlyc3ROb2RlIGluc3RhbmNlb2YgRXJyb3JOb2RlKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgICAgbm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgPyBtYXBwaW5nc1tuYW1lXSA6IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19