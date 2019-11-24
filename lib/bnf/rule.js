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

      if (oldDefinitionIndex > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdVdGlsaXRpZXMiLCJyZXF1aXJlIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb25maWd1cmF0aW9uIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JD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NEIsQ0FDVTtBQUN2QyxTQUZELE1BRU87QUFDTEYsOEJBQW9CRixZQUNJRSxpQkFESixZQUM0QkQsY0FENUIsZUFDb0RHLGdCQURwRCxHQUVNRixpQkFGTixXQUU2QkUsZ0JBRmpEO0FBR0Q7O0FBRUQsZUFBT0YsaUJBQVA7QUFDRCxPQVptQixFQVlqQixFQVppQixDQUQxQjtBQUFBLFVBY01SLFdBQVcsS0FBSzlCLElBZHRCO0FBQUEsVUFjNEI7QUFDdEIwQyx1QkFBaUJaLFNBQVNyQixNQWZoQztBQUFBLFVBZ0JNa0MsZ0JBQWdCUix3QkFBd0JPLGNBaEI5QztBQUFBLFVBaUJNRSxVQUFVOUMseUJBQXlCNkMsYUFBekIsQ0FqQmhCOztBQW1CQSxVQUFNRSxrQkFBa0JULHFCQUNRQyxjQURSLGNBRUcsSUFGM0I7QUFBQSxVQUdNUyxvQkFBa0IsS0FBSzlDLElBQXZCLEdBQThCNEMsT0FBOUIsYUFBNkNOLGlCQUE3QyxHQUFpRU8sZUFIdkU7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7NkJBRWVDLEssRUFBT0MsSSxFQUFNO0FBQzNCLFVBQUlBLFNBQVN6QyxTQUFiLEVBQXdCO0FBQ3RCeUMsZUFBT0QsS0FBUDtBQUNBQSxnQkFBUWhELElBQVI7QUFDRDs7QUFFRCxVQUFNQyxPQUFPZ0QsS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTWhELGNBQWMrQyxLQUFLRSxjQUFMLEVBRHBCO0FBQUEsVUFFTWhELGtCQUFrQjhDLEtBQUtHLGtCQUFMLEVBRnhCOztBQUlBSCxhQUFPLElBQUlELEtBQUosQ0FBVS9DLElBQVYsRUFBZ0JDLFdBQWhCLEVBQTZCQyxlQUE3QixDQUFQOztBQUVBLGFBQU84QyxJQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCdEQsSUFBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaW5nVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3N0cmluZycpO1xuXG5jb25zdCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgcG9zaXRpb24gPSBkZWZpbml0aW9uc0xlbmd0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgc3RhcnQgPSBkZWZpbml0aW9uSW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihvbGREZWZpbml0aW9uLCBuZXdEZWZpbml0aW9uKSB7XG4gICAgY29uc3Qgb2xkRGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKG9sZERlZmluaXRpb24pO1xuXG4gICAgaWYgKG9sZERlZmluaXRpb25JbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gb2xkRGVmaW5pdGlvbkluZGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdEZWZpbml0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gKG5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKG5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25maWd1cmF0aW9uLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb25maWd1cmF0aW9uLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwYXJzZWQgPSAobm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIDsnLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcbiJdfQ==