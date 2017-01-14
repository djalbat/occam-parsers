'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    FatalErrorNode = require('./node/fatalError'),
    NonTerminalNode = require('./node/nonTerminal');

var TOO_DEEP_FATAL_ERROR_MESSAGE = 'The parse tree is too deep. This is likely caused by left recursion.';

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
        var tooDeepFatalErrorMessage = TOO_DEEP_FATAL_ERROR_MESSAGE,
            tooDeepFatalErrorNode = new FatalErrorNode(tooDeepFatalErrorMessage);

        nodes = [tooDeepFatalErrorNode];
      } else {
        this.rules.some(function (rule) {
          nodes = rule.parse(context, productions, noWhitespace);

          var parsed = nodes !== null;

          return parsed;
        });

        var parsed = nodes !== null;

        if (parsed) {
          var firstNode = first(nodes);

          if (firstNode instanceof FatalErrorNode) {} else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIkZhdGFsRXJyb3JOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiVE9PX0RFRVBfRkFUQUxfRVJST1JfTUVTU0FHRSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9XaGl0ZXNwYWNlIiwiaW5jcmVhc2VEZXB0aCIsIm5vZGVzIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsInRvb0RlZXBGYXRhbEVycm9yTWVzc2FnZSIsInRvb0RlZXBGYXRhbEVycm9yTm9kZSIsInNvbWUiLCJydWxlIiwicGFyc2UiLCJwYXJzZWQiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsImxpbmUiLCJ0ZXJtaW5hbFN5bWJvbHNSZWdFeHAiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsImhhc093blByb3BlcnR5IiwicHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsUUFBUixDQUFYO0FBQUEsSUFDSUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHJCO0FBQUEsSUFFSUUsa0JBQWtCRixRQUFRLG9CQUFSLENBRnRCOztBQUlBLElBQU1HLCtCQUErQixzRUFBckM7O0lBRU1DLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4Q0YsY0FBUUcsYUFBUjs7QUFFQSxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxVQUFVTCxRQUFRTSxTQUFSLEVBRGQ7O0FBR0EsVUFBSUQsT0FBSixFQUFhO0FBQ1gsWUFBSUUsMkJBQTJCWiw0QkFBL0I7QUFBQSxZQUNJYSx3QkFBd0IsSUFBSWYsY0FBSixDQUFtQmMsd0JBQW5CLENBRDVCOztBQUdBSCxnQkFBUSxDQUFDSSxxQkFBRCxDQUFSO0FBQ0QsT0FMRCxNQUtPO0FBQ0wsYUFBS1YsS0FBTCxDQUFXVyxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3Qk4sa0JBQVFNLEtBQUtDLEtBQUwsQ0FBV1gsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQVI7O0FBRUEsY0FBSVUsU0FBVVIsVUFBVSxJQUF4Qjs7QUFFQSxpQkFBT1EsTUFBUDtBQUNELFNBTkQ7O0FBUUEsWUFBSUEsU0FBVVIsVUFBVSxJQUF4Qjs7QUFFQSxZQUFJUSxNQUFKLEVBQVk7QUFDVixjQUFJQyxZQUFZQyxNQUFNVixLQUFOLENBQWhCOztBQUVBLGNBQUlTLHFCQUFxQnBCLGNBQXpCLEVBQXlDLENBRXhDLENBRkQsTUFFTztBQUNMLGdCQUFJc0IsaUJBQWlCLEtBQUtsQixJQUExQixDQURLLENBQzJCOztBQUVoQ08sb0JBQVEsS0FBS0wsSUFBTCxDQUFVaUIsU0FBVixDQUFvQlosS0FBcEIsRUFBMkJXLGNBQTNCLENBQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRURmLGNBQVFpQixhQUFSOztBQUVBLGFBQU9iLEtBQVA7QUFDRDs7OzZCQUVlYyxJLEVBQU1DLHFCLEVBQXVCQyxxQixFQUF1QkMsUSxFQUFVO0FBQzVFLFVBQUl4QixPQUFPcUIsS0FBS0ksT0FBTCxFQUFYO0FBQUEsVUFDSXhCLFFBQVFvQixLQUFLSyxrQkFBTCxDQUF3QixVQUFTQyxjQUFULEVBQXlCO0FBQ3ZELFlBQUlkLE9BQU9uQixLQUFLa0Msa0JBQUwsQ0FBd0JELGNBQXhCLEVBQXdDTCxxQkFBeEMsRUFBK0RDLHFCQUEvRCxDQUFYOztBQUVBLGVBQU9WLElBQVA7QUFDRCxPQUpPLENBRFo7QUFBQSxVQU1JWCxPQUFPc0IsU0FBU0ssY0FBVCxDQUF3QjdCLElBQXhCLElBQWdDd0IsU0FBU3hCLElBQVQsQ0FBaEMsR0FBaURILGVBTjVEO0FBQUEsVUFNNkU7QUFDekVpQyxtQkFBYSxJQUFJL0IsVUFBSixDQUFlQyxJQUFmLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUIsQ0FQakI7O0FBU0EsYUFBTzRCLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJqQyxVQUFqQjs7QUFFQSxTQUFTa0IsS0FBVCxDQUFlZ0IsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgRmF0YWxFcnJvck5vZGUgPSByZXF1aXJlKCcuL25vZGUvZmF0YWxFcnJvcicpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCBUT09fREVFUF9GQVRBTF9FUlJPUl9NRVNTQUdFID0gJ1RoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwLiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgbGVmdCByZWN1cnNpb24uJztcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdmFyIHRvb0RlZXBGYXRhbEVycm9yTWVzc2FnZSA9IFRPT19ERUVQX0ZBVEFMX0VSUk9SX01FU1NBR0UsXG4gICAgICAgICAgdG9vRGVlcEZhdGFsRXJyb3JOb2RlID0gbmV3IEZhdGFsRXJyb3JOb2RlKHRvb0RlZXBGYXRhbEVycm9yTWVzc2FnZSk7XG5cbiAgICAgIG5vZGVzID0gW3Rvb0RlZXBGYXRhbEVycm9yTm9kZV1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgbm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgIHZhciBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdmFyIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgICAgICBpZiAoZmlyc3ROb2RlIGluc3RhbmNlb2YgRmF0YWxFcnJvck5vZGUpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgICBub2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIHZhciBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSksXG4gICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IG1hcHBpbmdzW25hbWVdIDogTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=