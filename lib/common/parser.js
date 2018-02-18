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
    value: function nodeFromTokens(significantTokens, rule) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJydWxlIiwicGFyZW50Tm9kZXMiLCJub2RlIiwicGFyc2UiLCJwYXJlbnROb2RlIiwic2V0UGFyZW50Tm9kZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsImZyb21TaWduaWZpY2FudFRva2Vuc0FuZFJ1bGVzIiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJBcnJheSIsInNldFBhcmVudE5vZGVzIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwicmVkdWNlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVMZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxpQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHUUUsSyxHQUFVRCxjLENBQVZDLEs7O0lBRUZDLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7bUNBRWNDLGlCLEVBQW1CQyxJLEVBQTJCO0FBQUEsVUFBckJDLFdBQXFCLHVF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Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi9jb25maWd1cmF0aW9uJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgbm9kZUZyb21Ub2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMsIHJ1bGUsIHBhcmVudE5vZGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZShzaWduaWZpY2FudFRva2VucywgcnVsZSk7XG5cbiAgICBpZiAocGFyZW50Tm9kZXMpIHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsOyAgLy8vXG5cbiAgICAgICAgbm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2Uoc2lnbmlmaWNhbnRUb2tlbnMsIHJ1bGUgPSBudWxsLCBwYXJlbnROb2RlcyA9IGZhbHNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBDb25maWd1cmF0aW9uLmZyb21TaWduaWZpY2FudFRva2Vuc0FuZFJ1bGVzKHNpZ25pZmljYW50VG9rZW5zLCB0aGlzLnJ1bGVzKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGZpcnN0KG5vZGVPck5vZGVzKSA6XG4gICAgICAgICAgICAgICAgICAgbm9kZU9yTm9kZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGVzKSB7XG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBzZXRQYXJlbnROb2Rlcyhub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJ1bGVzQXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG4gIFxuICAgICAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgICAgICB9LCAwKSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHJ1bGVzU3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIHNldFBhcmVudE5vZGVzKG5vZGUpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcblxuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHNldFBhcmVudE5vZGVzKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=