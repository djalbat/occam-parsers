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
      var parentNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var tokens = tokensFromLines(lines),
          node = this.parse(tokens, rule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJmaXJzdCIsInRva2Vuc0Zyb21MaW5lcyIsIkNvbW1vblBhcnNlciIsInJ1bGVzIiwibGluZXMiLCJydWxlIiwicGFyZW50Tm9kZXMiLCJ0b2tlbnMiLCJub2RlIiwicGFyc2UiLCJwYXJlbnROb2RlIiwic2V0UGFyZW50Tm9kZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiQXJyYXkiLCJzZXRQYXJlbnROb2RlcyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVOYW1lTGVuZ3RoIiwiTWF0aCIsIm1heCIsInJ1bGVzU3RyaW5nIiwicnVsZVN0cmluZyIsImFzU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0FBSU0sSUFBRUcsS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NCRixlQUR0QixDQUNFRSxlQURGOztJQUdBQyxZO0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxL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QkFBVTVCLGFBQVYsQ0FBd0JELFVBQXhCOztBQUVBLFVBQU1GLE9BQU8rQixTQUFiLENBSHFDLENBR2I7O0FBRXhCcEIscUJBQWVYLElBQWY7QUFDRCxLQU5EO0FBT0Q7QUFDRiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL2NvbmZpZ3VyYXRpb24nKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBwYXJzZXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b2tlbnNGcm9tTGluZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgbm9kZUZyb21MaW5lcyhsaW5lcywgcnVsZSwgcGFyZW50Tm9kZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChwYXJlbnROb2Rlcykge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGw7ICAvLy9cblxuICAgICAgICBub2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSBudWxsLCBwYXJlbnROb2RlcyA9IGZhbHNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih0b2tlbnMsIHRoaXMucnVsZXMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZXMpIHtcbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHNldFBhcmVudE5vZGVzKG5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcnVsZXNBc1N0cmluZygpIHtcbiAgICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aDtcbiAgXG4gICAgICAgICAgICBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBNYXRoLm1heChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoO1xuICAgICAgICAgIH0sIDApLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXNTdHJpbmcsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLmFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCk7XG4gIFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgKz0gcnVsZVN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICAgICAgfSwgJycpO1xuICAgIFxuICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gc2V0UGFyZW50Tm9kZXMobm9kZSkge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gIW5vZGVUZXJtaW5hbE5vZGU7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuXG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgc2V0UGFyZW50Tm9kZXMobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==