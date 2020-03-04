'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    RuleNode = require('../node/rule'),
    RuleDefinition = require('../definition/rule');

var RuleRuleName = ruleNames.RuleRuleName;

var RuleRule = /*#__PURE__*/function (_Rule) {
  _inherits(RuleRule, _Rule);

  function RuleRule() {
    _classCallCheck(this, RuleRule);

    var ruleDefinition = new RuleDefinition(),
        name = RuleRuleName,
        definitions = [ruleDefinition],
        Node = RuleNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(RuleRule).call(this, name, definitions, Node));
  }

  return RuleRule;
}(Rule);

module.exports = RuleRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiUnVsZSIsInJlcXVpcmUiLCJydWxlTmFtZXMiLCJSdWxlTm9kZSIsIlJ1bGVEZWZpbml0aW9uIiwiUnVsZVJ1bGVOYW1lIiwiUnVsZVJ1bGUiLCJydWxlRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUUsUUFBUSxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUZ4QjtBQUFBLElBR01HLGNBQWMsR0FBR0gsT0FBTyxDQUFDLG9CQUFELENBSDlCOztJQUtRSSxZLEdBQWlCSCxTLENBQWpCRyxZOztJQUVGQyxROzs7QUFDSixzQkFBYztBQUFBOztBQUNaLFFBQU1DLGNBQWMsR0FBRyxJQUFJSCxjQUFKLEVBQXZCO0FBQUEsUUFDTUksSUFBSSxHQUFHSCxZQURiO0FBQUEsUUFFTUksV0FBVyxHQUFHLENBQ1pGLGNBRFksQ0FGcEI7QUFBQSxRQUtNRyxJQUFJLEdBQUdQLFFBTGI7QUFEWSxpRkFRTkssSUFSTSxFQVFBQyxXQVJBLEVBUWFDLElBUmI7QUFTYjs7O0VBVm9CVixJOztBQWF2QlcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixRQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgUnVsZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3J1bGUnKSxcbiAgICAgIFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlJyk7XG5cbmNvbnN0IHsgUnVsZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFJ1bGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IFJ1bGVSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUnVsZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVJ1bGU7XG4iXX0=