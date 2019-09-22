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
    key: 'removeDefinition',
    value: function removeDefinition(definition) {
      var index = this.definitions.indexOf(definition);

      if (index !== -1) {
        var start = index,
            ///
        deleteCount = 1;

        this.splice(start, deleteCount);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJzdHJpbmdVdGlsaXRpZXMiLCJyZXF1aXJlIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicHVzaCIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlIiwic29tZSIsInBhcnNlRGVmaW5pdGlvbiIsInBhcnNlZCIsImNhbGxiYWNrIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsIm5vZGVzIiwicGFyc2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJDbGFzcyIsInJ1bGUiLCJ1bmRlZmluZWQiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLHFCQUFSLENBQXhCOztJQUVRQyx3QixHQUE2QkYsZSxDQUE3QkUsd0I7O0lBRUZDLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVB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QUFrQnlDLEtBQUtJLGtCQUFMLEVBRnhCOztBQUlBSixhQUFPLElBQUlELEtBQUosQ0FBVTFDLElBQVYsRUFBZ0JDLFdBQWhCLEVBQTZCQyxlQUE3QixDQUFQOztBQUVBLGFBQU95QyxJQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCbEQsSUFBakIiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RyaW5nVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3N0cmluZycpO1xuXG5jb25zdCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9ID0gc3RyaW5nVXRpbGl0aWVzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgY2xlYXJEZWZpbml0aW9ucygpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICBhZGREZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIG5vZGUgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSAobm9kZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlV2l0aExvb2tBaGVhZChjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKG5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGNvbmZpZ3VyYXRpb24uaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbmZpZ3VyYXRpb24uaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFyc2VkID0gKG5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29uZmlndXJhdGlvbi5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSAnJykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCAnJyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyA7JyxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG4iXX0=