'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = require('./configuration'),
    arrayUtilities = require('../utilities/array'),
    parserUtilities = require('../utilities/parser');

var first = arrayUtilities.first,
    tokensFromLines = parserUtilities.tokensFromLines;

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
    key: 'nodeFromLines',
    value: function nodeFromLines(lines, rule, setParentNodes) {
      var tokens = tokensFromLines(lines),
          node = this.parse(tokens, rule, setParentNodes);

      if (setParentNodes) {
        var parentNode = null; ///

        node.setParentNode(parentNode);
      }

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var setParentNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var node = null;

      if (rule === null) {
        var rulesLength = this.rules.length;

        if (rulesLength > 0) {
          var firstRule = first(this.rules);

          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var configuration = new Configuration(tokens, this.rules),
            noWhitespace = false,
            ///
        nodeOrNodes = rule.parse(configuration, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? first(nodeOrNodes) : nodeOrNodes;
        }
      }

      if (setParentNodes) {
        setChildNodesParentNode(node);
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

function setChildNodesParentNode(node) {
  var parentNode = node,
      ///
  childNodes = node.getChildNodes();

  childNodes.forEach(function (childNode) {
    childNode.setParentNode(parentNode);

    var node = childNode; ///

    setChildNodesParentNode(node);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJmaXJzdCIsInRva2Vuc0Zyb21MaW5lcyIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwic2V0UGFyZW50Tm9kZXMiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJwYXJlbnROb2RlIiwic2V0UGFyZW50Tm9kZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiQXJyYXkiLCJzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxpQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4Qjs7QUFJTSxJQUFFRyxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JGLGVBRHRCLENBQ0VFLGVBREY7O0lBR0FDLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7a0NBRWFDLEssRUFBT0MsSSxFQUFNQyxjLEVBQWdCO0FBQ3pDLFVBQU1DLFNBQVNOLGdCQUFnQkcsS0FBaEIsQ0FBZjtBQUFBLFVBQ01JLE9BQU8sS0FBS0MsS0FBTCxDQUFXRixNQUFYLEVBQW1CRixJQUFuQixFQUF5QkMsY0FBekIsQ0FEYjs7QUFHQSxVQUFJQSxjQUFKLEVBQW9CO0FBQ2xCLFlBQU1JLGFBQWEsSUFBbkIsQ0FEa0IsQ0FDUTs7QUFFMUJGLGFBQUtHLGFBQUwsQ0FBbUJELFVBQW5CO0FBQ0Q7O0FBRUQsYUFBT0YsSUFBUDtBQUNEOzs7MEJBRUtELE0sRUFBNkM7QUFBQSxVQUFyQ0YsSUFBcUMsdUVBQTlCLElBQThCO0FBQUEsVUFBeEJDLGNBQXdCLHVFQUFQLEtBQU87O0FBQ2pELFVBQUlFLE9BQU8sSUFBWDs7QUFFQSxVQUFJSCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTU8sY0FBYyxLQUFLVCxLQUFMLENBQVdVLE1BQS9COztBQUVBLFlBQUlELGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsY0FBTUUsWUFBWWQsTUFBTSxLQUFLRyxLQUFYLENBQWxCOztBQUVBRSxpQkFBT1MsU0FBUCxDQUhtQixDQUdEO0FBQ25CO0FBQ0Y7O0FBRUQsVUFBSVQsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1VLGdCQUFnQixJQUFJbkIsYUFBSixDQUFrQlcsTUFBbEIsRUFBMEIsS0FBS0osS0FBL0IsQ0FBdEI7QUFBQSxZQUNNYSxlQUFlLEtBRHJCO0FBQUEsWUFDNEI7QUFDdEJDLHNCQUFjWixLQUFLSSxLQUFMLENBQVdNLGFBQVgsRUFBMEJDLFlBQTFCLENBRnBCOztBQUlBLFlBQUlDLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QlQsaUJBQVFTLHVCQUF1QkMsS0FBeEIsR0FDRWxCLE1BQU1pQixXQUFOLENBREYsR0FFSUEsV0FGWDtBQUdEO0FBQ0Y7O0FBRUQsVUFBSVgsY0FBSixFQUFvQjtBQUNsQmEsZ0NBQXdCWCxJQUF4QjtBQUNEOztBQUVELGFBQU9BLElBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVksd0JBQXdCLEtBQUtqQixLQUFMLENBQVdrQixNQUFYLENBQWtCLFVBQVNELHFCQUFULEVBQWdDZixJQUFoQyxFQUFzQztBQUM5RSxZQUFNaUIsV0FBV2pCLEtBQUtrQixPQUFMLEVBQWpCO0FBQUEsWUFDTUMsaUJBQWlCRixTQUFTVCxNQURoQzs7QUFHQU8sZ0NBQXdCSyxLQUFLQyxHQUFMLENBQVNOLHFCQUFULEVBQWdDSSxjQUFoQyxDQUF4Qjs7QUFFQSxlQUFPSixxQkFBUDtBQUNELE9BUHVCLEVBT3JCLENBUHFCLENBQTlCO0FBQUEsVUFRTU8sY0FBYyxLQUFLeEIsS0FBTCxDQUFXa0IsTUFBWCxDQUFrQixVQUFTTSxXQUFULEVBQXNCdEIsSUFBdEIsRUFBNEI7QUFDMUQsWUFBTXVCLGFBQWF2QixLQUFLd0IsUUFBTCxDQUFjVCxxQkFBZCxDQUFuQjs7QUFFQU8sdUJBQWVDLFVBQWY7O0FBRUEsZUFBT0QsV0FBUDtBQUNELE9BTmEsRUFNWCxFQU5XLENBUnBCOztBQWdCQSxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCN0IsWUFBakI7O0FBRUEsU0FBU2lCLHVCQUFULENBQWlDWCxJQUFqQyxFQUF1QztBQUNyQyxNQUFNRSxhQUFhRixJQUFuQjtBQUFBLE1BQTBCO0FBQ3BCd0IsZUFBYXhCLEtBQUt5QixhQUFMLEVBRG5COztBQUdBRCxhQUFXRSxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckNBLGNBQVV4QixhQUFWLENBQXdCRCxVQUF4Qjs7QUFFQSxRQUFNRixPQUFPMkIsU0FBYixDQUhxQyxDQUdiOztBQUV4QmhCLDRCQUF3QlgsSUFBeEI7QUFDRCxHQU5EO0FBT0QiLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcGFyc2VyVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnNlcicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdG9rZW5zRnJvbUxpbmVzIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cbiAgXG4gIG5vZGVGcm9tTGluZXMobGluZXMsIHJ1bGUsIHNldFBhcmVudE5vZGVzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHJ1bGUsIHNldFBhcmVudE5vZGVzKTtcblxuICAgIGlmIChzZXRQYXJlbnROb2Rlcykge1xuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGw7ICAvLy9cblxuICAgICAgbm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gbnVsbCwgc2V0UGFyZW50Tm9kZXMgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlc0xlbmd0aCA9IHRoaXMucnVsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHRoaXMucnVsZXMpO1xuXG4gICAgICAgIHJ1bGUgPSBmaXJzdFJ1bGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24odG9rZW5zLCB0aGlzLnJ1bGVzKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNldFBhcmVudE5vZGVzKSB7XG4gICAgICBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJ1bGVzQXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG4gIFxuICAgICAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgICAgICB9LCAwKSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHJ1bGVzU3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIHNldENoaWxkTm9kZXNQYXJlbnROb2RlKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcblxuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUobm9kZSk7XG4gIH0pO1xufVxuIl19