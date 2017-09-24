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
    value: function nodeFromLines(lines, rule) {
      var tokens = tokensFromLines(lines),
          node = this.parse(tokens, rule);

      setChildNodesParentNode(node);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJmaXJzdCIsInRva2Vuc0Zyb21MaW5lcyIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwidG9rZW5zIiwibm9kZSIsInBhcnNlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UnVsZSIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsIkFycmF5IiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwicmVkdWNlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicnVsZU5hbWVMZW5ndGgiLCJNYXRoIiwibWF4IiwicnVsZXNTdHJpbmciLCJydWxlU3RyaW5nIiwiYXNTdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInNldFBhcmVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0FBSU0sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixlQUR0QixDQUNFRSxlQURGOztJQUdBQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLEksRUFBTTtBQUN6QixVQUFNQyxTQUFTTCxnQkFBZ0JHLEtBQWhCLENBQWY7QUFBQSxVQUNNRyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0YsTUFBWCxFQUFtQkQsSUFBbkIsQ0FEYjs7QUFHQUksOEJBQXdCRixJQUF4Qjs7QUFFQSxhQUFPQSxJQUFQO0FBQ0Q7OzswQkFFS0QsTSxFQUFxQjtBQUFBLFVBQWJELElBQWEsdUVBQU4sSUFBTTs7QUFDekIsVUFBSUUsT0FBTyxJQUFYOztBQUVBLFVBQUlGLFNBQVMsSUFBYixFQUFtQjtBQUNqQixZQUFNSyxjQUFjLEtBQUtQLEtBQUwsQ0FBV1EsTUFBL0I7O0FBRUEsWUFBSUQsY0FBYyxDQUFsQixFQUFxQjtBQUNuQixjQUFNRSxZQUFZWixNQUFNLEtBQUtHLEtBQVgsQ0FBbEI7O0FBRUFFLGlCQUFPTyxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjs7QUFFRCxVQUFJUCxTQUFTLElBQWIsRUFBbUI7QUFDakIsWUFBTVEsZ0JBQWdCLElBQUlqQixhQUFKLENBQWtCVSxNQUFsQixFQUEwQixLQUFLSCxLQUEvQixDQUF0QjtBQUFBLFlBQ01XLGVBQWUsS0FEckI7QUFBQSxZQUM0QjtBQUN0QkMsc0JBQWNWLEtBQUtHLEtBQUwsQ0FBV0ssYUFBWCxFQUEwQkMsWUFBMUIsQ0FGcEI7O0FBSUEsWUFBSUMsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCUixpQkFBUVEsdUJBQXVCQyxLQUF4QixHQUNFaEIsTUFBTWUsV0FBTixDQURGLEdBRUlBLFdBRlg7QUFHRDtBQUNGOztBQUVELGFBQU9SLElBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVUsd0JBQXdCLEtBQUtkLEtBQUwsQ0FBV2UsTUFBWCxDQUFrQixVQUFTRCxxQkFBVCxFQUFnQ1osSUFBaEMsRUFBc0M7QUFDOUUsWUFBTWMsV0FBV2QsS0FBS2UsT0FBTCxFQUFqQjtBQUFBLFlBQ01DLGlCQUFpQkYsU0FBU1IsTUFEaEM7O0FBR0FNLGdDQUF3QkssS0FBS0MsR0FBTCxDQUFTTixxQkFBVCxFQUFnQ0ksY0FBaEMsQ0FBeEI7O0FBRUEsZUFBT0oscUJBQVA7QUFDRCxPQVB1QixFQU9yQixDQVBxQixDQUE5QjtBQUFBLFVBUU1PLGNBQWMsS0FBS3JCLEtBQUwsQ0FBV2UsTUFBWCxDQUFrQixVQUFTTSxXQUFULEVBQXNCbkIsSUFBdEIsRUFBNEI7QUFDMUQsWUFBTW9CLGFBQWFwQixLQUFLcUIsUUFBTCxDQUFjVCxxQkFBZCxDQUFuQjs7QUFFQU8sdUJBQWVDLFVBQWY7O0FBRUEsZUFBT0QsV0FBUDtBQUNELE9BTmEsRUFNWCxFQU5XLENBUnBCOztBQWdCQSxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCMUIsWUFBakI7O0FBRUEsU0FBU08sdUJBQVQsQ0FBaUNGLElBQWpDLEVBQXVDO0FBQ3JDLE1BQU1zQixhQUFhdEIsSUFBbkI7QUFBQSxNQUEwQjtBQUNwQnVCLGVBQWF2QixLQUFLd0IsYUFBTCxFQURuQjs7QUFHQUQsYUFBV0UsT0FBWCxDQUFtQixVQUFTQyxTQUFULEVBQW9CO0FBQ3JDQSxjQUFVQyxhQUFWLENBQXdCTCxVQUF4Qjs7QUFFQSxRQUFNdEIsT0FBTzBCLFNBQWIsQ0FIcUMsQ0FHYjs7QUFFeEJ4Qiw0QkFBd0JGLElBQXhCO0FBQ0QsR0FORDtBQU9EIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXInKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRva2Vuc0Zyb21MaW5lcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUobm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih0b2tlbnMsIHRoaXMucnVsZXMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJ1bGVzQXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGg7XG4gIFxuICAgICAgICAgICAgbWF4aW11bVJ1bGVOYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBydWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1heGltdW1SdWxlTmFtZUxlbmd0aDtcbiAgICAgICAgICB9LCAwKSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHJ1bGVzU3RyaW5nLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlU3RyaW5nID0gcnVsZS5hc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nICs9IHJ1bGVTdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIHNldENoaWxkTm9kZXNQYXJlbnROb2RlKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcblxuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUobm9kZSk7XG4gIH0pO1xufVxuIl19