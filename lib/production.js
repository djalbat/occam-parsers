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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJydWxlcyIsIk5vZGUiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzIiwibGluZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7QUFBQSxJQUNJQyxZQUFZRCxRQUFRLGNBQVIsQ0FEaEI7QUFBQSxJQUVJRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FGdEI7O0lBSU1HLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLElBQVo7O0FBRUEsV0FBS0wsS0FBTCxDQUFXTSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QkYsZ0JBQVFFLEtBQUtDLEtBQUwsQ0FBV04sT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQVI7O0FBRUEsWUFBSUssU0FBVUosVUFBVSxJQUF4Qjs7QUFFQSxlQUFPSSxNQUFQO0FBQ0QsT0FORDs7QUFRQSxVQUFJQSxTQUFVSixVQUFVLElBQXhCOztBQUVBLFVBQUlJLE1BQUosRUFBWTtBQUNWLFlBQUlDLFlBQVlDLE1BQU1OLEtBQU4sQ0FBaEI7O0FBRUEsWUFBSUsscUJBQXFCZCxTQUF6QixFQUFvQyxDQUVuQyxDQUZELE1BRU87QUFDTCxjQUFJZ0IsaUJBQWlCLEtBQUtiLElBQTFCLENBREssQ0FDMkI7O0FBRWhDTSxrQkFBUSxLQUFLSixJQUFMLENBQVVZLFNBQVYsQ0FBb0JSLEtBQXBCLEVBQTJCTyxjQUEzQixDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUCxLQUFQO0FBQ0Q7Ozs2QkFFZVMsSSxFQUFNQyxxQixFQUF1QkMscUIsRUFBdUJDLFEsRUFBVTtBQUM1RSxVQUFJbEIsT0FBT2UsS0FBS0ksT0FBTCxFQUFYO0FBQUEsVUFDSWxCLFFBQVFjLEtBQUtLLGtCQUFMLENBQXdCLFVBQVNDLGNBQVQsRUFBeUI7QUFDdkQsWUFBSWIsT0FBT2IsS0FBSzJCLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0wscUJBQXhDLEVBQStEQyxxQkFBL0QsQ0FBWDs7QUFFQSxlQUFPVCxJQUFQO0FBQ0QsT0FKTyxDQURaO0FBQUEsVUFNSU4sT0FBT2dCLFNBQVNLLGNBQVQsQ0FBd0J2QixJQUF4QixJQUFnQ2tCLFNBQVNsQixJQUFULENBQWhDLEdBQWlERixlQU41RDtBQUFBLFVBTTZFO0FBQ3pFMEIsbUJBQWEsSUFBSXpCLFVBQUosQ0FBZUMsSUFBZixFQUFxQkMsS0FBckIsRUFBNEJDLElBQTVCLENBUGpCOztBQVNBLGFBQU9zQixVQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsVUFBakI7O0FBRUEsU0FBU2EsS0FBVCxDQUFlZSxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuL25vZGUvZXJyb3InKSxcbiAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBub2RlcyA9IG51bGw7XG5cbiAgICB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgbm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICB2YXIgcGFyc2VkID0gKG5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIHZhciBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgaWYgKGZpcnN0Tm9kZSBpbnN0YW5jZW9mIEVycm9yTm9kZSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIG5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pLFxuICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgPyBtYXBwaW5nc1tuYW1lXSA6IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19