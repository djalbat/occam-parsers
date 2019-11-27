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
    key: 'addDefinition',
    value: function addDefinition(definition, position) {
      var definitionsIncludesDefinition = this.definitions.includes(definition);

      if (!definitionsIncludesDefinition) {
        if (position === undefined) {
          var definitionsLength = this.definitions.length;

          position = definitionsLength; ///
        }

        var start = position,
            ///
        deleteCount = 0;

        this.definitions.splice(start, deleteCount, definition);
      }
    }
  }, {
    key: 'removeDefinition',
    value: function removeDefinition(definition) {
      var definitionsIncludesDefinition = this.definitions.includes(definition);

      if (definitionsIncludesDefinition) {
        var definitionIndex = this.definitions.indexOf(definition),
            start = definitionIndex,
            ///
        deleteCount = 1;

        this.definitions.splice(start, deleteCount);
      }
    }
  }, {
    key: 'replaceDefinition',
    value: function replaceDefinition(oldDefinition, newDefinition) {
      var oldDefinitionIndex = this.definitions.indexOf(oldDefinition);

      if (oldDefinitionIndex > -1) {
        var start = oldDefinitionIndex,
            ///
        deleteCount = 1;

        this.definitions.splice(start, deleteCount, newDefinition);
      }
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
          definitionsString = multiLine ? definitionsString + '\n\n' + maximumPadding + '   | ' + definitionString : definitionsString + ' | ' + definitionString;
        }

        return definitionsString;
      }, ''),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength);

      var semicolonString = multiLine ? '\n\n' + maximumPadding + '     ;' : ' ;',
          string = ('\n\n' + this.name + padding + ' ::= ' + definitionsString + semicolonString).replace(/^\n\n/, '');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdVdGlsaXRpZXMiLCJyZXF1aXJlIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb25maWd1cmF0aW9uIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsInJlcGxhY2UiLCJDbGFzcyIsInJ1bGUiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFB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QW9CRSxnQkFBcEIsQ0FENEIsQ0FDVTtBQUN2QyxTQUZELE1BRU87QUFDTEYsOEJBQW9CRixZQUNJRSxpQkFESixZQUM0QkQsY0FENUIsYUFDa0RHLGdCQURsRCxHQUVNRixpQkFGTixXQUU2QkUsZ0JBRmpEO0FBR0Q7O0FBRUQsZUFBT0YsaUJBQVA7QUFDRCxPQVptQixFQVlqQixFQVppQixDQUQxQjtBQUFBLFVBY01SLFdBQVcsS0FBSzlCLElBZHRCO0FBQUEsVUFjNEI7QUFDdEIwQyx1QkFBaUJaLFNBQVNyQixNQWZoQztBQUFBLFVBZ0JNa0MsZ0JBQWdCUix3QkFBd0JPLGNBaEI5QztBQUFBLFVBaUJNRSxVQUFVOUMseUJBQXlCNkMsYUFBekIsQ0FqQmhCOztBQW1CQSxVQUFNRSxrQkFBa0JULHFCQUNRQyxjQURSLGNBRUcsSUFGM0I7QUFBQSxVQUdNUyxTQUFTLFVBQU8sS0FBSzlDLElBQVosR0FBbUI0QyxPQUFuQixhQUFrQ04saUJBQWxDLEdBQXNETyxlQUF0RCxFQUF3RUUsT0FBeEUsQ0FBZ0YsT0FBaEYsRUFBeUYsRUFBekYsQ0FIZjs7QUFLQSxhQUFPRCxNQUFQO0FBQ0Q7Ozs2QkFFZUUsSyxFQUFPQyxJLEVBQU07QUFDM0IsVUFBSUEsU0FBUzFDLFNBQWIsRUFBd0I7QUFDdEIwQyxlQUFPRCxLQUFQO0FBQ0FBLGdCQUFRakQsSUFBUjtBQUNEOztBQUVELFVBQU1DLE9BQU9pRCxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNakQsY0FBY2dELEtBQUtFLGNBQUwsRUFEcEI7QUFBQSxVQUVNakQsa0JBQWtCK0MsS0FBS0csa0JBQUwsRUFGeEI7O0FBSUFILGFBQU8sSUFBSUQsS0FBSixDQUFVaEQsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkJDLGVBQTdCLENBQVA7O0FBRUEsYUFBTytDLElBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJ2RCxJQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvc3RyaW5nJyk7XG5cbmNvbnN0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9uKGRlZmluaXRpb24sIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgICAgICBwb3NpdGlvbiA9IGRlZmluaXRpb25zTGVuZ3RoOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnQgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uSW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBzdGFydCA9IGRlZmluaXRpb25JbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VEZWZpbml0aW9uKG9sZERlZmluaXRpb24sIG5ld0RlZmluaXRpb24pIHtcbiAgICBjb25zdCBvbGREZWZpbml0aW9uSW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2Yob2xkRGVmaW5pdGlvbik7XG5cbiAgICBpZiAob2xkRGVmaW5pdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gb2xkRGVmaW5pdGlvbkluZGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdEZWZpbml0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gKG5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKG5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyA7JyxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gLnJlcGxhY2UoL15cXG5cXG4vLCAnJyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG4iXX0=