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

      var semicolonString = multiLine ? '\n\n' + maximumPadding + '   ;' : ' ;',
          string = '\n\n' + this.name + padding + ' ::= ' + definitionsString + semicolonString;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdVdGlsaXRpZXMiLCJyZXF1aXJlIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb25maWd1cmF0aW9uIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JD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QixDQUQ0QixDQUNVO0FBQ3ZDLFNBRkQsTUFFTztBQUNMRiw4QkFBb0JGLFlBQ0lFLGlCQURKLFlBQzRCRCxjQUQ1QixhQUNrREcsZ0JBRGxELEdBRU1GLGlCQUZOLFdBRTZCRSxnQkFGakQ7QUFHRDs7QUFFRCxlQUFPRixpQkFBUDtBQUNELE9BWm1CLEVBWWpCLEVBWmlCLENBRDFCO0FBQUEsVUFjTVIsV0FBVyxLQUFLOUIsSUFkdEI7QUFBQSxVQWM0QjtBQUN0QjBDLHVCQUFpQlosU0FBU3JCLE1BZmhDO0FBQUEsVUFnQk1rQyxnQkFBZ0JSLHdCQUF3Qk8sY0FoQjlDO0FBQUEsVUFpQk1FLFVBQVU5Qyx5QkFBeUI2QyxhQUF6QixDQWpCaEI7O0FBbUJBLFVBQU1FLGtCQUFrQlQscUJBQ1FDLGNBRFIsWUFFRyxJQUYzQjtBQUFBLFVBR01TLGtCQUFnQixLQUFLOUMsSUFBckIsR0FBNEI0QyxPQUE1QixhQUEyQ04saUJBQTNDLEdBQStETyxlQUhyRTs7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs2QkFFZUMsSyxFQUFPQyxJLEVBQU07QUFDM0IsVUFBSUEsU0FBU3pDLFNBQWIsRUFBd0I7QUFDdEJ5QyxlQUFPRCxLQUFQO0FBQ0FBLGdCQUFRaEQsSUFBUjtBQUNEOztBQUVELFVBQU1DLE9BQU9nRCxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNaEQsY0FBYytDLEtBQUtFLGNBQUwsRUFEcEI7QUFBQSxVQUVNaEQsa0JBQWtCOEMsS0FBS0csa0JBQUwsRUFGeEI7O0FBSUFILGFBQU8sSUFBSUQsS0FBSixDQUFVL0MsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkJDLGVBQTdCLENBQVA7O0FBRUEsYUFBTzhDLElBQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJ0RCxJQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvc3RyaW5nJyk7XG5cbmNvbnN0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9uKGRlZmluaXRpb24sIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgICAgICBwb3NpdGlvbiA9IGRlZmluaXRpb25zTGVuZ3RoOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnQgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uSW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBzdGFydCA9IGRlZmluaXRpb25JbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VEZWZpbml0aW9uKG9sZERlZmluaXRpb24sIG5ld0RlZmluaXRpb24pIHtcbiAgICBjb25zdCBvbGREZWZpbml0aW9uSW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2Yob2xkRGVmaW5pdGlvbik7XG5cbiAgICBpZiAob2xkRGVmaW5pdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gb2xkRGVmaW5pdGlvbkluZGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdEZWZpbml0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gKG5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKG5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgOycsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcbiJdfQ==