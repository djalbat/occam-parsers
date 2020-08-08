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

      var nodes;
      this.definitions.some(function (definition) {
        nodes = _this.parseDefinition(definition, context, callback);

        if (nodes !== null) {
          return true;
        }
      });

      if (nodes !== null) {
        var ruleName = this.name,
            ///
        childNodes = nodes,
            ///
        nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
        node = nonTerminalNode; ///
      }

      context.decreaseDepth();
      return node;
    }
  }, {
    key: "parseDefinition",
    value: function parseDefinition(definition, context, callback) {
      var savedIndex = context.getSavedIndex(),
          nodes = definition.parse(context, callback);

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsIm5vZGVzIiwic29tZSIsInBhcnNlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZSIsImJhY2t0cmFjayIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiQ2xhc3MiLCJydWxlIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsSTtBQUNuQixnQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLGVBQS9CLEVBQWdEO0FBQUE7O0FB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dGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBub2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZXMgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBub2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIFwiXCIpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXG5cXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXX0=