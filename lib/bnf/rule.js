'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = function () {
  function Rule(name, definitions, NonTerminalNode) {
    _classCallCheck(this, Rule);

    this.name = name;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  _createClass(Rule, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getDefinitions',
    value: function getDefinitions() {
      return this.definitions;
    }
  }, {
    key: 'getNonTerminalNode',
    value: function getNonTerminalNode() {
      return this.NonTerminalNode;
    }
  }, {
    key: 'doDefinitionsExist',
    value: function doDefinitionsExist() {
      var definitionsLength = this.definitions.length,
          definitionsExist = definitionsLength > 0;

      return definitionsExist;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setDefinitions',
    value: function setDefinitions(definitions) {
      this.definitions = definitions;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      this.definitions = this.definitions.concat(definitions);
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var nonTerminalNode = null;

      configuration.increaseDepth();

      var tooDeep = configuration.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var definitionNodes = null;

      var someDefinitionParsed = this.definitions.some(function (definition) {
        definitionNodes = definition.parse(configuration, noWhitespace);

        if (definitionNodes !== null) {
          return true;
        }
      });

      if (someDefinitionParsed) {
        var ruleName = this.name,
            nodes = definitionNodes; ///

        nonTerminalNode = this.NonTerminalNode.fromNodesAndRuleName(nodes, ruleName);
      }

      configuration.decreaseDepth();

      return nonTerminalNode;
    }
  }, {
    key: 'asString',
    value: function asString(maximumRuleNameLength) {
      var maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.asString();

        definitionsString = definitionsString !== null ? definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString : definitionString;

        return definitionsString;
      }, null),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString + ' ;';

      return string;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(Class, rule) {
      if (rule === undefined) {
        rule = Class;
        Class = Rule;
      }

      var name = rule.getName(),
          definitions = rule.getDefinitions(),
          NonTerminalNode = rule.getNonTerminalNode();

      rule = new Class(name, definitions, NonTerminalNode);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0Iiwibm9kZSIsImNvbmNhdCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub25UZXJtaW5hbE5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwicnVsZU5hbWUiLCJub2RlcyIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwiZGVjcmVhc2VEZXB0aCIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVBQS9CLEVBQWdEO0FBQUE7O0FBQzlDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2Ys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UDs7QUFFQSxhQUFPa0MsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjNDLElBQWpCOztBQUVBLFNBQVMyQix3QkFBVCxDQUFrQ00sYUFBbEMsRUFBaUQ7QUFDL0MsTUFBSUMsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSVUsV0FBVyxDQUFwQixFQUF1QkEsV0FBV1gsYUFBbEMsRUFBaURXLFVBQWpELEVBQTZEO0FBQzNEVixlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuICBcbiAgZG9EZWZpbml0aW9uc0V4aXN0KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnNFeGlzdCA9IChkZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9uc0V4aXN0O1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgY29uZmlndXJhdGlvbi5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29uZmlndXJhdGlvbi5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXM7ICAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKTtcbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSAoZGVmaW5pdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmc7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30gO2A7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSB7XG4gIGxldCBwYWRkaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuXG4gIHJldHVybiBwYWRkaW5nO1xufVxuIl19