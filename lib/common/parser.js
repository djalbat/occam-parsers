'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = require('./configuration'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first;

var CommonParser = function () {
  function CommonParser(rules) {
    _classCallCheck(this, CommonParser);

    this.rules = rules;
  }

  _createClass(CommonParser, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'nodeFromSignificantTokens',
    value: function nodeFromSignificantTokens(significantTokens, rule) {
      var parentNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var node = this.parse(significantTokens, rule);

      if (parentNodes) {
        if (node !== null) {
          var parentNode = null; ///

          node.setParentNode(parentNode);
        }
      }

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(significantTokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var parentNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var node = null;

      if (rule === null) {
        var rulesLength = this.rules.length;

        if (rulesLength > 0) {
          var firstRule = first(this.rules);

          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var configuration = Configuration.fromSignificantTokensAndRules(significantTokens, this.rules),
            noWhitespace = false,
            ///
        nodeOrNodes = rule.parse(configuration, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? first(nodeOrNodes) : nodeOrNodes;
        }
      }

      if (parentNodes) {
        if (node !== null) {
          setParentNodes(node);
        }
      }

      return node;
    }
  }, {
    key: 'rulesAsString',
    value: function rulesAsString() {
      var maximumRuleNameLength = this.rules.reduce(function (maximumRuleNameLength, rule) {
        var ruleName = rule.getName(),
            ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
          rulesString = this.rules.reduce(function (rulesString, rule) {
        var ruleString = rule.asString(maximumRuleNameLength);

        rulesString += ruleString;

        return rulesString;
      }, '');

      return rulesString;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function setParentNodes(node) {
  var nodeTerminalNode = node.isTerminalNode(),
      nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    var nonTerminalNode = node,
        ///
    parentNode = nonTerminalNode,
        ///
    childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach(function (childNode) {
      childNode.setParentNode(parentNode);

      var node = childNode; ///

      setParentNodes(node);
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJydWxlIiwicGFyZW50Tm9kZXMiLCJub2RlIiwicGFyc2UiLCJwYXJlbnROb2RlIiwic2V0UGFyZW50Tm9kZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsImZyb21TaWduaWZpY2FudFRva2Vuc0FuZFJ1bGVzIiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsInNldFBhcmVudE5vZGVzIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwicmVkdWNlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVMZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxpQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHUUUsSyxHQUFVRCxjLENBQVZDLEs7O0lBRUZDLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7OENBRXlCQyxpQixFQUFtQkMsSSxFQUEyQjtBQUFBLFVBQXJCQyxXQUFxQix1RUFBUCxLQUFPOztBQUN0RSxVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0osaUJBQVgsRUFBOEJDLElBQTlCLENBQWI7O0FBRUEsVUFBSUMsV0FBSixFQUFpQjtBQUNmLFlBQUlDLFNBQVMsSUFBYixFQUFtQjtBQUNqQixjQUFNRSxhQUFhLElBQW5CLENBRGlCLENBQ1M7O0FBRTFCRixlQUFLRyxhQUFMLENBQW1CRCxVQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0YsSUFBUDtBQUNEOzs7MEJBRUtILGlCLEVBQXFEO0FBQUEsVUFBbENDLElBQWtDLHVFQUEzQixJQUEyQjtBQUFBLFVBQXJCQyxXQUFxQix1RUFBUCxLQUFPOztBQUN6RCxVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBSUYsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1NLGNBQWMsS0FBS1IsS0FBTCxDQUFXUyxNQUEvQjs7QUFFQSxZQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQU1FLFlBQVlaLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQUUsaUJBQU9RLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlSLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNUyxnQkFBZ0JoQixjQUFjaUIsNkJBQWQsQ0FBNENYLGlCQUE1QyxFQUErRCxLQUFLRCxLQUFwRSxDQUF0QjtBQUFBLFlBQ01hLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNaLEtBQUtHLEtBQUwsQ0FBV00sYUFBWCxFQUEwQkUsWUFBMUIsQ0FGcEI7O0FBSUEsWUFBSUMsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCVixpQkFBUVUsdUJBQXVCQyxLQUF4QixHQUNFakIsTUFBTWdCLFdBQU4sQ0FERixHQUVJQSxXQUZYO0FBR0Q7QUFDRjs7QUFFRCxVQUFJWCxXQUFKLEVBQWlCO0FBQ2YsWUFBSUMsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCWSx5QkFBZVosSUFBZjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsSUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNYSx3QkFBd0IsS0FBS2pCLEtBQUwsQ0FBV2tCLE1BQVgsQ0FBa0IsVUFBU0QscUJBQVQsRUFBZ0NmLElBQWhDLEVBQXNDO0FBQzlFLFlBQU1pQixXQUFXakIsS0FBS2tCLE9BQUwsRUFBakI7QUFBQSxZQUNNQyxpQkFBaUJGLFNBQVNWLE1BRGhDOztBQUdBUSxnQ0FBd0JLLEtBQUtDLEdBQUwsQ0FBU04scUJBQVQsRUFBZ0NJLGNBQWhDLENBQXhCOztBQUVBLGVBQU9KLHFCQUFQO0FBQ0QsT0FQdUIsRUFPckIsQ0FQcUIsQ0FBOUI7QUFBQSxVQVFNTyxjQUFjLEtBQUt4QixLQUFMLENBQVdrQixNQUFYLENBQWtCLFVBQVNNLFdBQVQsRUFBc0J0QixJQUF0QixFQUE0QjtBQUMxRCxZQUFNdUIsYUFBYXZCLEtBQUt3QixRQUFMLENBQWNULHFCQUFkLENBQW5COztBQUVBTyx1QkFBZUMsVUFBZjs7QUFFQSxlQUFPRCxXQUFQO0FBQ0QsT0FOYSxFQU1YLEVBTlcsQ0FScEI7O0FBZ0JBLGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUI3QixZQUFqQjs7QUFFQSxTQUFTaUIsY0FBVCxDQUF3QlosSUFBeEIsRUFBOEI7QUFDNUIsTUFBTXlCLG1CQUFtQnpCLEtBQUswQixjQUFMLEVBQXpCO0FBQUEsTUFDTUMsc0JBQXNCLENBQUNGLGdCQUQ3Qjs7QUFHQSxNQUFJRSxtQkFBSixFQUF5QjtBQUN2QixRQUFNQyxrQkFBa0I1QixJQUF4QjtBQUFBLFFBQThCO0FBQ3hCRSxpQkFBYTBCLGVBRG5CO0FBQUEsUUFDb0M7QUFDOUJDLGlCQUFhRCxnQkFBZ0JFLGFBQWhCLEVBRm5COztBQUlBRCxlQUFXRSxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckNBLGdCQUFVN0IsYUFBVixDQUF3QkQsVUFBeEI7O0FBRUEsVUFBTUYsT0FBT2dDLFNBQWIsQ0FIcUMsQ0FHYjs7QUFFeEJwQixxQkFBZVosSUFBZjtBQUNELEtBTkQ7QUFPRDtBQUNGIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBub2RlRnJvbVNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zLCBydWxlLCBwYXJlbnROb2RlcyA9IGZhbHNlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2Uoc2lnbmlmaWNhbnRUb2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKHBhcmVudE5vZGVzKSB7XG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbDsgIC8vL1xuXG4gICAgICAgIG5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHNpZ25pZmljYW50VG9rZW5zLCBydWxlID0gbnVsbCwgcGFyZW50Tm9kZXMgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlc0xlbmd0aCA9IHRoaXMucnVsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHRoaXMucnVsZXMpO1xuXG4gICAgICAgIHJ1bGUgPSBmaXJzdFJ1bGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gQ29uZmlndXJhdGlvbi5mcm9tU2lnbmlmaWNhbnRUb2tlbnNBbmRSdWxlcyhzaWduaWZpY2FudFRva2VucywgdGhpcy5ydWxlcyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2Rlcykge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgc2V0UGFyZW50Tm9kZXMobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBydWxlc0FzU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCAnJyk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBzZXRQYXJlbnROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzZXRQYXJlbnROb2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19