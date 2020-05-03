"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require("../rule"),
    ruleNames = require("../ruleNames"),
    DefinitionNode = require("../node/definition"),
    LookAheadModifierRuleDefinition = require("../definition/lookAheadModifierRule");

var LookAheadModifierRuleName = ruleNames.LookAheadModifierRuleName;

var LookAheadModifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(LookAheadModifierRule, _Rule);

  function LookAheadModifierRule() {
    _classCallCheck(this, LookAheadModifierRule);

    var name = LookAheadModifierRuleName,
        lookAheadModifierRuleDefinition = new LookAheadModifierRuleDefinition(),
        definitions = [lookAheadModifierRuleDefinition],
        Node = DefinitionNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRule).call(this, name, definitions, Node));
  }

  return LookAheadModifierRule;
}(Rule);

module.exports = LookAheadModifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2tBaGVhZE1vZGlmaWVyLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwicnVsZU5hbWVzIiwiRGVmaW5pdGlvbk5vZGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUR6QjtBQUFBLElBRU1FLGNBQWMsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRjlCO0FBQUEsSUFHTUcsK0JBQStCLEdBQUdILE9BQU8sQ0FBQyxxQ0FBRCxDQUgvQzs7SUFLUUkseUIsR0FBOEJILFMsQ0FBOUJHLHlCOztJQUVGQyxxQjs7O0FBQ0osbUNBQWM7QUFBQTs7QUFDWixRQUFNQyxJQUFJLEdBQUdGLHlCQUFiO0FBQUEsUUFDTUcsK0JBQStCLEdBQUcsSUFBSUosK0JBQUosRUFEeEM7QUFBQSxRQUVNSyxXQUFXLEdBQUcsQ0FDWkQsK0JBRFksQ0FGcEI7QUFBQSxRQUtNRSxJQUFJLEdBQUdQLGNBTGI7QUFEWSw4RkFRTkksSUFSTSxFQVFBRSxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVmlDVixJOztBQWFwQ1csTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixxQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoXCIuLi9ydWxlXCIpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZShcIi4uL25vZGUvZGVmaW5pdGlvblwiKSxcbiAgICAgIExvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGVcIik7XG5cbmNvbnN0IHsgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBMb29rQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb29rQWhlYWRNb2RpZmllclJ1bGU7XG4iXX0=