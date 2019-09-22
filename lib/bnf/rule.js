'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array'),
    stringUtilities = require('../utilities/string');

var push = arrayUtilities.push,
    paddingFromPaddingLength = stringUtilities.paddingFromPaddingLength;

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
    key: 'clearDefinitions',
    value: function clearDefinitions() {
      this.definitions = [];
    }
  }, {
    key: 'setNonTerminalNode',
    value: function setNonTerminalNode(NonTerminalNode) {
      this.NonTerminalNode = NonTerminalNode;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      push(this.definitions, definitions);
    }
  }, {
    key: 'addDefinition',
    value: function addDefinition(definition) {
      this.definitions.push(definition);
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var _this = this;

      var node = null;

      this.definitions.some(function (definition) {
        node = _this.parseDefinition(definition, configuration, noWhitespace);

        var parsed = node !== null;

        if (parsed) {
          return true;
        }
      });

      return node;
    }
  }, {
    key: 'parseWithLookAhead',
    value: function parseWithLookAhead(configuration, noWhitespace, callback) {
      var _this2 = this;

      this.definitions.some(function (definition) {
        var node = _this2.parseDefinition(definition, configuration, noWhitespace),
            parsed = callback(node);

        if (parsed) {
          return true;
        }
      });
    }
  }, {
    key: 'parseDefinition',
    value: function parseDefinition(definition, configuration, noWhitespace) {
      var node = null;

      configuration.increaseDepth();

      var tooDeep = configuration.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var nodes = definition.parse(configuration, noWhitespace),
          parsed = nodes !== null;

      if (parsed) {
        var ruleName = this.name,
            childNodes = nodes,
            ///
        nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);

        node = nonTerminalNode; ///
      }

      configuration.decreaseDepth();

      return node;
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

        if (definitionsString === '') {
          definitionsString = definitionString; ///
        } else {
          definitionsString = multiLine ? definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString : definitionsString + ' | ' + definitionString;
        }

        return definitionsString;
      }, ''),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJzdHJpbmdVdGlsaXRpZXMiLCJwdXNoIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4Qjs7QUFHTSxJQUFFRSxJQUFGLEdBQVdILGNBQVgsQ0FBRUcsSUFBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCRixlQUQvQixDQUNF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SUFBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQjVDLElBQWpCIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBzdHJpbmdVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvc3RyaW5nJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgY2xlYXJEZWZpbml0aW9ucygpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHB1c2godGhpcy5kZWZpbml0aW9ucywgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBub2RlID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gKG5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjayhub2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgJycpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgOycsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuIl19