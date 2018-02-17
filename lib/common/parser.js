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
    key: 'nodeFromTokens',
    value: function nodeFromTokens(tokens, rule) {
      var parentNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var node = this.parse(tokens, rule);

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
    value: function parse(tokens) {
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
        var configuration = new Configuration(tokens, this.rules),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwidG9rZW5zIiwicnVsZSIsInBhcmVudE5vZGVzIiwibm9kZSIsInBhcnNlIiwicGFyZW50Tm9kZSIsInNldFBhcmVudE5vZGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UnVsZSIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5Iiwic2V0UGFyZW50Tm9kZXMiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJyZWR1Y2UiLCJydWxlTmFtZSIsImdldE5hbWUiLCJydWxlTmFtZUxlbmd0aCIsIk1hdGgiLCJtYXgiLCJydWxlc1N0cmluZyIsInJ1bGVTdHJpbmciLCJhc1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmb3JFYWNoIiwiY2hpbGROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGlCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCOztJQUdRRSxLLEdBQVVELGMsQ0FBVkMsSzs7SUFFRkMsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzttQ0FFY0MsTSxFQUFRQyxJLEVBQTJCO0FBQUEsVUFBckJDLFdBQXFCLHVFQUFQLEtBQU87O0FBQ2hELFVBQU1DLE9BQU8sS0FBS0MsS0FBTCxDQUFXSixNQUFYLEVBQW1CQyxJQUFuQixDQUFiOztBQUVBLFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFJQyxTQUFTLElBQWIsRUFBbUI7QUFDakIsY0FBTUUsYUFBYSxJQUFuQixDQURpQixDQUNTOztBQUUxQkYsZUFBS0csYUFBTCxDQUFtQkQsVUFBbkI7QUFDRDtBQUNGOztBQUVELGFBQU9GLElBQVA7QUFDRDs7OzBCQUVLSCxNLEVBQTBDO0FBQUEsVUFBbENDLElBQWtDLHVFQUEzQixJQUEyQjtBQUFBLFVBQXJCQyxXQUFxQix1RUFBUCxLQUFPOztBQUM5QyxVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBSUYsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1NLGNBQWMsS0FBS1IsS0FBTCxDQUFXUyxNQUEvQjs7QUFFQSxZQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQU1FLFlBQVlaLE1BQU0sS0FBS0UsS0FBWCxDQUFsQjs7QUFFQUUsaUJBQU9RLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlSLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNUyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JNLE1BQWxCLEVBQTBCLEtBQUtELEtBQS9CLENBQXRCO0FBQUEsWUFDTVksZUFBZSxLQURyQjtBQUFBLFlBQzRCO0FBQ3RCQyxzQkFBY1gsS0FBS0csS0FBTCxDQUFXTSxhQUFYLEVBQTBCQyxZQUExQixDQUZwQjs7QUFJQSxZQUFJQyxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEJULGlCQUFRUyx1QkFBdUJDLEtBQXhCLEdBQ0VoQixNQUFNZSxXQUFOLENBREYsR0FFSUEsV0FGWDtBQUdEO0FBQ0Y7O0FBRUQsVUFBSVYsV0FBSixFQUFpQjtBQUNmLFlBQUlDLFNBQVMsSUFBYixFQUFtQjtBQUNqQlcseUJBQWVYLElBQWY7QUFDRDtBQUNGOztBQUVELGFBQU9BLElBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVksd0JBQXdCLEtBQUtoQixLQUFMLENBQVdpQixNQUFYLENBQWtCLFVBQVNELHFCQUFULEVBQWdDZCxJQUFoQyxFQUFzQztBQUM5RSxZQUFNZ0IsV0FBV2hCLEtBQUtpQixPQUFMLEVBQWpCO0FBQUEsWUFDTUMsaUJBQWlCRixTQUFTVCxNQURoQzs7QUFHQU8sZ0NBQXdCSyxLQUFLQyxHQUFMLENBQVNOLHFCQUFULEVBQWdDSSxjQUFoQyxDQUF4Qjs7QUFFQSxlQUFPSixxQkFBUDtBQUNELE9BUHVCLEVBT3JCLENBUHFCLENBQTlCO0FBQUEsVUFRTU8sY0FBYyxLQUFLdkIsS0FBTCxDQUFXaUIsTUFBWCxDQUFrQixVQUFTTSxXQUFULEVBQXNCckIsSUFBdEIsRUFBNEI7QUFDMUQsWUFBTXNCLGFBQWF0QixLQUFLdUIsUUFBTCxDQUFjVCxxQkFBZCxDQUFuQjs7QUFFQU8sdUJBQWVDLFVBQWY7O0FBRUEsZUFBT0QsV0FBUDtBQUNELE9BTmEsRUFNWCxFQU5XLENBUnBCOztBQWdCQSxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCNUIsWUFBakI7O0FBRUEsU0FBU2dCLGNBQVQsQ0FBd0JYLElBQXhCLEVBQThCO0FBQzVCLE1BQU13QixtQkFBbUJ4QixLQUFLeUIsY0FBTCxFQUF6QjtBQUFBLE1BQ01DLHNCQUFzQixDQUFDRixnQkFEN0I7O0FBR0EsTUFBSUUsbUJBQUosRUFBeUI7QUFDdkIsUUFBTUMsa0JBQWtCM0IsSUFBeEI7QUFBQSxRQUE4QjtBQUN4QkUsaUJBQWF5QixlQURuQjtBQUFBLFFBQ29DO0FBQzlCQyxpQkFBYUQsZ0JBQWdCRSxhQUFoQixFQUZuQjs7QUFJQUQsZUFBV0UsT0FBWCxDQUFtQixVQUFTQyxTQUFULEVBQW9CO0FBQ3JDQSxnQkFBVTVCLGFBQVYsQ0FBd0JELFVBQXhCOztBQUVBLFVBQU1GLE9BQU8rQixTQUFiLENBSHFDLENBR2I7O0FBRXhCcEIscUJBQWVYLElBQWY7QUFDRCxLQU5EO0FBT0Q7QUFDRiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbVRva2Vucyh0b2tlbnMsIHJ1bGUsIHBhcmVudE5vZGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKHBhcmVudE5vZGVzKSB7XG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbDsgIC8vL1xuXG4gICAgICAgIG5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwsIHBhcmVudE5vZGVzID0gZmFsc2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHRva2VucywgdGhpcy5ydWxlcyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2Rlcykge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgc2V0UGFyZW50Tm9kZXMobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBydWxlc0FzU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCAnJyk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBzZXRQYXJlbnROb2Rlcyhub2RlKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBzZXRQYXJlbnROb2Rlcyhub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19