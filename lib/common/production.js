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
    value: function parse(context) {
      var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var nodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null,
          ruleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (ruleParsed) {
        var ruleNodesLength = ruleNodes.length,
            productionName = this.name; ///

        if (ruleNodesLength > 0) {
          nodes = this.Node.fromNodesAndProductionName(ruleNodes, productionName);
        }
      }

      context.decreaseDepth();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInJ1bGVOb2RlcyIsInJ1bGVQYXJzZWQiLCJzb21lIiwicnVsZSIsInBhcnNlIiwicnVsZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJsaW5lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzIiwibWFwcGluZ3MiLCJnZXROYW1lIiwibWFwU3ltYm9sU2VxdWVuY2VzIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tU3ltYm9sU2VxdWVuY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEdEI7O0lBR01FLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUErQjtBQUFBLFVBQXRCQyxZQUFzQix1RUFBUCxLQUFPOztBQUNuQyxVQUFJQyxRQUFRLElBQVo7O0FBRUFGLGNBQVFHLGFBQVI7O0FBRUEsVUFBSUMsVUFBVUosUUFBUUssU0FBUixFQUFkOztBQUVBLFVBQUlELE9BQUosRUFBYTtBQUNYLGNBQU0sSUFBSUUsS0FBSixpREFBdUQsS0FBS1QsSUFBNUQsUUFBTjtBQUNEOztBQUVELFVBQUlVLFlBQVksSUFBaEI7QUFBQSxVQUNJQyxhQUFhLEtBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDMUNILG9CQUFZRyxLQUFLQyxLQUFMLENBQVdYLE9BQVgsRUFBb0JDLFlBQXBCLENBQVo7O0FBRUEsWUFBSU8sYUFBY0QsY0FBYyxJQUFoQzs7QUFFQSxlQUFPQyxVQUFQO0FBQ0QsT0FOWSxDQURqQjs7QUFTQSxVQUFJQSxVQUFKLEVBQWdCO0FBQ2QsWUFBSUksa0JBQWtCTCxVQUFVTSxNQUFoQztBQUFBLFlBQ0lDLGlCQUFpQixLQUFLakIsSUFEMUIsQ0FEYyxDQUVrQjs7QUFFaEMsWUFBSWUsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCVixrQkFBUSxLQUFLSCxJQUFMLENBQVVnQiwwQkFBVixDQUFxQ1IsU0FBckMsRUFBZ0RPLGNBQWhELENBQVI7QUFDRDtBQUNGOztBQUVEZCxjQUFRZ0IsYUFBUjs7QUFFQSxhQUFPZCxLQUFQO0FBQ0Q7Ozs2QkFFZWUsSSxFQUFNQyxxQixFQUF1QkMsUSxFQUFVO0FBQ3JELFVBQUl0QixPQUFPb0IsS0FBS0csT0FBTCxFQUFYO0FBQUEsVUFDSXRCLFFBQVFtQixLQUFLSSxrQkFBTCxDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQ3ZELFlBQUlaLE9BQU9qQixLQUFLOEIsa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDSixxQkFBeEMsQ0FBWDs7QUFFQSxlQUFPUixJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSVgsT0FBT29CLFNBQVNLLGNBQVQsQ0FBd0IzQixJQUF4QixJQUFnQ3NCLFNBQVN0QixJQUFULENBQWhDLEdBQWlERixlQU41RDtBQUFBLFVBTTZFO0FBQ3pFOEIsbUJBQWEsSUFBSTdCLFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBUGpCOztBQVNBLGFBQU8wQixVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCL0IsVUFBakIiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHZhciBub2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIHZhciB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZU5vZGVzID0gbnVsbCxcbiAgICAgICAgcnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgICAgdmFyIHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgIHJldHVybiBydWxlUGFyc2VkO1xuICAgICAgICB9KTtcblxuICAgIGlmIChydWxlUGFyc2VkKSB7XG4gICAgICB2YXIgcnVsZU5vZGVzTGVuZ3RoID0gcnVsZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgIGlmIChydWxlTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIG5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKHJ1bGVOb2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcblxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KSxcbiAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID8gbWFwcGluZ3NbbmFtZV0gOiBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19