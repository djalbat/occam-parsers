'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array'),
    stringUtilities = require('../utilities/string');

var push = arrayUtilities.push,
    unshift = arrayUtilities.unshift,
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
      var toTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      toTop ? unshift(this.definitions, definitions) : push(this.definitions, definitions);
    }
  }, {
    key: 'addDefinition',
    value: function addDefinition(definition) {
      var toTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      toTop ? this.definitions.unshift(definition) : this.definitions.push(definition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJzdHJpbmdVdGlsaXRpZXMiLCJwdXNoIiwidW5zaGlmdCIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsIlJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJ0b1RvcCIsImRlZmluaXRpb24iLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFrQkgsYyxDQUFsQkcsSTtJQUFNQyxPLEdBQVlKLGMsQ0FBWkksTztJQUNO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LFVBQU1DLE9BQU9zQyxLQUFLRSxPQUFMLEVBQWI7QUFBQSxVQUNNdkMsY0FBY3FDLEtBQUtHLGNBQUwsRUFEcEI7QUFBQSxVQUVNdkMsa0JBQWtCb0MsS0FBS0ksa0JBQUwsRUFGeEI7O0FBSUFKLGFBQU8sSUFBSUQsS0FBSixDQUFVckMsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkJDLGVBQTdCLENBQVA7O0FBRUEsYUFBT29DLElBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUI3QyxJQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgc3RyaW5nVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3N0cmluZycpO1xuXG5jb25zdCB7IHB1c2gsIHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSA9IHN0cmluZ1V0aWxpdGllcztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIGNsZWFyRGVmaW5pdGlvbnMoKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IFtdO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMsIHRvVG9wID0gZmFsc2UpIHtcbiAgICB0b1RvcCA/XG4gICAgICB1bnNoaWZ0KHRoaXMuZGVmaW5pdGlvbnMsIGRlZmluaXRpb25zKSA6XG4gICAgICAgIHB1c2godGhpcy5kZWZpbml0aW9ucywgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCB0b1RvcCA9IGZhbHNlKSB7XG4gICAgdG9Ub3AgP1xuICAgICAgdGhpcy5kZWZpbml0aW9ucy51bnNoaWZ0KGRlZmluaXRpb24pIDpcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBub2RlID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gKG5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjayhub2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgJycpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgOycsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuIl19