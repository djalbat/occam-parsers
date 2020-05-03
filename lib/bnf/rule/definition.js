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
    DefinitionDefinition = require("../definition/definition");

var DefinitionRuleName = ruleNames.DefinitionRuleName;

var DefinitionRule = /*#__PURE__*/function (_Rule) {
  _inherits(DefinitionRule, _Rule);

  function DefinitionRule() {
    _classCallCheck(this, DefinitionRule);

    var name = DefinitionRuleName,
        definitionDefinition = new DefinitionDefinition(),
        definitions = [definitionDefinition],
        Node = DefinitionNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionRule).call(this, name, definitions, Node));
  }

  return DefinitionRule;
}(Rule);

module.exports = DefinitionRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJEZWZpbml0aW9uTm9kZSIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwiRGVmaW5pdGlvblJ1bGVOYW1lIiwiRGVmaW5pdGlvblJ1bGUiLCJuYW1lIiwiZGVmaW5pdGlvbkRlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsY0FBYyxHQUFHRixPQUFPLENBQUMsb0JBQUQsQ0FGOUI7QUFBQSxJQUdNRyxvQkFBb0IsR0FBR0gsT0FBTyxDQUFDLDBCQUFELENBSHBDOztJQUtRSSxrQixHQUF1QkgsUyxDQUF2Qkcsa0I7O0lBRUZDLGM7OztBQUNKLDRCQUFjO0FBQUE7O0FBQ1osUUFBTUMsSUFBSSxHQUFHRixrQkFBYjtBQUFBLFFBQ01HLG9CQUFvQixHQUFHLElBQUlKLG9CQUFKLEVBRDdCO0FBQUEsUUFFTUssV0FBVyxHQUFHLENBQ1pELG9CQURZLENBRnBCO0FBQUEsUUFLTUUsSUFBSSxHQUFHUCxjQUxiO0FBRFksdUZBUU5JLElBUk0sRUFRQUUsV0FSQSxFQVFhQyxJQVJiO0FBU2I7OztFQVYwQlYsSTs7QUFhN0JXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sY0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoXCIuLi9ydWxlXCIpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZShcIi4uL3J1bGVOYW1lc1wiKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZShcIi4uL25vZGUvZGVmaW5pdGlvblwiKSxcbiAgICAgIERlZmluaXRpb25EZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vZGVmaW5pdGlvblwiKTtcblxuY29uc3QgeyBEZWZpbml0aW9uUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgRGVmaW5pdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IERlZmluaXRpb25SdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25SdWxlO1xuIl19