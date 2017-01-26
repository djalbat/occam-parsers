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
          var productionName = this.name; ///

          nodes = this.Node.fromNodes(ruleNodes, productionName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiaW5jcmVhc2VEZXB0aCIsInJ1bGVOb2RlcyIsInJ1bGVQYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHRCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeEMsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMsVUFBVUosUUFBUUssU0FBUixFQURkOztBQUdBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1pKLGdCQUFRTSxhQUFSOztBQUVBLFlBQUlDLFlBQVksSUFBaEI7QUFBQSxZQUNJQyxhQUFhLEtBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDMUNILHNCQUFZRyxLQUFLQyxLQUFMLENBQVdYLE9BQVgsRUFBb0JDLFdBQXBCLEVBQWlDQyxZQUFqQyxDQUFaOztBQUVBLGNBQUlNLGFBQWNELGNBQWMsSUFBaEM7O0FBRUEsaUJBQU9DLFVBQVA7QUFDRCxTQU5ZLENBRGpCOztBQVNBLFlBQUlBLFVBQUosRUFBZ0I7QUFDZCxjQUFJSSxpQkFBaUIsS0FBS2YsSUFBMUIsQ0FEYyxDQUNrQjs7QUFFaENNLGtCQUFRLEtBQUtKLElBQUwsQ0FBVWMsU0FBVixDQUFvQk4sU0FBcEIsRUFBK0JLLGNBQS9CLENBQVI7QUFDRDs7QUFFRFIsa0JBQVVKLFFBQVFLLFNBQVIsRUFBVjs7QUFFQSxZQUFJLENBQUNELE9BQUwsRUFBYztBQUNaSixrQkFBUWMsYUFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1gsS0FBUDtBQUNEOzs7NkJBRWVZLEksRUFBTUMscUIsRUFBdUJDLFEsRUFBVTtBQUNyRCxVQUFJcEIsT0FBT2tCLEtBQUtHLE9BQUwsRUFBWDtBQUFBLFVBQ0lwQixRQUFRaUIsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFJVixPQUFPakIsS0FBSzRCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQVg7O0FBRUEsZUFBT04sSUFBUDtBQUNELE9BSk8sQ0FEWjtBQUFBLFVBTUlYLE9BQU9rQixTQUFTSyxjQUFULENBQXdCekIsSUFBeEIsSUFBZ0NvQixTQUFTcEIsSUFBVCxDQUFoQyxHQUFpREYsZUFONUQ7QUFBQSxVQU02RTtBQUN6RTRCLG1CQUFhLElBQUkzQixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVBqQjs7QUFTQSxhQUFPd0IsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjdCLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKCF0b29EZWVwKSB7XG4gICAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgICAgdmFyIHJ1bGVOb2RlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgICB2YXIgcnVsZVBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHJ1bGVQYXJzZWQpIHtcbiAgICAgICAgdmFyIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lOyAvLy9cblxuICAgICAgICBub2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXMocnVsZU5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgICBpZiAoIXRvb0RlZXApIHtcbiAgICAgICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID8gbWFwcGluZ3NbbmFtZV0gOiBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19