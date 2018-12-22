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
      var multiLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var definitionsLength = this.definitions.length;

      multiLine = multiLine && definitionsLength > 1; ///

      var maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.asString();

        if (definitionsString === null) {
          definitionsString = definitionString; ///
        } else {
          definitionsString = multiLine ? definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString : definitionsString + ' | ' + definitionString;
        }

        return definitionsString;
      }, null),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength);

      var semicolonString = multiLine ? '\n\n' + maximumPadding + '     ;' : ' ;',
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString + semicolonString;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0Iiwibm9kZSIsImNvbmNhdCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub25UZXJtaW5hbE5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwicnVsZU5hbWUiLCJub2RlcyIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwiZGVjcmVhc2VEZXB0aCIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVBQS9CLEVBQWdEO0FBQUE7O0FBQzlDLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8s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O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7NkJBRWVDLEssRUFBT0MsSSxFQUFNO0FBQzNCLFVBQUlBLFNBQVNDLFNBQWIsRUFBd0I7QUFDdEJELGVBQU9ELEtBQVA7QUFDQUEsZ0JBQVF0QyxJQUFSO0FBQ0Q7O0FBRUQsVUFBTUMsT0FBT3NDLEtBQUtFLE9BQUwsRUFBYjtBQUFBLFVBQ012QyxjQUFjcUMsS0FBS0csY0FBTCxFQURwQjtBQUFBLFVBRU12QyxrQkFBa0JvQyxLQUFLSSxrQkFBTCxFQUZ4Qjs7QUFJQUosYUFBTyxJQUFJRCxLQUFKLENBQVVyQyxJQUFWLEVBQWdCQyxXQUFoQixFQUE2QkMsZUFBN0IsQ0FBUDs7QUFFQSxhQUFPb0MsSUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjdDLElBQWpCOztBQUVBLFNBQVM0Qix3QkFBVCxDQUFrQ00sYUFBbEMsRUFBaUQ7QUFDL0MsTUFBSUMsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSVcsV0FBVyxDQUFwQixFQUF1QkEsV0FBV1osYUFBbEMsRUFBaURZLFVBQWpELEVBQTZEO0FBQzNEWCxlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0QiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuICBcbiAgZG9EZWZpbml0aW9uc0V4aXN0KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnNFeGlzdCA9IChkZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9uc0V4aXN0O1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgY29uZmlndXJhdGlvbi5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29uZmlndXJhdGlvbi5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXM7ICAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKTtcbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgOycsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cblxuICByZXR1cm4gcGFkZGluZztcbn1cbiJdfQ==