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
        throw new Error("The parse tree is too deep at rule \"".concat(this.name, "\"."));
      }

      var nodes = definition.parse(configuration),
          parsed = nodes !== null;

      if (parsed) {
        var ruleName = this.name,
            ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJjb25maWd1cmF0aW9uIiwibm9kZSIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJwYXJzZWQiLCJjYWxsYmFjayIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJub2RlcyIsInBhcnNlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsIkNsYXNzIiwicnVsZSIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUJBLEk7QUFDbkIsZ0JBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCQyxlQUEvQixFQUFnRDtBQUFBOztBQUM5QyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7NEJBRU9GLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNDLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7dUNBRWtCQyxlLEVBQWlCO0FBQ2xDLFdBQUtBLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7OztrQ0FFYUMsVSxFQUFZQyxRLEVBQVU7QUFDbEMsVUFBTUMsNkJBQTZCLEdBQUcsS0FBS0osV0FBTCxDQUFpQkssUUFBakIsQ0FBMEJILFVBQTFCLENBQXRDOztBQUVBLFVBQUksQ0FBQ0UsNkJBQUwsRUFBb0M7QUFDbEMsWUFBSUQsUUFBUSxLQUFLRyxTQUFqQixFQUE0QjtBQUMxQixjQUFNQyxpQkFBaUIsR0FBRyxLQUFLUCxXQUFMLENBQWlCUSxNQUEzQztBQUVBTCxVQUFBQSxRQUFRLEdBQUdJLGlCQUFYLENBSDBCLENBR0k7QUFDL0I7O0FBRUQsWUFBTUUsS0FBSyxHQUFHTixRQUFkO0FBQUEsWUFBd0I7QUFDbEJPLFFBQUFBLFdBQVcsR0FBRyxDQURwQjtBQUdBLGFBQUtWLFdBQUwsQ0FBaUJXLE1BQWpCLENBQXdCRixLQUF4QixFQUErQkMsV0FBL0IsRUFBNENSLFVBQTVDO0FBQ0Q7QUFDRjs7O3FDQUVnQkEsVSxFQUFZO0FBQzNCLFVBQU1FLDZCQUE2QixHQUFHLEtBQUtKLFdBQUwsQ0FBaUJLLFFBQWpCLENBQTBCSCxVQUExQixDQUF0Qzs7QUFFQSxVQUFJRSw2QkFBSixFQUFtQztBQUNqQyxZQUFNUSxlQUFlLEdBQUcsS0FBS1osV0FBTCxDQUFpQmEsT0FBakIsQ0FBeUJYLFVBQXpCLENBQXhCO0FBQUEsWUFDTU8sS0FBSyxHQUFHRyxlQURkO0FBQUEsWUFDZ0M7QUFDMUJGLFFBQUFBLFdBQVcsR0FBRyxDQUZwQjtBQUlBLGFBQUtWLFdBQUwsQ0FBaUJXLE1BQWpCLENBQXdCRixLQUF4QixFQUErQkMsV0FBL0I7QUFDRDtBQUNGOzs7c0NBRWlCSSxhLEVBQWVDLGEsRUFBZTtBQUM5QyxVQUFNQyxrQkFBa0IsR0FBRyxLQUFLaEIsV0FBTCxDQUFpQmEsT0FBakIsQ0FBeUJDLGFBQXpCLENBQTNCOztBQUVBLFVBQUlFLGtCQUFrQixHQUFHLENBQUMsQ0FBMUIsRUFBNkI7QUFDM0IsWUFBTVAsS0FBSyxHQUFHTyxrQkFBZDtBQUFBLFlBQWtDO0FBQzVCTixRQUFBQSxXQUFXLEdBQUcsQ0FEcEI7QUFHQSxhQUFLVixXQUFMLENBQWlCVyxNQUFqQixDQUF3QkYsS0FBeEIsRUFBK0JDLFdBQS9CLEVBQTRDSyxhQUE1QztBQUNEO0FBQ0Y7OzswQkFFS0UsYSxFQUFlO0FBQUE7O0FBQ25CLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBRUEsV0FBS2xCLFdBQUwsQ0FBaUJtQixJQUFqQixDQUFzQixVQUFDakIsVUFBRCxFQUFnQjtBQUNwQ2dCLFFBQUFBLElBQUksR0FBRyxLQUFJLENBQUNFLGVBQUwsQ0FBcUJsQixVQUFyQixFQUFpQ2UsYUFBakMsQ0FBUDtBQUVBLFlBQU1JLE1BQU0sR0FBSUgsSUFBSSxLQUFLLElBQXpCOztBQUVBLFlBQUlHLE1BQUosRUFBWTtBQUNWLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7QUFVQSxhQUFPSCxJQUFQO0FBQ0Q7Ozt1Q0FFa0JELGEsRUFBZUssUSxFQUFVO0FBQUE7O0FBQzFDLFdBQUt0QixXQUFMLENBQWlCbUIsSUFBakIsQ0FBc0IsVUFBQ2pCLFVBQUQsRUFBZ0I7QUFDcEMsWUFBTWdCLElBQUksR0FBRyxNQUFJLENBQUNFLGVBQUwsQ0FBcUJsQixVQUFyQixFQUFpQ2UsYUFBakMsQ0FBYjtBQUFBLFlBQ01JLE1BQU0sR0FBR0MsUUFBUSxDQUFDSixJQUFELENBRHZCOztBQUdBLFlBQUlHLE1BQUosRUFBWTtBQUNWLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUEQ7QUFRRDs7O29DQUVlbkIsVSxFQUFZZSxhLEVBQWU7QUFDekMsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFFQUQsTUFBQUEsYUFBYSxDQUFDTSxhQUFkO0FBRUEsVUFBTUMsT0FBTyxHQUFHUCxhQUFhLENBQUNRLFNBQWQsRUFBaEI7O0FBRUEsVUFBSUQsT0FBSixFQUFhO0FBQ1gsY0FBTSxJQUFJRSxLQUFKLGdEQUFpRCxLQUFLM0IsSUFBdEQsU0FBTjtBQUNEOztBQUVELFVBQU00QixLQUFLLEdBQUd6QixVQUFVLENBQUMwQixLQUFYLENBQWlCWCxhQUFqQixDQUFkO0FBQUEsVUFDTUksTUFBTSxHQUFJTSxLQUFLLEtBQUssSUFEMUI7O0FBR0EsVUFBSU4sTUFBSixFQUFZO0FBQ1YsWUFBTVEsUUFBUSxHQUFHLEtBQUs5QixJQUF0QjtBQUFBLFlBQTRCO0FBQ3RCK0IsUUFBQUEsVUFBVSxHQUFHSCxLQURuQjtBQUFBLFlBQzJCO0FBQ3JCSSxRQUFBQSxlQUFlLEdBQUcsS0FBSzlCLGVBQUwsQ0FBcUIrQix5QkFBckIsQ0FBK0NILFFBQS9DLEVBQXlEQyxVQUF6RCxDQUZ4QjtBQUlBWixRQUFBQSxJQUFJLEdBQUdhLGVBQVAsQ0FMVSxDQUtjO0FBQ3pCOztBQUVEZCxNQUFBQSxhQUFhLENBQUNnQixhQUFkO0FBRUEsYUFBT2YsSUFBUDtBQUNEOzs7NkJBRVFnQixxQixFQUF5QztBQUFBLFVBQWxCQyxTQUFrQix1RUFBTixJQUFNO0FBQ2hELFVBQU01QixpQkFBaUIsR0FBRyxLQUFLUCxXQUFMLENBQWlCUSxNQUEzQztBQUVBMkIsTUFBQUEsU0FBUyxHQUFHQSxTQUFTLElBQUs1QixpQkFBaUIsR0FBRyxDQUE5QyxDQUhnRCxDQUdHOztBQUVuRCxVQUFNNkIsY0FBYyxHQUFHLHNDQUF5QkYscUJBQXpCLENBQXZCO0FBQUEsVUFDTUcsaUJBQWlCLEdBQUcsS0FBS3JDLFdBQUwsQ0FBaUJzQyxNQUFqQixDQUF3QixVQUFDRCxpQkFBRCxFQUFvQm5DLFVBQXBCLEVBQW1DO0FBQzdFLFlBQU1xQyxnQkFBZ0IsR0FBR3JDLFVBQVUsQ0FBQ3NDLFFBQVgsRUFBekI7O0FBRUEsWUFBSUgsaUJBQWlCLEtBQUssRUFBMUIsRUFBOEI7QUFDNUJBLFVBQUFBLGlCQUFpQixHQUFHRSxnQkFBcEIsQ0FENEIsQ0FDVTtBQUN2QyxTQUZELE1BRU87QUFDTEYsVUFBQUEsaUJBQWlCLEdBQUdGLFNBQVMsYUFDTEUsaUJBREssaUJBQ21CRCxjQURuQixrQkFDeUNHLGdCQUR6QyxjQUVIRixpQkFGRyxnQkFFb0JFLGdCQUZwQixDQUE3QjtBQUdEOztBQUVELGVBQU9GLGlCQUFQO0FBQ0QsT0FabUIsRUFZakIsRUFaaUIsQ0FEMUI7QUFBQSxVQWNNUixRQUFRLEdBQUcsS0FBSzlCLElBZHRCO0FBQUEsVUFjNEI7QUFDdEIwQyxNQUFBQSxjQUFjLEdBQUdaLFFBQVEsQ0FBQ3JCLE1BZmhDO0FBQUEsVUFnQk1rQyxhQUFhLEdBQUdSLHFCQUFxQixHQUFHTyxjQWhCOUM7QUFBQSxVQWlCTUUsT0FBTyxHQUFHLHNDQUF5QkQsYUFBekIsQ0FqQmhCO0FBbUJBLFVBQU1FLGVBQWUsR0FBR1QsU0FBUyxpQkFDREMsY0FEQyxZQUVOLElBRjNCO0FBQUEsVUFHTVMsTUFBTSxpQkFBVSxLQUFLOUMsSUFBZixTQUFzQjRDLE9BQXRCLGtCQUFxQ04saUJBQXJDLFNBQXlETyxlQUF6RCxDQUhaO0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7NkJBRWVDLEssRUFBT0MsSSxFQUFNO0FBQzNCLFVBQUlBLElBQUksS0FBS3pDLFNBQWIsRUFBd0I7QUFDdEJ5QyxRQUFBQSxJQUFJLEdBQUdELEtBQVA7QUFDQUEsUUFBQUEsS0FBSyxHQUFHaEQsSUFBUjtBQUNEOztBQUVELFVBQU1DLElBQUksR0FBR2dELElBQUksQ0FBQ0MsT0FBTCxFQUFiO0FBQUEsVUFDTWhELFdBQVcsR0FBRytDLElBQUksQ0FBQ0UsY0FBTCxFQURwQjtBQUFBLFVBRU1oRCxlQUFlLEdBQUc4QyxJQUFJLENBQUNHLGtCQUFMLEVBRnhCO0FBSUFILE1BQUFBLElBQUksR0FBRyxJQUFJRCxLQUFKLENBQVUvQyxJQUFWLEVBQWdCQyxXQUFoQixFQUE2QkMsZUFBN0IsQ0FBUDtBQUVBLGFBQU84QyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSAobm9kZSAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlV2l0aExvb2tBaGVhZChjb25maWd1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2sobm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGNvbmZpZ3VyYXRpb24uaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbmZpZ3VyYXRpb24uaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlIFwiJHt0aGlzLm5hbWV9XCIuYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIHBhcnNlZCA9IChub2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb25maWd1cmF0aW9uLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4ke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl19