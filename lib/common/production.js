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
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null;

      var someRuleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (someRuleParsed) {
        var ruleNodesLength = ruleNodes.length;

        if (ruleNodesLength > 0) {
          var nodes = ruleNodes,
              ///
          productionName = this.name; ///

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwicnVsZXMiLCJOb2RlIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInJ1bGVOb2RlcyIsInNvbWVSdWxlUGFyc2VkIiwic29tZSIsInJ1bGUiLCJwYXJzZSIsInJ1bGVQYXJzZWQiLCJydWxlTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLDRCQUFSLENBRHhCOztJQUdNRSxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUM3QixTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7MEJBRUtHLE8sRUFBU0MsWSxFQUFjO0FBQzNCLFVBQUlDLGNBQWMsSUFBbEI7O0FBRUFGLGNBQVFHLGFBQVI7O0FBRUEsVUFBTUMsVUFBVUosUUFBUUssU0FBUixFQUFoQjs7QUFFQSxVQUFJRCxPQUFKLEVBQWE7QUFDWCxjQUFNLElBQUlFLEtBQUosaURBQXVELEtBQUtULElBQTVELFFBQU47QUFDRDs7QUFFRCxVQUFJVSxZQUFZLElBQWhCOztBQUVBLFVBQU1DLGlCQUFpQixLQUFLVixLQUFMLENBQVdXLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzlDSCxvQkFBWUcsS0FBS0MsS0FBTCxDQUFXWCxPQUFYLEVBQW9CQyxZQUFwQixDQUFaOztBQUVBLFlBQU1XLGFBQWNMLGNBQWMsSUFBbEM7O0FBRUEsZUFBT0ssVUFBUDtBQUNELE9BTmdCLENBQXZCOztBQVFBLFVBQUlKLGNBQUosRUFBb0I7QUFDbEIsWUFBTUssa0JBQWtCTixVQUFVTyxNQUFsQzs7QUFFQSxZQUFJRCxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsY0FBTUUsUUFBUVIsU0FBZDtBQUFBLGNBQTBCO0FBQ3BCUywyQkFBaUIsS0FBS25CLElBRDVCLENBRHVCLENBRVc7O0FBRWxDSyx3QkFBYyxLQUFLSCxJQUFMLENBQVVrQiwwQkFBVixDQUFxQ0YsS0FBckMsRUFBNENDLGNBQTVDLENBQWQsQ0FKdUIsQ0FJcUQ7QUFDN0U7QUFDRjs7QUFFRGhCLGNBQVFrQixhQUFSOztBQUVBLGFBQU9oQixXQUFQO0FBQ0Q7Ozs2QkFFZWlCLEksRUFBTUMscUIsRUFBdUJDLFEsRUFBVTtBQUNyRCxVQUFNeEIsT0FBT3NCLEtBQUtHLE9BQUwsRUFBYjtBQUFBLFVBQ014QixRQUFRcUIsS0FBS0ksa0JBQUwsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN2RCxZQUFNZCxPQUFPakIsS0FBS2dDLGtCQUFMLENBQXdCRCxjQUF4QixFQUF3Q0oscUJBQXhDLENBQWI7O0FBRUEsZUFBT1YsSUFBUDtBQUNELE9BSk8sQ0FEZDtBQUFBLFVBTU1YLE9BQU9zQixTQUFTSyxjQUFULENBQXdCN0IsSUFBeEIsSUFDRXdCLFNBQVN4QixJQUFULENBREYsR0FFSUYsZUFSakI7QUFBQSxVQVFrQztBQUM1QmdDLG1CQUFhLElBQUkvQixVQUFKLENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCQyxJQUE1QixDQVRuQjs7QUFXQSxhQUFPNEIsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmpDLFVBQWpCIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgcnVsZU5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lUnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVSdWxlUGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTm9kZXNMZW5ndGggPSBydWxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IHJ1bGVOb2RlcywgIC8vL1xuICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIl19