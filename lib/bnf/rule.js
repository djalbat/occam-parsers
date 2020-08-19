"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _string = require("../utilities/string");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    value: function parse(context, callback) {
      var _this = this;

      var ruleNode = null;
      context.increaseDepth();
      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error("The parse tree is too deep at rule \"".concat(this.name, "\"."));
      }

      var parsed, definitionNodes;
      this.definitions.some(function (definition) {
        definitionNodes = [];
        parsed = _this.parseDefinition(definition, definitionNodes, context, callback);

        if (parsed) {
          return true;
        }
      });

      if (parsed) {
        var ruleName = this.name,
            ///
        childNodes = definitionNodes,
            ///
        nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
        ruleNode = nonTerminalNode; ///
      }

      context.decreaseDepth();
      return ruleNode;
    }
  }, {
    key: "parseDefinition",
    value: function parseDefinition(definition, nodes, context, callback) {
      var parsed;
      var savedIndex = context.getSavedIndex();
      parsed = definition.parse(nodes, context, callback);

      if (!parsed) {
        context.backtrack(savedIndex);
      }

      return parsed;
    }
  }, {
    key: "asString",
    value: function asString(maximumRuleNameLength) {
      var multiLine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var definitionsLength = this.definitions.length;
      multiLine = multiLine && definitionsLength > 1; ///

      var maximumPadding = (0, _string.paddingFromPaddingLength)(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.asString();

        if (definitionsString === "") {
          definitionsString = definitionString; ///
        } else {
          definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
        }

        return definitionsString;
      }, ""),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = (0, _string.paddingFromPaddingLength)(paddingLength);
      var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;",
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

exports["default"] = Rule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJwYXJzZWQiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUJBLEk7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLFdB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LEdBQUcsSUFBSUQsS0FBSixDQUFVbkQsSUFBVixFQUFnQkMsV0FBaEIsRUFBNkJDLGVBQTdCLENBQVA7QUFFQSxhQUFPa0QsSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9uKGRlZmluaXRpb24sIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgICAgICBwb3NpdGlvbiA9IGRlZmluaXRpb25zTGVuZ3RoOyAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnQgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZGVmaW5pdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSB0aGlzLmRlZmluaXRpb25zLmluY2x1ZGVzKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uSW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgICBzdGFydCA9IGRlZmluaXRpb25JbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VEZWZpbml0aW9uKG9sZERlZmluaXRpb24sIG5ld0RlZmluaXRpb24pIHtcbiAgICBjb25zdCBvbGREZWZpbml0aW9uSW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2Yob2xkRGVmaW5pdGlvbik7XG5cbiAgICBpZiAob2xkRGVmaW5pdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gb2xkRGVmaW5pdGlvbkluZGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBuZXdEZWZpbml0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlIFwiJHt0aGlzLm5hbWV9XCIuYCk7XG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCxcbiAgICAgICAgZGVmaW5pdGlvbk5vZGVzO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgZGVmaW5pdGlvbk5vZGVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgXCJcIiksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdfQ==