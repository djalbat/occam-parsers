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
  var nodeTerminalNode = node.isTerminalNode(),
      nodeNonTerminalNode = !nodeTerminalNode;

  if (nodeNonTerminalNode) {
    var nonTerminalNode = node,
        ///
    parentNode = nonTerminalNode,
        childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach(function (childNode) {
      childNode.setParentNode(parentNode);

      var node = childNode; ///

      setChildNodesParentNode(node);
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJmaXJzdCIsInRva2Vuc0Zyb21MaW5lcyIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwic2V0UGFyZW50Tm9kZXMiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJwYXJlbnROb2RlIiwic2V0UGFyZW50Tm9kZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiQXJyYXkiLCJzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0FBSU0sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixlQUR0QixDQUNFRSxlQURGOztJQUdBQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0Es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cEIsOEJBQXdCWCxJQUF4QjtBQUNELEtBTkQ7QUFPRDtBQUNGIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXInKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRva2Vuc0Zyb21MaW5lcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlLCBzZXRQYXJlbnROb2Rlcykge1xuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBydWxlLCBzZXRQYXJlbnROb2Rlcyk7XG5cbiAgICBpZiAoc2V0UGFyZW50Tm9kZXMpIHtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsOyAgLy8vXG5cbiAgICAgIG5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwsIHNldFBhcmVudE5vZGVzID0gZmFsc2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHRva2VucywgdGhpcy5ydWxlcyksXG4gICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZXRQYXJlbnROb2Rlcykge1xuICAgICAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBydWxlc0FzU3RyaW5nKCkge1xuICAgIGNvbnN0IG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoO1xuICBcbiAgICAgICAgICAgIG1heGltdW1SdWxlTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1SdWxlTmFtZUxlbmd0aCwgcnVsZU5hbWVMZW5ndGgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBtYXhpbXVtUnVsZU5hbWVMZW5ndGg7XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUuYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBydWxlc1N0cmluZyArPSBydWxlU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCAnJyk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzU3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShub2RlKSB7XG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSAhbm9kZVRlcm1pbmFsTm9kZTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcblxuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIHNldENoaWxkTm9kZXNQYXJlbnROb2RlKG5vZGUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=