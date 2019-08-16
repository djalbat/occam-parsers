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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJzdHJpbmdVdGlsaXRpZXMiLCJwdXNoIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4Qjs7QUFHTSxJQUFFRSxJQUFGLEdBQVdILGNBQVgsQ0FBRUcsSUFBRjtBQUFBLElBQ0VDLHdCQURGLEdBQytCRixlQUQvQixDQUNF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akIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHN0cmluZ1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9zdHJpbmcnKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHB1c2godGhpcy5kZWZpbml0aW9ucywgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBub2RlID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gKG5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjayhub2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgJycpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgOycsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuIl19