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

      var node = null;
      context.increaseDepth();
      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error("The parse tree is too deep at rule \"".concat(this.name, "\"."));
      }

      this.definitions.some(function (definition) {
        node = _this.parseDefinition(definition, context, callback);
        var parsed = node !== null;

        if (parsed) {
          return true;
        }
      });
      context.decreaseDepth();
      return node;
    }
  }, {
    key: "parseDefinition",
    value: function parseDefinition(definition, context, callback) {
      var node = null;
      var savedIndex = context.getSavedIndex();
      var nodes = definition.parse(context, callback),
          parsed = nodes !== null;

      if (parsed) {
        var ruleName = this.name,
            ///
        childNodes = nodes,
            ///
        nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
        node = nonTerminalNode; ///
      } else {
        context.backtrack(savedIndex);
      }

      return node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJkZWNyZWFzZURlcHRoIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImJhY2t0cmFjayIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsSTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVBQS9CLEVBQWdE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N0IsQ0FBUDtBQUVBLGFBQU9pRCxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgbGV0IHBhcnNlZCA9IChub2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBjb25zdCBub2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29udGV4dCwgY2FsbGJhY2spLFxuICAgICAgICAgIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIFwiXCIpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG5cXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXX0=