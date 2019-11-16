'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stringUtilities = require('../utilities/string');

var paddingFromPaddingLength = stringUtilities.paddingFromPaddingLength;

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
    key: 'removeDefinition',
    value: function removeDefinition(definition) {
      var definitionsIncludesDefinition = this.definitions.includes(definition);

      if (!definitionsIncludesDefinition) {
        return;
      }

      var index = this.definitions.indexOf(definition),
          start = index,
          ///
      deleteCount = 1;

      this.definitions.splice(start, deleteCount);
    }
  }, {
    key: 'replaceDefinition',
    value: function replaceDefinition(oldDefinition, newDefinition) {
      var oldDefinitionIndex = this.definitions.indexOf(oldDefinition);

      if (oldDefinitionIndex === -1) {
        return;
      }

      var start = oldDefinitionIndex,
          deleteCount = 1;

      this.definitions.splice(start, deleteCount, newDefinition);
    }
  }, {
    key: 'addDefinition',
    value: function addDefinition(definition, position) {
      var definitionsIncludesDefinition = this.definitions.includes(definition);

      if (definitionsIncludesDefinition) {
        return;
      }

      if (position === undefined) {
        var definitionsLength = this.definitions.length;

        position = definitionsLength; ///
      }

      var start = position,
          ///
      deleteCount = 0;

      this.definitions.splice(start, deleteCount, definition);
    }
  }, {
    key: 'parse',
    value: function parse(configuration) {
      var _this = this;

      var node = null;

      this.definitions.some(function (definition) {
        node = _this.parseDefinition(definition, configuration);

        var parsed = node !== null;

        if (parsed) {
          return true;
        }
      });

      return node;
    }
  }, {
    key: 'parseWithLookAhead',
    value: function parseWithLookAhead(configuration, callback) {
      var _this2 = this;

      this.definitions.some(function (definition) {
        var node = _this2.parseDefinition(definition, configuration),
            parsed = callback(node);

        if (parsed) {
          return true;
        }
      });
    }
  }, {
    key: 'parseDefinition',
    value: function parseDefinition(definition, configuration) {
      var node = null;

      configuration.increaseDepth();

      var tooDeep = configuration.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var nodes = definition.parse(configuration),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdVdGlsaXRpZXMiLCJyZXF1aXJlIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsIm9sZERlZmluaXRpb24iLCJuZXdEZWZpbml0aW9uIiwib2xkRGVmaW5pdGlvbkluZGV4IiwicG9zaXRpb24iLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImNvbmZpZ3VyYXRpb24iLCJub2RlIiwic29tZSIsInBhcnNlRGVmaW5pdGlvbiIsInBhcnNlZCIsImNhbGxiYWNrIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsIm5vZGVzIiwicGFyc2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSxxQkFB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Q0FENEIsQ0FDVTtBQUN2QyxTQUZELE1BRU87QUFDTEYsOEJBQW9CRixZQUNJRSxpQkFESixZQUM0QkQsY0FENUIsZUFDb0RHLGdCQURwRCxHQUVNRixpQkFGTixXQUU2QkUsZ0JBRmpEO0FBR0Q7O0FBRUQsZUFBT0YsaUJBQVA7QUFDRCxPQVptQixFQVlqQixFQVppQixDQUQxQjtBQUFBLFVBY01SLFdBQVcsS0FBSzlCLElBZHRCO0FBQUEsVUFjNEI7QUFDdEIwQyx1QkFBaUJaLFNBQVNiLE1BZmhDO0FBQUEsVUFnQk0wQixnQkFBZ0JSLHdCQUF3Qk8sY0FoQjlDO0FBQUEsVUFpQk1FLFVBQVU5Qyx5QkFBeUI2QyxhQUF6QixDQWpCaEI7O0FBbUJBLFVBQU1FLGtCQUFrQlQscUJBQ1FDLGNBRFIsY0FFRyxJQUYzQjtBQUFBLFVBR01TLG9CQUFrQixLQUFLOUMsSUFBdkIsR0FBOEI0QyxPQUE5QixhQUE2Q04saUJBQTdDLEdBQWlFTyxlQUh2RTs7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs2QkFFZUMsSyxFQUFPQyxJLEVBQU07QUFDM0IsVUFBSUEsU0FBU2pDLFNBQWIsRUFBd0I7QUFDdEJpQyxlQUFPRCxLQUFQO0FBQ0FBLGdCQUFRaEQsSUFBUjtBQUNEOztBQUVELFVBQU1DLE9BQU9nRCxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNaEQsY0FBYytDLEtBQUtFLGNBQUwsRUFEcEI7QUFBQSxVQUVNaEQsa0JBQWtCOEMsS0FBS0csa0JBQUwsRUFGeEI7O0FBSUFILGFBQU8sSUFBSUQsS0FBSixDQUFVL0MsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkJDLGVBQTdCLENBQVA7O0FBRUEsYUFBTzhDLElBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJ0RCxJQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvc3RyaW5nJyk7XG5cbmNvbnN0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihvbGREZWZpbml0aW9uLCBuZXdEZWZpbml0aW9uKSB7XG4gICAgY29uc3Qgb2xkRGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKG9sZERlZmluaXRpb24pO1xuXG4gICAgaWYgKG9sZERlZmluaXRpb25JbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IG9sZERlZmluaXRpb25JbmRleCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gIH1cblxuICBhZGREZWZpbml0aW9uKGRlZmluaXRpb24sIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZGVmaW5pdGlvbik7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBub2RlID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbik7XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IChub2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2VXaXRoTG9va0FoZWFkKGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjayhub2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uZmlndXJhdGlvbi5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29uZmlndXJhdGlvbi5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgcGFyc2VkID0gKG5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uZmlndXJhdGlvbi5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyA7JyxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG4iXX0=