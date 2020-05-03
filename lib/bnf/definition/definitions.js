"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var ruleNames = require("../ruleNames"),
    Definition = require("../definition"),
    RuleNamePart = require("../part/nonTerminal/ruleName"),
    GroupOfPartsPart = require("../part/nonTerminal/groupOfParts"),
    TerminalSymbolPart = require("../part/terminal/terminalSymbol"),
    ZeroOrMorePartsPart = require("../part/nonTerminal/zeroOrMoreParts");

var specialSymbols = lexers.specialSymbols,
    verticalBar = specialSymbols.verticalBar,
    DefinitionRuleName = ruleNames.DefinitionRuleName;

var DefinitionsDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(DefinitionsDefinition, _Definition);

  function DefinitionsDefinition() {
    _classCallCheck(this, DefinitionsDefinition);

    var definitionRuleName = DefinitionRuleName,
        verticalBarTerminalSymbolContent = verticalBar,
        definitionRuleNamePart = new RuleNamePart(definitionRuleName),
        verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
        verticalBarTerminalSymbolThenDefinitionRuleNameParts = [verticalBarTerminalSymbolPart, definitionRuleNamePart],
        groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenDefinitionRuleNameParts),
        zeroOrMoreGroupOfPartsPart = new ZeroOrMorePartsPart(groupOfPartsPart),
        parts = [definitionRuleNamePart, zeroOrMoreGroupOfPartsPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsDefinition).call(this, parts));
  }

  return DefinitionsDefinition;
}(Definition);

module.exports = DefinitionsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiR3JvdXBPZlBhcnRzUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzcGVjaWFsU3ltYm9scyIsInZlcnRpY2FsQmFyIiwiRGVmaW5pdGlvblJ1bGVOYW1lIiwiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwiZGVmaW5pdGlvblJ1bGVOYW1lIiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJkZWZpbml0aW9uUnVsZU5hbWVQYXJ0IiwidmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQiLCJ2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlbkRlZmluaXRpb25SdWxlTmFtZVBhcnRzIiwiZ3JvdXBPZlBhcnRzUGFydCIsInplcm9Pck1vcmVHcm91cE9mUGFydHNQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUF6QjtBQUFBLElBQ01FLFVBQVUsR0FBR0YsT0FBTyxDQUFDLGVBQUQsQ0FEMUI7QUFBQSxJQUVNRyxZQUFZLEdBQUdILE9BQU8sQ0FBQyw4QkFBRCxDQUY1QjtBQUFBLElBR01JLGdCQUFnQixHQUFHSixPQUFPLENBQUMsa0NBQUQsQ0FIaEM7QUFBQSxJQUlNSyxrQkFBa0IsR0FBR0wsT0FBTyxDQUFDLGlDQUFELENBSmxDO0FBQUEsSUFLTU0sbUJBQW1CLEdBQUdOLE9BQU8sQ0FBQyxxQ0FBRCxDQUxuQzs7QUFPTSxJQUFFTyxjQUFGLEdBQXFCUixNQUFyQixDQUFFUSxjQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkQsY0FEbEIsQ0FDRUMsV0FERjtBQUFBLElBRUVDLGtCQUZGLEdBRXlCUixTQUZ6QixDQUVFUSxrQkFGRjs7SUFJQUMscUI7OztBQUNKLG1DQUFjO0FBQUE7O0FBQ1osUUFBTUMsa0JBQWtCLEdBQUdGLGtCQUEzQjtBQUFBLFFBQ01HLGdDQUFnQyxHQUFHSixXQUR6QztBQUFBLFFBRU1LLHNCQUFzQixHQUFHLElBQUlWLFlBQUosQ0FBaUJRLGtCQUFqQixDQUYvQjtBQUFBLFFBR01HLDZCQUE2QixHQUFHLElBQUlULGtCQUFKLENBQXVCTyxnQ0FBdkIsQ0FIdEM7QUFBQSxRQUlNRyxvREFBb0QsR0FBRyxDQUNyREQsNkJBRHFELEVBRXJERCxzQkFGcUQsQ0FKN0Q7QUFBQSxRQVFNRyxnQkFBZ0IsR0FBRyxJQUFJWixnQkFBSixDQUFxQlcsb0RBQXJCLENBUnpCO0FBQUEsUUFTTUUsMEJBQTBCLEdBQUcsSUFBSVgsbUJBQUosQ0FBd0JVLGdCQUF4QixDQVRuQztBQUFBLFFBVU1FLEtBQUssR0FBRyxDQUNOTCxzQkFETSxFQUVOSSwwQkFGTSxDQVZkO0FBRFksOEZBZ0JOQyxLQWhCTTtBQWlCYjs7O0VBbEJpQ2hCLFU7O0FBcUJwQ2lCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYscUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoXCIuLi9ydWxlTmFtZXNcIiksXG4gICAgICBEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb25cIiksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKFwiLi4vcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHNcIiksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKFwiLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgdmVydGljYWxCYXIgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBEZWZpbml0aW9uUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgRGVmaW5pdGlvbnNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25SdWxlTmFtZSA9IERlZmluaXRpb25SdWxlTmFtZSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25SdWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlbkRlZmluaXRpb25SdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5EZWZpbml0aW9uUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgemVyb09yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChncm91cE9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlR3JvdXBPZlBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc0RlZmluaXRpb247XG4iXX0=