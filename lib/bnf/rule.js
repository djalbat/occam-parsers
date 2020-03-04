'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var stringUtilities = require('../utilities/string');

var paddingFromPaddingLength = stringUtilities.paddingFromPaddingLength;

var Rule = /*#__PURE__*/function () {
  function Rule(name, definitions, NonTerminalNode) {
    _classCallCheck(this, Rule);

    this.name = name;
    this.definitions = definitions;
    this.NonTerminalNode = NonTerminalNode;
  }

  _createClass(Rule, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getDefinitions",
    value: function getDefinitions() {
      return this.definitions;
    }
  }, {
    key: "getNonTerminalNode",
    value: function getNonTerminalNode() {
      return this.NonTerminalNode;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setDefinitions",
    value: function setDefinitions(definitions) {
      this.definitions = definitions;
    }
  }, {
    key: "setNonTerminalNode",
    value: function setNonTerminalNode(NonTerminalNode) {
      this.NonTerminalNode = NonTerminalNode;
    }
  }, {
    key: "addDefinition",
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
    key: "removeDefinition",
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
    key: "replaceDefinition",
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
    key: "parse",
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
    key: "parseWithLookAhead",
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
    key: "parseDefinition",
    value: function parseDefinition(definition, configuration) {
      var node = null;
      configuration.increaseDepth();
      var tooDeep = configuration.isTooDeep();

      if (tooDeep) {
        throw new Error("The parse tree is too deep at rule '".concat(this.name, "'"));
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
    key: "asString",
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
          definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
        }

        return definitionsString;
      }, ''),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength);
      var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : ' ;',
          string = "\n\n".concat(this.name).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
      return string;
    }
  }], [{
    key: "fromRule",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsic3RyaW5nVXRpbGl0aWVzIiwicmVxdWlyZSIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsIlJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJkZWZpbml0aW9uIiwicG9zaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZGVmaW5pdGlvbkluZGV4IiwiaW5kZXhPZiIsIm9sZERlZmluaXRpb24iLCJuZXdEZWZpbml0aW9uIiwib2xkRGVmaW5pdGlvbkluZGV4IiwiY29uZmlndXJhdGlvbiIsIm5vZGUiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicGFyc2VkIiwiY2FsbGJhY2siLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwibm9kZXMiLCJwYXJzZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwibWF4aW11bVBhZGRpbmciLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJDbGFzcyIsInJ1bGUiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLE9BQU8sQ0FB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R2hELElBQVI7QUFDRDs7QUFFRCxVQUFNQyxJQUFJLEdBQUdnRCxJQUFJLENBQUNDLE9BQUwsRUFBYjtBQUFBLFVBQ01oRCxXQUFXLEdBQUcrQyxJQUFJLENBQUNFLGNBQUwsRUFEcEI7QUFBQSxVQUVNaEQsZUFBZSxHQUFHOEMsSUFBSSxDQUFDRyxrQkFBTCxFQUZ4QjtBQUlBSCxNQUFBQSxJQUFJLEdBQUcsSUFBSUQsS0FBSixDQUFVL0MsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkJDLGVBQTdCLENBQVA7QUFFQSxhQUFPOEMsSUFBUDtBQUNEOzs7Ozs7QUFHSEksTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEQsSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9zdHJpbmcnKTtcblxuY29uc3QgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSA9IHN0cmluZ1V0aWxpdGllcztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSAobm9kZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlV2l0aExvb2tBaGVhZChjb25maWd1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2sobm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGNvbmZpZ3VyYXRpb24uaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbmZpZ3VyYXRpb24uaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbmZpZ3VyYXRpb24uZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sICcnKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyA7JyxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuIl19